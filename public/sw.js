// Service Worker for advanced caching and performance optimization

const CACHE_NAME = 'cogniwide-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';
const IMAGE_CACHE = 'images-v2';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/offline.html',
  // Add critical CSS and JS files here
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache first, then network (for static assets)
  CACHE_FIRST: 'cache-first',
  // Network first, then cache (for dynamic content)
  NETWORK_FIRST: 'network-first',
  // Stale while revalidate (for frequently updated content)
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
  // Network only (for sensitive data)
  NETWORK_ONLY: 'network-only',
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && 
                cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== IMAGE_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Handle cross-origin requests (like simpleicons, google analytics, etc)
  if (url.origin !== self.location.origin) {
    // Only cache external images if we really want to, otherwise network only
    if (url.hostname === 'cdn.simpleicons.org' || url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
       event.respondWith(cacheFirst(request));
    } else {
       // Let the browser handle all other cross-origin requests
       return;
    }
    return;
  }

  // Determine cache strategy based on request type
  const strategy = getCacheStrategy(request);
  
  switch (strategy) {
    case CACHE_STRATEGIES.CACHE_FIRST:
      event.respondWith(cacheFirst(request));
      break;
    case CACHE_STRATEGIES.NETWORK_FIRST:
      event.respondWith(networkFirst(request));
      break;
    case CACHE_STRATEGIES.STALE_WHILE_REVALIDATE:
      event.respondWith(staleWhileRevalidate(request));
      break;
    case CACHE_STRATEGIES.NETWORK_ONLY:
      // Let the browser handle it
      break;
    default:
      event.respondWith(staleWhileRevalidate(request));
  }
});

// Determine cache strategy based on request
function getCacheStrategy(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Static assets - cache first
  // IMPORTANT: Never cache Next.js build chunks to prevent ChunkLoadError
  if (pathname.startsWith('/_next/static/')) {
    return CACHE_STRATEGIES.NETWORK_ONLY;
  }

  if (pathname.startsWith('/static/') ||
      pathname.match(/\.(css|woff|woff2|ttf|otf)$/)) {
    return CACHE_STRATEGIES.CACHE_FIRST;
  }

  // Images - cache first with longer TTL
  if (pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
    return CACHE_STRATEGIES.CACHE_FIRST;
  }

  // API routes - network first
  if (pathname.startsWith('/api/')) {
    return CACHE_STRATEGIES.NETWORK_FIRST;
  }

  // Pages - stale while revalidate
  return CACHE_STRATEGIES.STALE_WHILE_REVALIDATE;
}

// Cache first strategy
async function cacheFirst(request) {
  const cacheName = getCache(request);
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/offline.html');
    }
    
    throw error;
  }
}

// Network first strategy
async function networkFirst(request) {
  const cacheName = getCache(request);
  const cache = await caches.open(cacheName);

  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request) {
  const cacheName = getCache(request);
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  // Fetch from network in background
  const networkResponsePromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch((error) => {
      // Silent catch
    });

  // Return cached response immediately if available
  if (cachedResponse) {
    return cachedResponse;
  }

  // If no cached response, wait for network
  return networkResponsePromise;
}

// Get appropriate cache name for request
function getCache(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
    return IMAGE_CACHE;
  }

  // Never store Next.js chunks in cache
  if (pathname.startsWith('/_next/static/')) {
    return DYNAMIC_CACHE; // will be NETWORK_ONLY above, cache not used
  }

  if (pathname.startsWith('/static/')) {
    return STATIC_CACHE;
  }

  return DYNAMIC_CACHE;
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle offline form submissions, analytics, etc.
}

// Push notifications (if needed)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey,
      },
      actions: [
        {
          action: 'explore',
          title: 'Explore',
          icon: '/icon-explore.png',
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/icon-close.png',
        },
      ],
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Periodic background sync (if supported)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'content-sync') {
    event.waitUntil(syncContent());
  }
});

async function syncContent() {
  // Sync content in background
}
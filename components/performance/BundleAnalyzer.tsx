'use client';

import { useEffect, useState } from 'react';
import { analyzeBundleSize, trackMemoryUsage } from '@/lib/web-vitals';

interface BundleStats {
  totalSize: number;
  scriptCount: number;
  memoryUsage?: {
    used: number;
    total: number;
    limit: number;
  };
}

export function BundleAnalyzer() {
  const [stats, setStats] = useState<BundleStats | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const analyzeBundle = async () => {
      const scripts = Array.from(document.querySelectorAll('script[src]'));
      let totalSize = 0;

      for (const script of scripts) {
        try {
          const scriptElement = script as HTMLScriptElement;
          if (scriptElement.src) {
            const response = await fetch(scriptElement.src, { method: 'HEAD' });
            const size = parseInt(response.headers.get('content-length') || '0');
            totalSize += size;
          }
        } catch (e) {
          // Ignore CORS errors for external scripts
        }
      }

      const memoryUsage = trackMemoryUsage();

      setStats({
        totalSize: Math.round(totalSize / 1024), // KB
        scriptCount: scripts.length,
        memoryUsage,
      });
    };

    // Analyze after initial load
    const timeout = setTimeout(analyzeBundle, 2000);

    // Show/hide with keyboard shortcut
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'B') {
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      clearTimeout(timeout);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (process.env.NODE_ENV !== 'development' || !isVisible || !stats) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Bundle Stats</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div>Scripts: {stats.scriptCount}</div>
        <div>Size: ~{stats.totalSize}KB</div>
        
        {stats.memoryUsage && (
          <>
            <div className="border-t border-gray-600 pt-1 mt-2">
              <div>Memory Usage:</div>
              <div>Used: {stats.memoryUsage.used}MB</div>
              <div>Total: {stats.memoryUsage.total}MB</div>
              <div>Limit: {stats.memoryUsage.limit}MB</div>
            </div>
          </>
        )}
      </div>
      
      <div className="text-gray-400 mt-2 text-xs">
        Ctrl+Shift+B to toggle
      </div>
    </div>
  );
}

// Performance budget component
interface PerformanceBudgetProps {
  budgets: {
    javascript: number; // KB
    css: number; // KB
    images: number; // KB
    fonts: number; // KB
  };
}

export function PerformanceBudget({ budgets }: PerformanceBudgetProps) {
  const [usage, setUsage] = useState<Record<string, number>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const analyzeResources = async () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const usage = {
        javascript: 0,
        css: 0,
        images: 0,
        fonts: 0,
      };

      for (const resource of resources) {
        const size = resource.transferSize || 0;
        const url = resource.name;

        if (url.includes('.js')) {
          usage.javascript += size;
        } else if (url.includes('.css')) {
          usage.css += size;
        } else if (url.match(/\\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
          usage.images += size;
        } else if (url.match(/\\.(woff|woff2|ttf|otf)$/i)) {
          usage.fonts += size;
        }
      }

      // Convert to KB
      Object.keys(usage).forEach(key => {
        usage[key as keyof typeof usage] = Math.round(usage[key as keyof typeof usage] / 1024);
      });

      setUsage(usage);
    };

    setTimeout(analyzeResources, 3000);

    // Show/hide with keyboard shortcut
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (process.env.NODE_ENV !== 'development' || !isVisible) {
    return null;
  }

  const getBudgetStatus = (used: number, budget: number) => {
    const percentage = (used / budget) * 100;
    if (percentage <= 80) return 'good';
    if (percentage <= 100) return 'warning';
    return 'over';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'over': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="fixed bottom-4 left-4 bg-black text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Performance Budget</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        {Object.entries(budgets).map(([type, budget]) => {
          const used = usage[type] || 0;
          const status = getBudgetStatus(used, budget);
          const percentage = Math.min((used / budget) * 100, 100);
          
          return (
            <div key={type}>
              <div className="flex justify-between items-center mb-1">
                <span className="capitalize">{type}:</span>
                <span className={getStatusColor(status)}>
                  {used}KB / {budget}KB
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1">
                <div
                  className={`h-1 rounded-full transition-all duration-300 ${
                    status === 'good' ? 'bg-green-400' :
                    status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="text-gray-400 mt-2 text-xs">
        Ctrl+Shift+P to toggle
      </div>
    </div>
  );
}
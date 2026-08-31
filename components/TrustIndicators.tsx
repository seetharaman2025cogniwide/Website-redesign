'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

/* --------------------------------------------------------------------------
 * Perspective belt: the client logos are laid out around a vertical cylinder
 * and the whole drum turns slowly. A tile facing the viewer is sharp and fully
 * opaque; as it rounds the sides it dims, blurs and falls behind the ones in
 * front. Hovering the belt eases it down to a crawl so a logo can be read.
 *
 * The rotation is driven by requestAnimationFrame writing straight to each
 * tile's style — running it through React state would re-render fifteen
 * subtrees sixty times a second for no benefit.
 * -------------------------------------------------------------------------- */
const BASE_SPEED = 0.0035 // radians per frame at rest
const HOVER_SPEED = 0.0006 // radians per frame while hovered
const SPEED_EASE = 0.06 // how quickly the drum reaches its target speed

// Tile geometry per breakpoint. The radius is derived from the tile footprint
// so the logos sit evenly around the drum however many of them there are.
const tileMetrics = (width: number, count: number) => {
  const tileW = width < 640 ? 108 : width < 1024 ? 132 : 156
  const gap = width < 640 ? 22 : 32
  return {
    tileW,
    tileH: Math.round(tileW * 0.5),
    radius: (count * (tileW + gap)) / (2 * Math.PI),
    height: width < 640 ? 240 : 330
  }
}

const TrustIndicators = () => {
  const clientLogos = [
    { name: 'Quess', logo: '/clients/Quess.png' },
    { name: 'Alfardan', logo: '/clients/alfardan.png' },
    { name: 'Almuzaini', logo: '/clients/almuzaini.png' },
    { name: 'Awnic', logo: '/clients/awnic.png' },
    { name: 'Federal Bank', logo: '/clients/federalbank.png' },
    // { name: 'Fifth9', logo: '/clients/fifth9.png' },
    { name: 'Lycamobile', logo: '/clients/lycamobile.png' },
    { name: 'Nesto', logo: '/clients/nesto.jpg' },
    // { name: 'Geepas', logo: '/clients/geepas.webp' },
    { name: 'RoyalFord', logo: '/clients/brand-royalford.png' },
    { name: 'OlsenMark', logo: '/clients/olsenmark.webp' },
    { name: 'YoungLife', logo: '/clients/younglife.png' },
    { name: 'Krypton', logo: '/clients/krypton.webp' },
    { name: 'Clark Ford', logo: '/clients/clarkford.webp' },
    { name: 'Day N Day', logo: '/clients/daynday.png' },
    { name: 'Mark&Save', logo: '/clients/markandsave.png' },
    { name: 'Western-International', logo: '/clients/western-international.webp' }
  ]

  const statistics = [
    { number: 75, suffix: '%', label: 'Average Efficiency Gain' },
    { number: 99.9, suffix: '%', label: 'Platform Uptime' },
    { number: 24, suffix: '/7', label: 'AI Agent Availability' }
  ]

  const [animatedStats, setAnimatedStats] = useState(statistics.map(stat => stat.number))
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    let timers: NodeJS.Timeout[] = []

    const animateStats = () => {
      if (hasAnimated) return
      setHasAnimated(true)

      // Reset to 0 before animating
      setAnimatedStats(statistics.map(() => 0))

      statistics.forEach((stat, index) => {
        let current = 0
        const increment = stat.number / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.number) {
            current = stat.number
            clearInterval(timer)
          }
          setAnimatedStats(prev => {
            const newStats = [...prev]
            newStats[index] = current
            return newStats
          })
        }, 30)
        timers.push(timer)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('statistics')
    if (element) observer.observe(element)

    return () => {
      observer.disconnect()
      timers.forEach(timer => clearInterval(timer))
    }
  }, [hasAnimated])

  /* ---------------------------------------------------------------------- *
   * Perspective belt
   * -------------------------------------------------------------------- */
  const logoCount = clientLogos.length
  const beltRef = useRef<HTMLDivElement>(null)
  const tileRefs = useRef<(HTMLDivElement | null)[]>([])
  const angleRef = useRef(0)
  const speedRef = useRef(BASE_SPEED)
  const targetSpeedRef = useRef(BASE_SPEED)
  const rafRef = useRef<number | null>(null)

  // Rendered on the server at the desktop size, then corrected on mount.
  const [metrics, setMetrics] = useState(() => tileMetrics(1280, logoCount))

  useEffect(() => {
    // Only swap state when the numbers actually change, so dragging a window
    // edge does not tear down and restart the animation loop on every pixel.
    const measure = () => setMetrics(prev => {
      const next = tileMetrics(window.innerWidth, logoCount)
      return next.tileW === prev.tileW && next.height === prev.height ? prev : next
    })
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [logoCount])

  useEffect(() => {
    const belt = beltRef.current
    if (!belt) return

    const { radius } = metrics
    const step = (Math.PI * 2) / logoCount
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Position every tile for the drum's current angle. Blur and opacity go on
    // the inner element: a filter on the transformed element itself would
    // flatten the 3D context in some browsers.
    const paint = () => {
      tileRefs.current.forEach((tile, i) => {
        if (!tile) return
        const a = angleRef.current + i * step
        const x = Math.sin(a) * radius
        const z = Math.cos(a) * radius
        const facing = (Math.cos(a) + 1) / 2 // 1 = square-on to the viewer

        tile.style.transform =
          `translate3d(${x.toFixed(1)}px, 0, ${z.toFixed(1)}px) rotateY(${((a * 180) / Math.PI).toFixed(2)}deg)`
        tile.style.zIndex = String(Math.round(facing * 100))

        const face = tile.firstElementChild as HTMLElement | null
        if (face) {
          face.style.opacity = (0.12 + facing * 0.88).toFixed(3)
          face.style.filter = `blur(${((1 - facing) * 2.6).toFixed(2)}px)`
        }
      })
    }

    if (reduced) {
      paint()
      return
    }

    const frame = () => {
      speedRef.current += (targetSpeedRef.current - speedRef.current) * SPEED_EASE
      angleRef.current += speedRef.current
      paint()
      rafRef.current = requestAnimationFrame(frame)
    }

    const stop = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }

    // Only spend frames while the section is actually on screen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (rafRef.current === null) frame()
        } else {
          stop()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(belt)

    return () => {
      observer.disconnect()
      stop()
    }
  }, [metrics, logoCount])

  const slowBelt = () => { targetSpeedRef.current = HOVER_SPEED }
  const resumeBelt = () => { targetSpeedRef.current = BASE_SPEED }

  return (
    <section className="py-20 lg:py-28 bg-[#0B0A14] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#7C3AED]/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Client Logos */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-center text-white text-3xl lg:text-4xl mb-12  font-bold">
            Trusted by leading{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_20px_rgba(139,92,246,0.45)]">
              Enterprises Worldwide
            </span>
          </h3>

          {/* Perspective belt — the drum of client logos */}
          <div
            ref={beltRef}
            className="relative overflow-hidden rounded-3xl border border-[#29263A]"
            style={{
              height: `${metrics.height}px`,
              WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent)',
              maskImage: 'linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent)'
            }}
            onMouseEnter={slowBelt}
            onMouseLeave={resumeBelt}
            onFocus={slowBelt}
            onBlur={resumeBelt}
          >
            {/* Violet haze the tiles rise out of */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(124,58,237,0.22),transparent_62%)]" />

            <div className="absolute inset-0" style={{ perspective: '1250px' }}>
              <div
                className="absolute left-1/2 top-1/2 h-0 w-0"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {clientLogos.map((client, index) => {
                  // First-paint position, so the tiles are already around the
                  // drum before the animation frame takes over.
                  const a = (index * Math.PI * 2) / logoCount
                  const facing = (Math.cos(a) + 1) / 2

                  return (
                    <div
                      key={client.name}
                      ref={el => { tileRefs.current[index] = el }}
                      className="absolute"
                      style={{
                        width: `${metrics.tileW}px`,
                        height: `${metrics.tileH}px`,
                        marginLeft: `${-metrics.tileW / 2}px`,
                        marginTop: `${-metrics.tileH / 2}px`,
                        transformStyle: 'preserve-3d',
                        willChange: 'transform',
                        zIndex: Math.round(facing * 100),
                        transform:
                          `translate3d(${(Math.sin(a) * metrics.radius).toFixed(1)}px, 0, ${(Math.cos(a) * metrics.radius).toFixed(1)}px) rotateY(${((a * 180) / Math.PI).toFixed(2)}deg)`
                      }}
                    >
                      <div
                        className="h-full w-full rounded-xl bg-white p-3 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.75)]"
                        style={{ opacity: 0.12 + facing * 0.88 }}
                      >
                        <div className="relative h-full w-full">
                          <Image
                            src={client.logo}
                            alt={client.name}
                            fill
                            sizes="160px"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Floor fade, so the drum sinks into the section rather than ending */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B0A14] to-transparent" />

            <span className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#777583]">
              Hover to slow
            </span>
          </div>
        </motion.div>

        {/* Statistics
        <motion.div
          id="statistics"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                suppressHydrationWarning
              >
                {stat.number === 99.9
                  ? animatedStats[index].toFixed(1)
                  : Math.floor(animatedStats[index])
                }
                <span className="text-brand-blue">{stat.suffix}</span>
              </motion.div>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div> */}

      </div>
    </section>
  )
}

export default TrustIndicators

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

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

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gray-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
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
          <h3 className="text-center text-gray-900 text-3xl lg:text-4xl mb-12  font-bold">
            Trusted by leading <span className='text-brand-blue'>Enterprises Worldwide</span>
          </h3>

          <div className="space-y-8">
            {/* First Row - Right to Left */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: [0, -100 * 8] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ width: `${8 * 140}px` }}
              >
                {clientLogos.slice(0, 8).concat(clientLogos.slice(0, 8)).map((client, index) => (
                  <motion.div
                    key={`row1-${client.name}-${index}`}
                    className="flex-shrink-0 w-32 h-20 flex items-center justify-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 ease-out group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: (index % 8) * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain transition-all duration-300 hover:scale-110"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Second Row - Left to Right (Same 8 companies as first row) */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: [-100 * 8, 0] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ width: `${8 * 140}px` }}
              >
                {clientLogos.slice(0, 8).concat(clientLogos.slice(0, 8)).map((client, index) => (
                  <motion.div
                    key={`row2-${client.name}-${index}`}
                    className="flex-shrink-0 w-32 h-20 flex items-center justify-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 ease-out group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: (index % 8) * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain transition-all duration-300 hover:scale-110"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
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

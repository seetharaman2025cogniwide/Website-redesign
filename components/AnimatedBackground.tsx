'use client'

import { useEffect, useRef } from 'react'

interface AnimatedBackgroundProps {
  effect?: 'vanta-net'
  className?: string
}

const AnimatedBackground = ({ effect = 'vanta-net', className = '' }: AnimatedBackgroundProps) => {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)

  useEffect(() => {
    // Load Vanta Net effect
    const loadVantaEffect = async () => {
      if (!vantaRef.current) return

      // Clean up any existing effect
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }

      try {
        const loadScript = (src: string): Promise<void> => {
          return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
              resolve()
              return
            }
            const script = document.createElement('script')
            script.src = src
            script.async = true
            script.onload = () => resolve()
            script.onerror = () => reject(new Error(`Failed to load: ${src}`))
            document.head.appendChild(script)
          })
        }

        // Load THREE.js
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
        await new Promise(resolve => setTimeout(resolve, 100))

        // Load Vanta Net
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.net.min.js')
        await new Promise(resolve => setTimeout(resolve, 100))

        if ((window as any).VANTA && (window as any).THREE) {
          vantaEffect.current = (window as any).VANTA.NET({
            el: vantaRef.current,
            THREE: (window as any).THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3b82f6,
            backgroundColor: 0x0a2647,
            points: 10.00,
            maxDistance: 23.00,
            spacing: 17.00,
            showDots: true,
            backgroundAlpha: 0.95
          })
        }
      } catch (error) {
        console.error('Failed to load Vanta Net effect:', error)
      }
    }

    loadVantaEffect()
    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy()
          vantaEffect.current = null
        } catch (error) {
          console.error('Error destroying Vanta effect:', error)
        }
      }
    }
  }, [effect])

  return (
    <div 
      ref={vantaRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{
        zIndex: 1,
        pointerEvents: 'none',
        // Fallback background
        background: 'linear-gradient(135deg, #0a2647 0%, #091f3a 50%, #050c19 100%)'
      }}
    />
  )
}

export default AnimatedBackground
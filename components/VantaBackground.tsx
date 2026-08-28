'use client'

import { useEffect, useRef, useState } from 'react'

interface VantaBackgroundProps {
  effect?: 'globe' | 'waves' | 'net' | 'birds' | 'fog'
  className?: string
}

const VantaBackground = ({ effect = 'globe', className = '' }: VantaBackgroundProps) => {
  const vantaRef = useRef<HTMLDivElement>(null)
  const [vantaEffect, setVantaEffect] = useState<any>(null)

  useEffect(() => {
    if (!vantaRef.current) return

    let effectInstance: any = null;

    const loadVanta = async () => {
      try {
        // Dynamically import THREE and specific VANTA effects to avoid SSR issues
        const THREE = await import('three')
        
        switch (effect) {
          case 'globe':
            // @ts-ignore
            const GLOBE = (await import('vanta/dist/vanta.globe.min')).default
            if (!vantaRef.current) return
            effectInstance = GLOBE({
              el: vantaRef.current,
              THREE: THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x3b82f6, // Blue color
              color2: 0x1e40af, // Darker blue
              backgroundColor: 0x0a2647, // Dark background matching your theme
              size: 1.20,
              backgroundAlpha: 0.8 // Semi-transparent background
            })
            break

          case 'waves':
            // @ts-ignore
            const WAVES = (await import('vanta/dist/vanta.waves.min')).default
            if (!vantaRef.current) return
            effectInstance = WAVES({
              el: vantaRef.current,
              THREE: THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x1e40af, // Blue waves
              shininess: 30.00,
              waveHeight: 15.00,
              waveSpeed: 0.75,
              zoom: 0.85,
              backgroundColor: 0x0a2647,
              backgroundAlpha: 0.8
            })
            break

          case 'net':
            // @ts-ignore
            const NET = (await import('vanta/dist/vanta.net.min')).default
            if (!vantaRef.current) return
            effectInstance = NET({
              el: vantaRef.current,
              THREE: THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x3b82f6, // Blue network
              backgroundColor: 0x0a2647,
              points: 8.00,
              maxDistance: 25.00,
              spacing: 20.00,
              backgroundAlpha: 0.8
            })
            break

          case 'birds':
            // @ts-ignore
            const BIRDS = (await import('vanta/dist/vanta.birds.min')).default
            if (!vantaRef.current) return
            effectInstance = BIRDS({
              el: vantaRef.current,
              THREE: THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              backgroundColor: 0x0a2647,
              color1: 0x3b82f6,
              color2: 0x1e40af,
              colorMode: "variance",
              birdSize: 1.20,
              wingSpan: 25.00,
              speedLimit: 4.00,
              separation: 20.00,
              alignment: 20.00,
              cohesion: 20.00,
              quantity: 3.00,
              backgroundAlpha: 0.8
            })
            break

          case 'fog':
            // @ts-ignore
            const FOG = (await import('vanta/dist/vanta.fog.min')).default
            if (!vantaRef.current) return
            effectInstance = FOG({
              el: vantaRef.current,
              THREE: THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              highlightColor: 0x3b82f6,
              midtoneColor: 0x1e40af,
              lowlightColor: 0x0a2647,
              baseColor: 0x0a2647,
              blurFactor: 0.6,
              speed: 1.20,
              zoom: 0.80,
              backgroundColor: 0x0a2647,
              backgroundAlpha: 0.8
            })
            break

          default:
            console.warn(`Vanta effect "${effect}" not supported`)
            return
        }

        setVantaEffect(effectInstance)
      } catch (error) {
        console.error('Error loading Vanta effect:', error)
        console.error('Make sure vanta is properly installed: npm install vanta three')
      }
    }

    loadVanta()

    // Cleanup function
    return () => {
      if (effectInstance) {
        effectInstance.destroy()
      }
    }
  }, [effect])

  // Optional: Cleanup on unmount (handled above, but kept if vantaEffect state is used elsewhere)
  useEffect(() => {
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy()
      }
    }
  }, [vantaEffect])

  return (
    <div 
      ref={vantaRef} 
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ 
        zIndex: 1,
        pointerEvents: 'none', // Allow clicks to pass through
        // Fallback background in case Vanta doesn't load
        background: !vantaEffect ? 'linear-gradient(135deg, #0a2647 0%, #091f3a 50%, #050c19 100%)' : 'transparent'
      }}
    />
  )
}

export default VantaBackground
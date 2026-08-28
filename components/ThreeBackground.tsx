'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 50
    camera.position.y = 10

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // --- Flowing Lines Effect ---
    const group = new THREE.Group()
    scene.add(group)

    const numLines = 50
    const pointsPerLine = 50
    const lines: THREE.Line[] = []
    
    // Create lines
    for (let i = 0; i < numLines; i++) {
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(pointsPerLine * 3)
      
      // Initial positions (random curves)
      const xOffset = (Math.random() - 0.5) * 100
      const yOffset = (Math.random() - 0.5) * 50
      const zOffset = (Math.random() - 0.5) * 50
      
      for (let j = 0; j < pointsPerLine; j++) {
        const t = j / pointsPerLine
        positions[j * 3] = xOffset + Math.sin(t * 10 + i) * 20
        positions[j * 3 + 1] = yOffset + Math.cos(t * 5 + i) * 10
        positions[j * 3 + 2] = zOffset + j * 2 - 50
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color().setHSL(Math.random() * 0.2 + 0.5, 0.8, 0.5), // Blue/Purple/Cyan range
        transparent: true,
        opacity: Math.random() * 0.5 + 0.2
      })
      
      const line = new THREE.Line(geometry, material)
      lines.push(line)
      group.add(line)
    }

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0
    
    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.05
      mouseY = (event.clientY - window.innerHeight / 2) * 0.05
    }

    document.addEventListener('mousemove', onDocumentMouseMove)

    // Animation Loop
    let time = 0
    let animationFrameId: number

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      time += 0.005

      // Rotate group
      group.rotation.y += 0.001
      group.rotation.y += (mouseX * 0.0005 - group.rotation.y) * 0.05
      group.rotation.x += (mouseY * 0.0005 - group.rotation.x) * 0.05

      // Animate Lines
      lines.forEach((line, i) => {
        const positions = line.geometry.attributes.position.array as Float32Array
        
        for (let j = 0; j < pointsPerLine; j++) {
          const t = j / pointsPerLine
          const i3 = j * 3
          
          // Wave motion
          positions[i3] += Math.sin(time + i + j * 0.1) * 0.1
          positions[i3 + 1] += Math.cos(time + i + j * 0.1) * 0.1
        }
        line.geometry.attributes.position.needsUpdate = true
      })

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    const currentContainer = containerRef.current;

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousemove', onDocumentMouseMove)
      if (currentContainer && currentContainer.contains(renderer.domElement)) {
        currentContainer.removeChild(renderer.domElement)
      }
      lines.forEach(line => {
        line.geometry.dispose()
        ;(line.material as THREE.Material).dispose()
      })
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  )
}

export default ThreeBackground

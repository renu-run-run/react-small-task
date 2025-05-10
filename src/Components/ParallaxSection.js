import React, { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import img1 from '../asset/image/img1.jpg'

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const ParallaxSection = () => {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    console.log("useEffect is running")

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Smoothness level (you can tweak this)
    })

    // Set up the animation frame loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)

      // Update ScrollTrigger to sync with Lenis
      ScrollTrigger.update()
    }

    requestAnimationFrame(raf)

    // GSAP ScrollTrigger + parallax effect
    gsap.to(imgRef.current, {
      y: -200, // How far to move the image upwards
      ease: 'none', // No easing for smooth parallax
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',  // When the section starts coming into the viewport
        end: 'bottom top',    // When the section leaves the viewport
        scrub: true,          // Make animation match the scroll speed
      },
    })

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.killAll()
      lenis.destroy() // Clean up Lenis instance
    }
  }, [])

  return (
    <div
      className="parallax-section"
      ref={sectionRef}
      style={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',  // Debugging: Added background color
      }}
    >
      <img
        ref={imgRef}
        className="parallax-img"
        src={img1}  // Ensure the path is correct
        alt="Parallax"
        style={{
          width: '100%',
          height: 'auto',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <h1
        style={{
          position: 'relative',
          zIndex: 10,
          color: 'white',
          textAlign: 'center',
          marginTop: '40vh',
        }}
      >
        Parallax Scroll with Lenis + GSAP
      </h1>
    </div>
  )
}

export default ParallaxSection

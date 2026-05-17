'use client'

import {useRef, useState, useEffect, JSX} from 'react'
import {motion, useSpring, animate, AnimatePresence} from 'framer-motion'

import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import TechStackSection from '@/components/TechStackSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import TunnelBackground from '@/components/TunnelBackground'

interface Section {
  id: string
  label: string
  component: JSX.Element
}

export default function Page() {
  const sections: Section[] = [
    // eslint-disable-next-line react-hooks/immutability
    {id: 'hero', label: 'Home', component: <HeroSection onNext={() => transitionTo(1)}/>},
    {id: 'about', label: 'About', component: <AboutSection/>},
    {id: 'tech', label: 'Tech Stack', component: <TechStackSection/>},
    {id: 'projects', label: 'Projects', component: <ProjectsSection/>},
    {id: 'contact', label: 'Contact', component: <div className="flex flex-col justify-center items-center gap-20 "><ContactSection/><Footer/></div>},
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const isTransitioning = useRef(false)
  const touchStartY = useRef(0)

  const zoom = useSpring(0, {stiffness: 300, damping: 70, mass: 1.1})

  const transitionTo = (nextIndex: number) => {
    if (
        isTransitioning.current ||
        nextIndex === currentIndex ||
        nextIndex < 0 ||
        nextIndex >= sections.length
    ) return

    isTransitioning.current = true

    animate(zoom, nextIndex, {
      duration: 0.50,
      ease: [0.32, 0, 0.18, 1],
      onUpdate: (v) => {
        const mid = (currentIndex + nextIndex) / 2
        const pastMidpoint =
            nextIndex > currentIndex ? v >= mid : v <= mid

        if (pastMidpoint && isTransitioning.current) {
          setCurrentIndex(nextIndex)
        }
      },
      onComplete: () => {
        setCurrentIndex(nextIndex)
        isTransitioning.current = false
      },
    })
  }

 const touchStartX = useRef(0)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isTransitioning.current) return
      if (e.deltaY > 0) transitionTo(currentIndex + 1)
      else transitionTo(currentIndex - 1)
    }
    window.addEventListener('wheel', handleWheel, {passive: false})
    return () => window.removeEventListener('wheel', handleWheel)
  }, [currentIndex])


  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY
      const deltaX = touchStartX.current - e.changedTouches[0].clientX

      // ignore if neither axis crossed the threshold
      if (Math.abs(deltaX) < 50 && Math.abs(deltaY) < 50) return
      if (isTransitioning.current) return

      // pick whichever axis moved more
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // horizontal swipe
        if (deltaX > 0) transitionTo(currentIndex + 1)  // swipe left → next
        else transitionTo(currentIndex - 1)               // swipe right → prev
      } else {
        // vertical swipe (keeps existing behaviour)
        if (deltaY > 0) transitionTo(currentIndex + 1)
        else transitionTo(currentIndex - 1)
      }
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [currentIndex])

  return (
      <div className="fixed inset-0 overflow-hidden bg-background text-foreground ">
        {/*<ParticlesBackground />*/}
        <div className="fixed top-6 left-6 z-50">
        <span className="text-xs md:text-sm lg:text-md font-body text-muted-foreground tracking-[0.2em] uppercase">
          {sections[currentIndex]?.label}
        </span>
        </div>
        <TunnelBackground zoom={zoom}/>

        <div className="relative flex justify-center z-30 h-full w-full ">
          <AnimatePresence mode="wait">
            <motion.div
                key={sections[currentIndex].id}
                initial={{
                  opacity: 0,
                  scale: 0.55,
                  filter: 'blur(12px)',
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                }}
                exit={{
                  opacity: 0,
                  scale: 1.18,
                  filter: 'blur(10px)',
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.32, 0, 0.18, 1],
                }}
                className="flex h-full w-full items-center justify-center "
            >
              <div className="w-full flex items-center justify-center ">
                {sections[currentIndex].component}
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Side nav dots */}
          {/*<div className="fixed right-6 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4">*/}
          <div className="flex justify-center items-center fixed bottom-20 z-50  gap-4">
            {sections.map((section, idx) => (
                <button
                    key={section.id}
                    onClick={() => transitionTo(idx)}
                    className={`h-2 w-2 rounded-full transition-all duration-500 ${
                        idx === currentIndex
                            ? 'scale-150 bg-primary shadow-[0_0_20px] shadow-primary'
                            : 'bg-white/20 hover:scale-125 hover:bg-white/50'
                    }`}
                />
            ))}
          </div>
        </div>
        <div className="fixed bottom-6 left-6 z-50">
        <span className="text-xs md:text-sm lg:text-md font-heading text-muted-foreground">
          <span className="neon-text">{String(currentIndex + 1).padStart(2, "0")}</span>
          <span className="mx-1">/</span>
          {String(sections.length).padStart(2, "0")}
        </span>
        </div>
      </div>
  )
}
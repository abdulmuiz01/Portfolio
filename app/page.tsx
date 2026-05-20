'use client'

import {useRef, useState, useEffect, useMemo, useCallback, JSX} from 'react'
import { dragState } from '@/lib/dragState'
import {motion, useSpring, animate, AnimatePresence} from 'framer-motion'

import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import TechStackSection from '@/components/TechStackSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import TunnelBackground from '@/components/TunnelBackground'
import {ScrollProgress} from '@/components/ScrollProgress'

interface Section {
  id: string
  label: string
  component: JSX.Element
}

const SECTION_COUNT = 5

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentIndexRef = useRef(0)
  const isTransitioning = useRef(false)
  const touchStartY = useRef(0)
  const touchStartX = useRef(0)

  const zoom = useSpring(0, {stiffness: 300, damping: 70, mass: 1.1})

  const transitionTo = useCallback((nextIndex: number) => {
    if (
        isTransitioning.current ||
        nextIndex === currentIndexRef.current ||
        nextIndex < 0 ||
        nextIndex >= SECTION_COUNT
    ) return

    isTransitioning.current = true
    const fromIndex = currentIndexRef.current
    let hasSwitched = false

    animate(zoom, nextIndex, {
      duration: 0.50,
      ease: [0.32, 0, 0.18, 1],
      onUpdate: (v) => {
        if (hasSwitched) return
        const mid = (fromIndex + nextIndex) / 2
        const pastMidpoint = nextIndex > fromIndex ? v >= mid : v <= mid

        if (pastMidpoint) {
          hasSwitched = true
          currentIndexRef.current = nextIndex
          setCurrentIndex(nextIndex)
        }
      },
      onComplete: () => {
        currentIndexRef.current = nextIndex
        setCurrentIndex(nextIndex)
        isTransitioning.current = false
      },
    })
  }, [zoom])

  const sections: Section[] = useMemo(() => [
    {id: 'hero', label: 'Home', component: <HeroSection onNext={() => transitionTo(1)}/>},
    {id: 'about', label: 'About', component: <AboutSection/>},
    {id: 'tech', label: 'Tech Stack', component: <TechStackSection/>},
    {id: 'projects', label: 'Projects', component: <ProjectsSection/>},
    {id: 'contact', label: 'Contact', component: <div className="flex flex-col justify-center items-center gap-20 "><ContactSection/><Footer/></div>},
  ], [transitionTo])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isTransitioning.current) return
      if (e.deltaY > 0) transitionTo(currentIndexRef.current + 1)
      else transitionTo(currentIndexRef.current - 1)
    }
    window.addEventListener('wheel', handleWheel, {passive: false})
    return () => window.removeEventListener('wheel', handleWheel)
  }, [transitionTo])

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      // If the user was dragging an interactive element, don't switch sections
      if (dragState.active) { dragState.active = false; return; }

      const deltaY = touchStartY.current - e.changedTouches[0].clientY
      const deltaX = touchStartX.current - e.changedTouches[0].clientX

      if (Math.abs(deltaX) < 50 && Math.abs(deltaY) < 50) return
      if (isTransitioning.current) return

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) transitionTo(currentIndexRef.current + 1)
        else transitionTo(currentIndexRef.current - 1)
      } else {
        if (deltaY > 0) transitionTo(currentIndexRef.current + 1)
        else transitionTo(currentIndexRef.current - 1)
      }
    }

    window.addEventListener('touchstart', handleTouchStart, {passive: true})
    window.addEventListener('touchend', handleTouchEnd, {passive: true})
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [transitionTo])

  return (
      <div className="fixed inset-0 overflow-hidden bg-background text-foreground ">
        {/*<ParticlesBackground />*/}
        <div className="fixed top-6 left-6 z-50">
        <span className="text-xs md:text-sm lg:text-md font-body text-muted-foreground tracking-[0.2em] uppercase">
          {sections[currentIndex]?.label}
        </span>
        </div>
        <ScrollProgress zoom={zoom} total={SECTION_COUNT} />
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
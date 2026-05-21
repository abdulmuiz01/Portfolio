'use client'

import {useRef, useState, useEffect, useMemo, useCallback, JSX} from 'react'
import {dragState} from '@/lib/dragState'
import {motion, useSpring, animate, AnimatePresence} from 'framer-motion'
import {useTranslations} from '@/lib/i18n'

import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import TechStackSection from '@/components/TechStackSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import TunnelBackground from '@/components/TunnelBackground'
import {ScrollProgress} from '@/components/ScrollProgress'
import Stepper from '@/components/Stepper'

interface Section {
    id: string
    label: string
    component: JSX.Element
}

const SECTION_COUNT = 6

export default function Page() {
    const t = useTranslations()
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentIndexRef = useRef(0)
    const isTransitioning = useRef(false)
    const touchStartY = useRef(0)

    const zoom = useSpring(0, {stiffness: 300, damping: 80, mass: 1.1})

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
            duration: 1,
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
        {id: 'hero', label: t.nav.home, component: <HeroSection onNext={() => transitionTo(1)}/>},
        {id: 'about', label: t.nav.about, component: <AboutSection/>},
        {id: 'experience', label: t.nav.experience, component: <ExperienceSection/>},
        {id: 'tech', label: t.nav.tech, component: <TechStackSection/>},
        {id: 'projects', label: t.nav.projects, component: <ProjectsSection/>},
        {
            id: 'contact',
            label: t.nav.contact,
            component: <div className="flex flex-col justify-center items-center gap-20 ">
                <ContactSection/><Footer/>
            </div>
        },
    ], [transitionTo, t])

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
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault()
                transitionTo(currentIndexRef.current + 1)
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault()
                transitionTo(currentIndexRef.current - 1)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [transitionTo])

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY.current = e.touches[0].clientY
        }

        const handleTouchEnd = (e: TouchEvent) => {
            if (dragState.active) {
                dragState.active = false;
                return;
            }

            const deltaY = touchStartY.current - e.changedTouches[0].clientY

            if (Math.abs(deltaY) < 50) return
            if (isTransitioning.current) return

            if (deltaY > 0) transitionTo(currentIndexRef.current + 1)
            else transitionTo(currentIndexRef.current - 1)
        }

        window.addEventListener('touchstart', handleTouchStart, {passive: true})
        window.addEventListener('touchend', handleTouchEnd, {passive: true})
        return () => {
            window.removeEventListener('touchstart', handleTouchStart)
            window.removeEventListener('touchend', handleTouchEnd)
        }
    }, [transitionTo])

    return (
        <div className="fixed inset-x-0 top-0 h-screen overflow-hidden touch-none bg-background text-foreground">
            <TunnelBackground zoom={zoom}/>
            <Stepper
                steps={sections.map(s => ({id: s.id, label: s.label}))}
                current={currentIndex}
                onNavigate={transitionTo}
                zoom={zoom}
            />
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
                            duration: 0.35,
                            ease: [0.32, 0, 0.18, 1],
                        }}
                        className="flex h-full w-full items-center justify-center "
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            {sections[currentIndex].component}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}
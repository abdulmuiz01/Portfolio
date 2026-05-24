'use client'

import {useTransform, MotionValue, motion} from 'framer-motion'

interface Step {
    id: string
    label: string
}

interface StepperProps {
    steps: Step[]
    current: number
    onNavigate: (index: number) => void
    zoom: MotionValue<number>
}

function HConnector({idx, zoom}: { idx: number; zoom: MotionValue<number> }) {
    const scaleX = useTransform(zoom, [idx, idx + 1], [0, 1])
    return (
        <div className="relative h-px w-10 md:w-28 lg:w-32 xl:w-52 bg-white/10 overflow-hidden">
            <motion.div className="absolute inset-0 origin-left bg-primary/60" style={{scaleX}}/>
        </div>
    )
}

export default function Stepper({steps, current, onNavigate, zoom}: StepperProps) {
    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex flex-row items-center">
            {steps.map((step, idx) => (
                <div key={step.id} className="flex flex-row items-center">
                    <button
                        onClick={() => onNavigate(idx)}
                        aria-label={`Go to ${step.label}`}
                        className="group relative flex flex-col items-center cursor-pointer px-1 md:px-2"
                    >
                        {/* Fixed wrapper — prevents size change from shifting neighbours */}
                        <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                            <div className={`rounded-full transition-all duration-300 ${
                                idx === current
                                    ? 'w-3 h-3 md:w-3.5 md:h-3.5 bg-primary shadow-[0_0_10px_2px] shadow-primary/70'
                                    : 'w-2 h-2 md:w-2.5 md:h-2.5 bg-muted-foreground/30 group-hover:bg-primary/50 group-hover:scale-125'
                            }`}/>
                        </div>

                        {/* Label — absolutely positioned so it never shifts the dot row */}
                        <span className={`absolute top-5 md:top-6 whitespace-nowrap font-body
                                        text-[10px] md:text-xs lg:text-sm
                                        tracking-[0.25em] uppercase select-none
                                        transition-all duration-300 ${
                            idx === current
                                ? 'opacity-100 text-primary'
                                : 'opacity-0 md:opacity-40 text-muted-foreground md:hover:opacity-70'
                        }`}>{step.label}</span>
                    </button>

                    {idx < steps.length - 1 && <HConnector idx={idx} zoom={zoom}/>}
                </div>
            ))}
        </nav>
    )
}

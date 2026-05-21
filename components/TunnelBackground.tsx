'use client'

import {memo} from 'react'
import {motion, useTransform, MotionValue} from 'framer-motion'
import {MagneticCard} from "@/components/magnetic/MagneticCard";

interface TunnelBackgroundProps {
    zoom: MotionValue<number>
}

const LAYERS = 6
const SPACING = 2250
const PERSPECTIVE = 900
const FAR_FADE = SPACING * 10
const NEAR_CLIP = 180
// Smooth scaling: ~75vw per layer unit, capped at the original lg pixel sizes
// Without the cap, large viewports (1440px+) produce 6000px+ GPU textures → compositor drop-outs
const BASE_VW = 75
const BASE_MAX_PX = 1600

const COLORS = [
    'var(--primary)',
    'var(--accent)',
    'var(--neon-dim)',
    'var(--primary)',
    'var(--accent)',
    'var(--primary)',
]

// Precompute per-layer style strings at module level — never recomputed
const LAYER_STYLES = Array.from({ length: LAYERS }).map((_, i) => {
    const color = COLORS[i % COLORS.length]
    const glowR = 12 + (i % 5) * 6
    return {
        borderColor: `hsl(${color})`,
        boxShadow: `0 0 ${glowR}px hsl(${color}), 0 0 ${glowR * 2}px hsl(${color} / 0.35), inset 0 0 ${glowR / 1.5}px hsl(${color} / 0.3)`,
    }
})

export default function TunnelBackground({ zoom }: TunnelBackgroundProps) {
    return (
        <MagneticCard
            className="fixed inset-x-0 top-0 h-screen z-0 flex items-center justify-center overflow-hidden pointer-events-none"
            style={{
                perspective: `${PERSPECTIVE}px`,
                perspectiveOrigin: '50% 50%',
            }}
        >
            {Array.from({ length: LAYERS }).map((_, i) => (
                <Layer key={i} index={i} zoom={zoom} />
            ))}

            {/* vanishing-point glow */}
            <div className="absolute h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute h-14 w-14 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute h-4 w-4 rounded-full bg-primary/70 blur-sm" />
        </MagneticCard>
    )
}

const Layer = memo(function Layer({
                                      index,
                                      zoom,
                                  }: {
    index: number
    zoom: MotionValue<number>
}) {
    const layerStyle = LAYER_STYLES[index]
    const vwSize = `min(${(index + 1) * BASE_VW}vw, ${(index + 1) * BASE_MAX_PX}px)`

    const transform = useTransform(zoom, (z) => {
        const zPos = -(index + 1) * SPACING + z * SPACING
        const rotate = index * 15 + z * 65
        return `translateZ(${zPos}px) rotateZ(${rotate}deg)`
    })

    const opacity = useTransform(zoom, (z) => {
        const zPos = -(index + 1) * SPACING + z * SPACING

        const farStart = -FAR_FADE
        const farEnd = farStart + SPACING * 3

        const farAlpha =
            zPos <= farStart
                ? 0
                : zPos >= farEnd
                    ? 1
                    : (zPos - farStart) / (farEnd - farStart)

        const nearAlpha =
            zPos <= 0 ? 1 : zPos >= NEAR_CLIP ? 0 : 1 - zPos / NEAR_CLIP

        const t = nearAlpha
        const easedNear =
            t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2

        return Math.min(farAlpha, easedNear)
    })

    return (
        <motion.div
            className="absolute"
            style={{
                width: vwSize,
                height: vwSize,
                transform,
                opacity,
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity',
            }}
        >
            <MagneticCard
                className="h-full w-full rounded-sm border-2 text-primary/10 bg-primary/0.5"
                style={layerStyle}
            />
        </motion.div>
    )
})

'use client'

import { useEffect, useRef } from 'react'
import { MotionValue } from 'framer-motion'

interface TunnelBackgroundProps {
    zoom: MotionValue<number>
}

const GRID = 152
const FOV = 600
const Z_NEAR = 160
const Z_FAR = 5240
const DEPTH_PER_SECTION = 200
const ROTATION_PER_SECTION = Math.PI / 4
export default function TunnelBackground({ zoom }: TunnelBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let w = 0
        let h = 0

        const resize = () => {
            const dpr = window.devicePixelRatio || 1
            w = window.innerWidth
            h = window.innerHeight
            canvas.width = w * dpr
            canvas.height = h * dpr
            canvas.style.width = `${w}px`
            canvas.style.height = `${h}px`
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        }
        resize()
        window.addEventListener('resize', resize)

        let animId: number

        const draw = () => {
            const z = zoom.get()
            const offset = z * DEPTH_PER_SECTION
            const angle  = z * ROTATION_PER_SECTION

            ctx.clearRect(0, 0, w, h)

            const cx = w / 2
            const cy = h / 2
            const halfW = cx * Z_NEAR / FOV
            const halfH = cy * Z_NEAR / FOV

            // Rotate the whole tunnel around the vanishing point (z-axis spin)
            ctx.save()
            ctx.translate(cx, cy)
            ctx.rotate(angle)
            ctx.translate(-cx, -cy)

            // Glow on every line
            ctx.shadowColor = 'rgba(0, 220, 200, 0.75)'
            ctx.shadowBlur = 5

            const proj = (wx: number, wy: number, wz: number): [number, number] => [
                cx + wx * FOV / wz,
                cy + wy * FOV / wz,
            ]

            const seg = (
                wx0: number, wy0: number, wz0: number,
                wx1: number, wy1: number, wz1: number,
            ) => {
                if (wz0 <= 1 || wz1 <= 1) return
                const [x0, y0] = proj(wx0, wy0, wz0)
                const [x1, y1] = proj(wx1, wy1, wz1)
                ctx.beginPath()
                ctx.moveTo(x0, y0)
                ctx.lineTo(x1, y1)
                ctx.stroke()
            }

            // 4 corner corridor lines — the only depth-direction lines
            ctx.strokeStyle = 'rgba(0, 220, 200, 0.5)'
            ctx.lineWidth = 0.1
            seg(-halfW, -halfH, Z_NEAR, -halfW, -halfH, Z_FAR)
            seg( halfW, -halfH, Z_NEAR,  halfW, -halfH, Z_FAR)
            seg( halfW,  halfH, Z_NEAR,  halfW,  halfH, Z_FAR)
            seg(-halfW,  halfH, Z_NEAR, -halfW,  halfH, Z_FAR)

            // Animated rings — square cross-sections flying toward the viewer
            const zBase = Z_NEAR + GRID - (offset % GRID)
            for (let d = zBase; d < Z_FAR; d += GRID) {
                const t = 1 - (d - Z_NEAR) / (Z_FAR - Z_NEAR)
                ctx.strokeStyle = `rgba(0, 220, 200, ${(t * t * 0.1).toFixed(3)})`
                ctx.lineWidth = t > 0.6 ? 1.3 : t > 0.3 ? 0.9 : 0.4

                const [x0, y0] = proj(-halfW, -halfH, d)
                const [x1, y1] = proj( halfW, -halfH, d)
                const [x2, y2] = proj( halfW,  halfH, d)
                const [x3, y3] = proj(-halfW,  halfH, d)

                ctx.beginPath()
                ctx.moveTo(x0, y0)
                ctx.lineTo(x1, y1)
                ctx.lineTo(x2, y2)
                ctx.lineTo(x3, y3)
                ctx.closePath()
                ctx.stroke()
            }

            ctx.restore()
            animId = requestAnimationFrame(draw)
        }

        draw()
        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [zoom])

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <canvas ref={canvasRef} className="absolute inset-0" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute h-14 w-14 rounded-full bg-primary/20 blur-2xl" />
                <div className="absolute h-4 w-4 rounded-full bg-primary/70 blur-sm" />
            </div>
        </div>
    )
}

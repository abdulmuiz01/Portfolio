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
const DEPTH_PER_SECTION = 500
const ROTATION_PER_SECTION = Math.PI / 5

export default function TunnelBackground({ zoom }: TunnelBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Detect touch/mobile once — avoids repeated matchMedia calls per frame
        const isMobile = window.matchMedia('(pointer: coarse)').matches

        let w = 0
        let h = 0

        const isDark = () => document.documentElement.classList.contains('dark')
        const lineColor = (alpha: number) => isDark()
            ? `rgba(0, 220, 200, ${alpha.toFixed(3)})`
            : `rgba(0, 1, 1, ${alpha.toFixed(3)})`

        const draw = () => {
            if (w === 0 || h === 0) return
            const z      = zoom.get()
            const offset = z * DEPTH_PER_SECTION
            const angle  = z * ROTATION_PER_SECTION

            ctx.clearRect(0, 0, w, h)

            const cx    = w / 2
            const cy    = h / 2
            const halfW = cx * Z_NEAR / FOV
            const halfH = cy * Z_NEAR / FOV

            ctx.save()
            ctx.translate(cx, cy)
            ctx.rotate(angle)
            ctx.translate(-cx, -cy)

            // FIX A — shadow only on desktop; it's very expensive on mobile GPUs
            if (!isMobile) {
                ctx.shadowColor = isDark() ? 'rgba(0, 220, 200, 0.75)' : 'rgba(0, 80, 110, 0.5)'
                ctx.shadowBlur  = 5
            }

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

            // 4 corner corridor lines — shaded by position (top=bright, bottom=dim)
            ctx.lineWidth = 0.1
            const corners: [number, number, number][] = [
                [-halfW, -halfH, 0.70],
                [ halfW, -halfH, 0.80],
                [ halfW,  halfH, 0.35],
                [-halfW,  halfH, 0.25],
            ]
            for (const [x, y, shade] of corners) {
                ctx.strokeStyle = lineColor(2 * shade)
                seg(x, y, Z_NEAR, x, y, Z_FAR)
            }

            // Rings — each edge drawn with directional shading
            const SHADE = { top: 1.0, right: 0.6, bottom: 0.22, left: 0.55 }
            const zBase = Z_NEAR + GRID - (offset % GRID)
            for (let d = zBase; d < Z_FAR; d += GRID) {
                const t    = 1 - (d - Z_NEAR) / (Z_FAR - Z_NEAR)
                const base = t * t * 0.1
                const lw   = t > 0.6 ? 1.3 : t > 0.3 ? 0.9 : 0.4

                const tl = proj(-halfW, -halfH, d)
                const tr = proj( halfW, -halfH, d)
                const br = proj( halfW,  halfH, d)
                const bl = proj(-halfW,  halfH, d)

                const edge = ([ax, ay]: [number, number], [bx, by]: [number, number], shade: number) => {
                    ctx.strokeStyle = lineColor(base * shade)
                    ctx.lineWidth   = lw
                    ctx.beginPath()
                    ctx.moveTo(ax, ay)
                    ctx.lineTo(bx, by)
                    ctx.stroke()
                }

                edge(tl, tr, SHADE.top)
                edge(tr, br, SHADE.right)
                edge(br, bl, SHADE.bottom)
                edge(bl, tl, SHADE.left)
            }

            ctx.restore()
        }

        const resize = () => {
            // FIX C — cap DPR at 2; 3× screens get 9× the pixels for no visible gain
            const dpr = Math.min(window.devicePixelRatio || 1, 2)
            w = window.innerWidth
            h = window.innerHeight
            canvas.width  = w * dpr
            canvas.height = h * dpr
            canvas.style.width  = `${w}px`
            canvas.style.height = `${h}px`
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            draw()
        }

        resize()
        window.addEventListener('resize', resize)

        // FIX B — draw only when zoom changes; no idle rAF loop burning CPU/GPU
        const unsub = zoom.on('change', draw)

        // Redraw when theme class changes on <html>
        const observer = new MutationObserver(draw)
        observer.observe(document.documentElement, {attributes: true, attributeFilter: ['class']})

        return () => {
            unsub()
            window.removeEventListener('resize', resize)
            observer.disconnect()
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
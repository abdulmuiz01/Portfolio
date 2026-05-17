// "use client"
//
// import { useEffect, useRef } from "react"
// import * as THREE from "three"
// import NET from "vanta/dist/vanta.net.min"
//
// export default function VantaBackground() {
//   const vantaRef = useRef<HTMLDivElement>(null)
//   const effect = useRef<any>(null)
//
//   useEffect(() => {
//     if (!vantaRef.current) return
//
//     effect.current = NET({
//       el: vantaRef.current,
//       THREE,
//       mouseControls: true,
//       touchControls: true,
//       gyroControls: false,
//       color: 0xde9cff,
//       backgroundColor: 0x131360,
//       points: 10,
//       maxDistance: 20,
//       spacing: 15,
//       scale: 0.4,
//       scaleMobile: 1,
//       speed: 0.2,
//       mouseEase: 1,
//     })
//
//     let currentScale = 1
//
//     const handleScroll = () => {
//       if (!vantaRef.current) return
//
//       const scrollY = window.scrollY
//
//       const targetScale = Math.min(2, Math.max(1, 1 + scrollY / 500))
//
//       currentScale += (targetScale - currentScale) * 0.08
//
//       vantaRef.current.style.transform = `scale(${currentScale})`
//       vantaRef.current.style.transformOrigin = "center center"
//     }
//
//     let animationFrame: number
//
//     const animate = () => {
//       handleScroll()
//       animationFrame = requestAnimationFrame(animate)
//     }
//
//     animate()
//
//     return () => {
//       cancelAnimationFrame(animationFrame)
//       effect.current?.destroy()
//       effect.current = null
//     }
//   }, [])
//
//   return (
//     <div
//       ref={vantaRef}
//       className="absolute inset-0 z-10 h-full w-full will-change-transform"
//     />
//   )
// }
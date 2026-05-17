'use client'

import { useEffect, useState } from 'react'

type Breakpoint = 'sm' | 'md' | 'lg'

export function useBreakpoint(): Breakpoint {
    const [bp, setBp] = useState<Breakpoint>('sm')

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth
            if (w >= 1024) setBp('lg')
            else if (w >= 768) setBp('md')
            else setBp('sm')
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    return bp
}
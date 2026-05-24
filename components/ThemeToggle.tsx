'use client'

import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'
import {Sun, Moon} from 'lucide-react'
import {motion, AnimatePresence} from 'framer-motion'

export default function ThemeToggle() {
    const {resolvedTheme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    const isDark = resolvedTheme === 'dark'

    return (
        <motion.button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1}}
            aria-label="Toggle theme"
            className="fixed bottom-6 right-6 z-50
                       w-10 h-10 rounded-full
                       flex items-center justify-center
                       border border-border
                       bg-background/80 backdrop-blur-sm
                       text-muted-foreground hover:text-primary
                       hover:border-primary/60
                       transition-colors duration-300"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={isDark ? 'moon' : 'sun'}
                    initial={{opacity: 0, rotate: -30, scale: 0.7}}
                    animate={{opacity: 1, rotate: 0, scale: 1}}
                    exit={{opacity: 0, rotate: 30, scale: 0.7}}
                    transition={{duration: 0.2}}
                >
                    {isDark ? <Moon className="w-4 h-4"/> : <Sun className="w-4 h-4"/>}
                </motion.span>
            </AnimatePresence>
        </motion.button>
    )
}

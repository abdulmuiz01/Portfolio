'use client'

import {useLang} from '@/lib/i18n'
import {motion, AnimatePresence} from 'framer-motion'

export default function LangToggle() {
    const {lang, setLang} = useLang()

    return (
        <motion.button
            onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1}}
            aria-label="Toggle language"
            className="fixed bottom-6 left-6 z-50
                       w-10 h-10 rounded-full
                       flex items-center justify-center
                       border border-border
                       bg-background/80 backdrop-blur-sm
                       text-muted-foreground hover:text-primary
                       hover:border-primary/60
                       font-mono text-xs font-bold
                       transition-colors duration-300"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={lang}
                    initial={{opacity: 0, y: 6}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -6}}
                    transition={{duration: 0.15}}
                >
                    {lang.toUpperCase()}
                </motion.span>
            </AnimatePresence>
        </motion.button>
    )
}

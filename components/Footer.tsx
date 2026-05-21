'use client'

import {motion} from "framer-motion"
import {Phone} from "lucide-react"
import {LinkedInIcon, GmailIcon} from "@/components/icons"
import {useTranslations} from "@/lib/i18n"

const Footer = () => {
    const t = useTranslations()

    return (
        <motion.div
            initial={{opacity: 0, scale: 0.55, filter: 'blur(12px)'}}
            animate={{opacity: 1, scale: 1, filter: 'blur(0px)'}}
            exit={{opacity: 0, scale: 1.18, filter: 'blur(10px)'}}
            transition={{duration: 0.55, ease: [0.32, 0, 0.18, 1], delay: 0.4}}
        >
            <div className="mx-auto flex flex-col items-center justify-between gap-4">
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                    <a
                        href="https://www.linkedin.com/in/abdulmuizkhan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                        <LinkedInIcon className="w-3.5 h-3.5 shrink-0"/>
                        linkedin.com/in/abdulmuizkhan
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&to=abdulmuizkhan8@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                        <GmailIcon className="w-3.5 h-3.5 shrink-0"/>
                        abdulmuizkhan8@gmail.com
                    </a>
                    <a
                        href="tel:+393208737348"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Phone className="w-3.5 h-3.5 shrink-0"/>
                        +39 320 873 7348
                    </a>
                </div>
                <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Abdul Muiz Khan — {t.footer.built}
                </p>
                <p className="text-xs text-muted-foreground">
                    <span className="text-primary">status</span>: {t.footer.status}
                </p>
            </div>
        </motion.div>
    )
}

export default Footer

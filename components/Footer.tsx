'use client'

import { motion } from "framer-motion";

const Footer = () => (
    <motion.div
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
            duration: 0.55,
            ease: [0.32, 0, 0.18, 1],
            delay: 0.4
        }}
    >
        <div className=" mx-auto flex flex-col items-center justify-between gap-4">
            <p className=" text-xs text-muted-foreground">
                © {new Date().getFullYear()} -- built with passion & caffeine
            </p>
            <p className="text-xs text-muted-foreground">
                <span className="text-primary"> status</span>: available for hire
            </p>
        </div>
    </motion.div>
);

export default Footer;

import { motion } from "framer-motion";
import {ArrowDown} from "lucide-react";

interface HeroSectionProps {
    onNext: () => void
}

const HeroSection = ({onNext}: HeroSectionProps) => {
    return (
        <div className="flex flex-col items-center gap-8 justify-center min-h-screen px-6 text-center">
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase mb-6 "
            >
                Full Stack Developer
            </motion.p>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tight leading-none"
            >
                <span className="neon-text">Abdul Muiz</span>{" "}
                <span className="text-foreground">Khan</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-muted-foreground font-body text-lg max-w-md"
            >
                Building digital experiences from front to back.
            </motion.p>
            <motion.button
                type="button"
                onClick={onNext}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.2 }}
                className="mt-5 text-md md:text-lg lg:text-xl text-muted-foreground tracking-widest uppercase cursor-pointer hover:text-primary transition ease-in-out"
            >
                 Welcome ↓
            </motion.button>
        </div>
    );
};

export default HeroSection;

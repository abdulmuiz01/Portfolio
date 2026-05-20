import {motion} from "framer-motion";
import {ArrowDown} from "lucide-react";
import {MagneticButton} from "./magnetic/MagneticButton";

interface HeroSectionProps {
    onNext: () => void
}

const HeroSection = ({onNext}: HeroSectionProps) => {
    return (
        <div className="flex flex-col items-center gap-8 justify-center min-h-screen px-6 text-center">
            <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.2}}
                className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase mb-6 "
            >
                Full Stack Developer
            </motion.p>
            <motion.h1
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.4, duration: 0.8}}
                className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tight leading-none"
            >
                <span className="neon-text">Abdul Muiz</span>{" "}
                <span className="text-foreground">Khan</span>
            </motion.h1>
            <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.8}}
                className="mt-8 text-muted-foreground font-body text-lg max-w-md"
            >
                Building digital experiences from front to back.
            </motion.p>
            <motion.div
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.7}}
                className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4 w-1/2"
            >
                <MagneticButton
                    onClick={onNext}
                    className="flex items-center justify-center gap-5 rounded-full w-1/2 h-20
                               border border-border px-7 py-4 font-mono text-lg uppercase
                               text-foreground transition-colors hover:border-primary/60 hover:text-primary/90"
                >
                    Welcome
                    <span className="">↓</span>
                </MagneticButton>

            </motion.div>
        </div>
    );
};

export default HeroSection;

import {motion} from "framer-motion";
import {MagneticButton} from "./magnetic/MagneticButton";
import {MagneticText} from "@/components/magnetic/MagneticText";
import {SpotlightText} from "@/components/Spotlight";
import {TextScramble} from "@/components/TextScramble";

interface HeroSectionProps {
    onNext: () => void
}

const HeroSection = ({onNext}: HeroSectionProps) => {
    return (
        <div className="flex flex-col items-center gap-8 justify-center min-h-screen px-6 text-center">
            <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.2, duration: 1}}
                className="text-muted-foreground font-body text-fluid-sm tracking-[0.3em] uppercase mb-6 "
            >
                <TextScramble text="Full Stack Developer" trigger="mount" delay={300} />
            </motion.p>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.2, duration: 1}}
            >
                <MagneticText
                    strength={0.15}
                    className="text-fluid-hero font-bold"
                >
                    <span className="neon-text">Abdul Muiz</span>{" "}
                    <span className="text-foreground">Khan</span>
                </MagneticText>
            </motion.div>
            <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.8, duration: 2}}
                className="mt-8 text-muted-foreground font-body text-fluid-base w-fit"
            >
                <SpotlightText>
                    Building digital experiences from front to back.
                </SpotlightText>
            </motion.p>
            <motion.div
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.7}}
                className="relative z-10 mt-[clamp(1.25rem,3vw,2.5rem)] flex flex-wrap items-center justify-center gap-4 w-full"
            >
                <MagneticButton
                    onClick={onNext}
                    className="flex items-center justify-center gap-2 rounded-full w-[clamp(8rem,30vw,50%)] h-20
                               border border-border px-7 py-4 font-mono text-fluid-sm uppercase
                               text-foreground transition-colors duration-300 hover:border-primary/60 hover:text-primary/60
                               hover:dark:bg-foreground/5"
                >
                    <TextScramble text="Welcome" trigger="mount" delay={900} />
                    <TextScramble text="↓" trigger="mount" delay={900} />
                </MagneticButton>

            </motion.div>
        </div>
    );
};

export default HeroSection;

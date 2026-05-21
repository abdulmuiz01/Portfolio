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
        <div className="flex flex-col items-center justify-center h-full w-full
                        px-4 sm:px-6 text-center
                        gap-[clamp(0.75rem,2vw,2rem)]">
            <div className="flex flex-col items-center gap-10 w-full max-w-5xl mx-auto">
                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.2, duration: 1}}
                    className="text-muted-foreground font-body text-fluid-sm tracking-[0.3em] uppercase"
                >
                    <TextScramble text="Full Stack Developer" trigger="mount" delay={300} />
                </motion.p>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.5, duration: 1}}
                    className="w-full"
                >
                    <MagneticText
                        strength={0.15}
                        className="text-fluid-hero font-bold leading-tight flex justify-center items-center"
                    >
                        <span className="neon-text">Welcome</span>
                        <MagneticText
                            as={"p"}
                            strength={0.2}
                            className="text-fluid-hero font-bold leading-tight"
                        >
                        <span className="text-foreground">.</span>
                        </MagneticText>
                    </MagneticText>
                </motion.div>

                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.8, duration: 2}}
                    className="text-muted-foreground font-body text-fluid-base max-w-xl"
                >
                    <SpotlightText>
                        Junior Full Stack Developer · Varese, Italy
                    </SpotlightText>
                </motion.p>

                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.7}}
                    className="relative z-10 mt-[clamp(0.5rem,2vw,1.5rem)]"
                >
                    <motion.div
                        animate={{y: [0, -10, 0]}}
                        transition={{duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1.4}}
                    >
                    <MagneticButton
                        className="flex items-center justify-center gap-2 rounded-full
                                   w-[clamp(8rem,30vw,20rem)] h-[clamp(3rem,8vh,5rem)]
                                   border border-border px-7 font-mono text-fluid-sm uppercase
                                   text-foreground transition-colors duration-300
                                   hover:border-primary/60 hover:text-primary
                                   bg-radial from-background to-primary/20"
                    >
                        <TextScramble text="Scroll" trigger="mount" delay={900} />
                        <TextScramble text="↓" trigger="mount" delay={900} />
                    </MagneticButton>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;

import {MagneticButton} from "@/components/magnetic/MagneticButton";
import {SpotlightText} from "@/components/Spotlight";
import {MagneticText} from "@/components/magnetic/MagneticText";
import {TextScramble} from "@/components/TextScramble";
import { motion } from "framer-motion";

const ContactSection = () => {
    return (
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
                delay:0.2
            }}
            className="flex flex-col gap-fluid-lg items-center justify-center
                        w-full max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <div className="flex flex-col items-center justify-center gap-fluid-md">
                <MagneticText
                    strength={0.5}
                    className="text-lg font-bold"
                >
                    <TextScramble text="Contact" trigger="view" className="neon-text uppercase tracking-[0.3em]" />
                </MagneticText>
                <h2 className="text-fluid-3xl font-heading font-bold text-center">
                    <SpotlightText color="accent">Let&#39;s connect.</SpotlightText>
                </h2>
                <p className="text-muted-foreground font-body text-fluid-sm max-w-sm">
                    Got a project in mind? I&#39;d love to hear about it.
                </p>
            </div>
            <MagneticButton
                className="flex items-center justify-center gap-2 rounded-full
                                   w-[clamp(8rem,30vw,20rem)] h-[clamp(3rem,8vh,5rem)]
                                   border border-border px-7 font-mono text-fluid-sm uppercase
                                   text-foreground transition-colors duration-300
                                   hover:border-primary/60 hover:text-primary
                                   bg-radial from-background to-primary/20"
            >
                <TextScramble text="Say Hello" trigger="view" />
            </MagneticButton>
            <div className="flex gap-[clamp(1.5rem,4vw,2rem)]">
                {["GitHub", "LinkedIn", "Twitter"].map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="text-muted-foreground text-fluid-sm font-body hover:text-primary transition-colors"
                    >
                        {link}
                    </a>
                ))}
            </div>
        </motion.div>
    );
};

export default ContactSection;

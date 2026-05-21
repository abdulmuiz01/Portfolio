import {motion} from "framer-motion";
import Image from "next/image";
import {MagneticCard} from "@/components/magnetic/MagneticCard";
import {SpotlightText} from "@/components/Spotlight";
import {MagneticText} from "@/components/magnetic/MagneticText";
import {TextScramble} from "@/components/TextScramble";
import {TiltCard} from "@/components/TiltCard";

const AboutSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center
                        w-full max-w-6xl mx-auto
                        px-[clamp(1rem,5vw,3rem)]
                        gap-[clamp(2rem,5vw,5rem)]">

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
                    duration: 0.4,
                    ease: [0.32, 0, 0.18, 1],
                    delay: 0.5
                }}
                className="flex shrink-0 justify-center"
            >
                <MagneticCard
                    strength={0.45}
                    className="group relative rounded-full"
                    style={{
                        boxShadow: [
                            'inset 0 3px 10px rgba(255,255,255,0.10)',
                            '0 0 18px rgba(0, 220, 200, 0.18)',
                            '0 3px 0 rgba(0,0,0,0.95)',
                            '0 6px 0 rgba(0,0,0,0.80)',
                            '0 9px 0 rgba(0,0,0,0.60)',
                            '0 12px 0 rgba(0,0,0,0.35)',
                            '0 20px 50px rgba(0,0,0,1)',
                        ].join(', '),
                    }}
                >
                    <TiltCard className="rounded-full overflow-hidden">
                        <Image
                            src="/profile.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="rounded-full size-fluid-avatar block"
                        />
                    </TiltCard>
                </MagneticCard>
            </motion.div>
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
                    duration: 0.4,
                    ease: [0.32, 0, 0.18, 1],
                    delay:0.5
                }}

                className="flex flex-col gap-fluid-sm items-center md:items-start justify-center
                            max-w-xl text-center md:text-left">
                <MagneticText
                    strength={0.5}
                    className="text-lg font-bold"
                >
                    <TextScramble text="About" trigger="view" className="neon-text uppercase tracking-[0.3em]"/>
                </MagneticText>
                <h2 className="text-fluid-2xl font-heading font-bold">
                    <SpotlightText>
                        Passione per il web.
                    </SpotlightText>
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed text-fluid-sm">
                    Ciao! Mi chiamo Abdul Muiz Khan. <br/>
                    Sono un Web Developer con una forte passione per la tecnologia e lo sviluppo web full stack.
                    Amo creare interfacce intuitive e soluzioni digitali che migliorano la vita delle persone.
                </p>
            </motion.div>
        </div>
    );
};

export default AboutSection;

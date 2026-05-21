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
                initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="flex shrink-0 justify-center"
            >
                <MagneticCard
                    strength={0.45}
                    className="group relative rounded-full"
                >
                    <TiltCard className="rounded-full overflow-hidden">
                        <svg
                            aria-hidden
                            className="pointer-events-none absolute inset-0 w-full h-full z-10"
                            viewBox="0 0 100 100"
                            fill="none"
                            overflow="visible"
                        >
                            <defs>
                                <linearGradient id="ring-grad" gradientUnits="userSpaceOnUse" x1="50" y1="0" x2="50" y2="100">
                                    <stop offset="0%"   stopColor="var(--color-primary)" stopOpacity="0" />
                                    <stop offset="20%"  stopColor="var(--color-primary)" stopOpacity="1" />
                                    <stop offset="80%"  stopColor="var(--color-primary)" stopOpacity="1" />
                                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <circle
                                cx="50" cy="50" r="50"
                                stroke="url(#ring-grad)"
                                strokeWidth="0.8"
                                strokeLinecap="round"
                                strokeDasharray="314.2"
                                strokeDashoffset="314.2"
                                transform="rotate(-90 50 50)"
                                className="[transition:stroke-dashoffset_0.5s_ease-in-out] group-hover:[stroke-dashoffset:0] group-active:[stroke-dashoffset:0] group-data-[touching]:[stroke-dashoffset:0]"
                                style={{filter: "drop-shadow(0 0 4px var(--color-primary))"}}
                            />
                        </svg>
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
                    duration: 0.55,
                    ease: [0.32, 0, 0.18, 1],
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

import {motion} from "framer-motion";
import Image from "next/image";
import {MagneticCard} from "@/components/magnetic/MagneticCard";
import {SpotlightText} from "@/components/Spotlight";
import {MagneticText} from "@/components/magnetic/MagneticText";
import {TextScramble} from "@/components/TextScramble";
import {TiltCard} from "@/components/TiltCard";

const AboutSection = () => {
    return (
        <div className="flex flex-col items-center justify-center mx-auto gap-12 lg:flex-row ">
            <motion.div
                initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="flex justify-center"
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
                                <circle
                                    cx="50" cy="50" r="50"
                                    stroke="var(--color-primary)"
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
                                className="rounded-full w-52 h-52 md:w-72 md:h-72 lg:w-96 lg:h-96 block"
                            />
                        </TiltCard>
                    </MagneticCard>
            </motion.div>
            <div className="flex flex-col gap-5 items-center justify-center px-6 max-w-3xl">
                <MagneticText
                    strength={0.5}
                    className="text-lg font-bold"
                >
                    <TextScramble text="About" trigger="view" className="neon-text uppercase tracking-[0.3em]"/>
                </MagneticText>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-center">
                    <SpotlightText>
                        Passione per il web.
                    </SpotlightText>
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed text-center max-w-4xl lg:text-lg">
                    Sono un Web Developer con una forte passione per la tecnologia e lo sviluppo web full stack.
                    Amo creare interfacce intuitive e soluzioni digitali che migliorano la vita delle persone.
                </p>
                {/*<div className="grid grid-cols-3 gap-8 mt-16 w-full max-w-lg">*/}
                {/*    {[*/}
                {/*        {num: "1+", label: "Years"},*/}
                {/*        {num: "40+", label: "Projects"},*/}
                {/*        {num: "15+", label: "Clients"},*/}
                {/*    ].map((stat) => (*/}
                {/*        <div key={stat.label} className="text-center">*/}
                {/*            <p className="text-2xl font-heading font-bold neon-text">{stat.num}</p>*/}
                {/*            <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default AboutSection;

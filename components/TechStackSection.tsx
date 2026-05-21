import {MagneticCard} from "@/components/magnetic/MagneticCard";
import {SpotlightText} from "@/components/Spotlight";
import {SpotlightGrid, SpotlightCard} from "@/components/Spotlight";
import {MagneticText} from "@/components/magnetic/MagneticText";
import {TextScramble} from "@/components/TextScramble";
import {TiltCard} from "@/components/TiltCard";
import { motion } from "framer-motion";

const skills = [
    {category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn"]},
    {category: "Backend", items: ["REST Api", "Node.js", "Express", "Java", "Quarkus"]},
    {category: "Database", items: ["Database Relazionali", "NoSql", "NoSql1"]},
];

const SkillsSection = () => {
    return (
        <div className="flex flex-col items-center justify-center
                        h-full w-full max-w-7xl mx-auto mt-32 md:mt-0
                        py-[clamp(1rem,3vh,3rem)] px-4 sm:px-6
                        gap-[clamp(1rem,2vh,2rem)]">

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
                className="flex flex-col items-center justify-center gap-fluid-sm">
                <MagneticText strength={0.5} className="text-lg font-bold">
                    <TextScramble text="Skills" trigger="view" className="neon-text uppercase tracking-[0.3em]"/>
                </MagneticText>
                <h2 className="text-fluid-3xl font-heading font-bold text-center">
                    <SpotlightText color="accent">Tech Stack</SpotlightText>
                </h2>
            </motion.div>

            <TiltCard className="w-full rounded-3xl ">
                <SpotlightGrid
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:p-10
                               gap-4 sm:gap-6 lg:gap-8
                               w-full h-10/12
                               px-[clamp(0.5rem,3vw,3rem)]
                               overflow-y-auto scroll-smooth overscroll-contain no-scrollbar
                               content-start sm:content-center touch-pan-y"
                    style={{WebkitOverflowScrolling: "touch"}}
                >
                    {skills.map((group, i) => (
                        <MagneticCard
                            key={group.category}
                            strength={0.15}
                            className="group relative rounded-3xl
                                       border border-background/10 bg-background/5 backdrop-blur-sm
                                       dark:border-foreground/10 dark:bg-muted-foreground/20 cursor-pointer"
                        >
                            <SpotlightCard color="accent" radius={280} className="p-5 rounded-3xl h-full flex flex-col min-h-44">
                                <span aria-hidden className="pointer-events-none absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-linear-to-r from-transparent via-accent to-transparent transition-transform duration-500 group-hover:scale-x-100 group-active:scale-x-100 group-data-[touching]:scale-x-100" />
                                <span className="text-muted-foreground text-xs font-body">
                                    0{i + 1}
                                </span>
                                <h3 className="font-heading font-semibold text-lg mt-1 mb-3 neon-text">
                                    {group.category}
                                </h3>
                                <ul className="flex flex-wrap gap-2 mt-auto">
                                    {group.items.map((item) => (
                                        <li
                                            key={item}
                                            className="text-muted-foreground font-body text-xs flex items-center gap-1.5"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-primary shrink-0"/>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </MagneticCard>
                    ))}
                </SpotlightGrid>
            </TiltCard>
        </div>
    );
};

export default SkillsSection;

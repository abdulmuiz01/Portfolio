import {MagneticCard} from "@/components/magnetic/MagneticCard";
import {SpotlightText} from "@/components/Spotlight";
import {SpotlightGrid, SpotlightCard} from "@/components/Spotlight";
import {MagneticText} from "@/components/magnetic/MagneticText";
import {TextScramble} from "@/components/TextScramble";
import {TiltCard} from "@/components/TiltCard";

const skills = [
    {category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn"]},
    {category: "Backend", items: ["REST Api", "Node.js", "Express", "Java", "Quarkus"]},
    {category: "Database", items: ["Database Relazionali", "NoSql", "NoSql1"]},
];

const SkillsSection = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen py-16 w-full mx-auto">
            <div className="flex flex-col items-center justify-center gap-fluid-sm">
                <MagneticText
                    strength={0.5}
                    className="text-lg font-bold"
                >
                    <TextScramble text="Skills" trigger="view" className="neon-text uppercase tracking-[0.3em]"/>
                </MagneticText>
                <h2 className="flex gap-2 text-fluid-3xl font-heading font-bold mb-[clamp(0rem,2.5vw,2rem)] text-center">
                    <SpotlightText color="accent">Tech Stack</SpotlightText>
                </h2>
            </div>
            <TiltCard className="h-1/2 w-full rounded-3xl">
                <SpotlightGrid
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-[clamp(1rem,5vw,5rem)]
                overflow-y-auto max-h-[60vh] md:h-1/2 scroll-smooth overscroll-contain no-scrollbar items-center"
                    style={{WebkitOverflowScrolling: "touch"}}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                >
                    {skills.map((group, i) => (
                        <MagneticCard
                            key={group.category}
                            strength={0.15}
                            className="group relative rounded-3xl h-full md:h-1/2 border border-background/10 bg-background/5 backdrop-blur-sm
                                   dark:border-foreground/10 dark:bg-foreground/5 cursor-pointer"
                        >
                            <SpotlightCard color="accent" radius={280} className="p-5 rounded-3xl h-full flex flex-col">
                            <span aria-hidden className="pointer-events-none absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-accent to-transparent transition-transform duration-500 group-hover:scale-x-100 group-active:scale-x-100 group-data-[touching]:scale-x-100" />
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

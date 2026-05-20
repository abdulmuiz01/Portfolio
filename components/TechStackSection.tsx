import {MagneticCard} from "@/components/magnetic/MagneticCard";
import {SpotlightText} from "@/components/Spotlight";
import {SpotlightGrid, SpotlightCard} from "@/components/Spotlight";
import {MagneticText} from "@/components/magnetic/MagneticText";

const skills = [
    {category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn"]},
    {category: "Backend", items: ["REST Api", "Node.js", "Express", "Java", "Quarkus"]},
    {category: "Database", items: ["Database Relazionali", "NoSql", "NoSql1"]},
];

const SkillsSection = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen py-16 w-full mx-auto">
            <div className="flex flex-col items-center justify-center gap-5 md:gap-10">
                <MagneticText
                    strength={0.5}
                    className="text-lg font-bold"
                >
                    <span className="neon-text uppercase tracking-[0.3em]">Skills</span>
                </MagneticText>
                <h2 className="flex gap-2 text-3xl md:text-6xl font-heading font-bold mb-8 md:mb-0 text-center">
                    <SpotlightText color="accent">Tech Stack</SpotlightText>
                </h2>
            </div>
            <SpotlightGrid
                className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-5
                overflow-y-auto max-h-[60vh] md:h-1/2 scroll-smooth overscroll-contain no-scrollbar items-center"
                style={{WebkitOverflowScrolling: "touch"}}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
            >
                {skills.map((group, i) => (
                    <MagneticCard
                        key={group.category}
                        strength={0.45}
                        className="rounded-3xl h-full md:h-1/2 border border-background/10 bg-background/5 backdrop-blur-sm
                                   dark:border-foreground/10 dark:bg-foreground/5 cursor-pointer"
                    >
                        <SpotlightCard color="accent" radius={280} className="p-5 rounded-3xl h-full flex flex-col">
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
        </div>
    );
};

export default SkillsSection;

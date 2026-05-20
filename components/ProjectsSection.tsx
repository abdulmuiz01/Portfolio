import {MagneticCard} from "@/components/magnetic/MagneticCard";
import {SpotlightText} from "@/components/Spotlight";
import {SpotlightGrid, SpotlightCard} from "@/components/Spotlight";
import {MagneticText} from "@/components/magnetic/MagneticText";
import {TextScramble} from "@/components/TextScramble";
import {TiltCard} from "@/components/TiltCard";

const projects = [
    {
        title: "CloudSync",
        description: "Real-time collaboration platform with WebSocket architecture",
        tags: ["React", "Node.js", "WebSocket"],
    },
    {
        title: "DataPulse",
        description: "Analytics dashboard with interactive data visualizations",
        tags: ["Next.js", "D3.js", "PostgreSQL"],
    },
    {
        title: "DevFlow",
        description: "CI/CD pipeline manager with GitHub integration",
        tags: ["Python", "Docker", "AWS"],
    },
];

const ProjectsSection = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen py-16 w-full mx-auto">
            <div className="flex flex-col items-center justify-center gap-5 md:gap-10">
                <MagneticText
                    strength={0.5}
                    className="text-lg font-bold"
                >
                    <TextScramble text="Work" trigger="view" className="neon-text uppercase tracking-[0.3em]"/>
                </MagneticText>
                <h2 className="flex gap-2 text-3xl md:text-6xl font-heading font-bold mb-8 md:mb-0 text-center">
                    <SpotlightText color="primary">Featured Projects</SpotlightText>
                </h2>
            </div>
            <TiltCard className="h-1/2 w-full rounded-3xl">
                <SpotlightGrid
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-20
                overflow-y-auto max-h-[60vh] md:h-full scroll-smooth overscroll-contain no-scrollbar items-center"
                    style={{WebkitOverflowScrolling: "touch"}}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                >
                    {projects.map((project, i) => (
                        <MagneticCard
                            key={project.title}
                            strength={0.15}
                            className="rounded-3xl h-full md:h-1/2 border border-background/10 bg-background/5 backdrop-blur-sm
                                   dark:border-foreground/10 dark:bg-foreground/5 cursor-pointer"
                        >
                            <SpotlightCard color="primary" radius={280}
                                           className="p-5 rounded-3xl h-full flex flex-col">
                            <span className="text-muted-foreground text-xs font-body">
                                0{i + 1}
                            </span>
                                <h3 className="font-heading font-semibold text-lg mt-1 mb-3 neon-text">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <ul className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <li
                                            key={tag}
                                            className="text-muted-foreground font-body text-xs flex items-center gap-1.5"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-primary shrink-0"/>
                                            {tag}
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

export default ProjectsSection;

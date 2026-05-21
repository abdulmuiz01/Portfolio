import {MagneticCard} from "@/components/magnetic/MagneticCard";
import {SpotlightText} from "@/components/Spotlight";
import {SpotlightGrid, SpotlightCard} from "@/components/Spotlight";
import {MagneticText} from "@/components/magnetic/MagneticText";
import {TextScramble} from "@/components/TextScramble";
import {TiltCard} from "@/components/TiltCard";
import {motion} from "framer-motion";
import type {CSSProperties} from "react";

const METAL_STYLE: CSSProperties = {
    background: 'linear-gradient(160deg, hsl(220,6%,13%) 0%, hsl(220,5%,7%) 55%, hsl(220,6%,10%) 100%)',
    boxShadow: [
        'inset 0 1px 0 rgba(255,255,255,0.07)',   // top-edge — barely-there matte rim
        'inset 1px 0 rgba(255,255,255,0.03)',      // left-edge whisper
        'inset 0 -1px 0 rgba(0,0,0,0.7)',         // bottom inner shadow
        'inset -1px 0 rgba(0,0,0,0.4)',           // right inner shadow
        '0 0 0 1px rgba(0,0,0,0.6)',              // thin outer outline
        '0 4px 0 rgba(0,0,0,0.9)',               // visible bottom edge (card thickness)
        '0 8px 32px rgba(0,0,0,0.7)',            // elevation
        '0 24px 64px rgba(0,0,0,0.4)',           // far ambient shadow
    ].join(', '),
};

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
                    <TextScramble text="Work" trigger="view" className="neon-text uppercase tracking-[0.3em]"/>
                </MagneticText>
                <h2 className="text-fluid-3xl font-heading font-bold text-center">
                    <SpotlightText color="primary">Featured Projects</SpotlightText>
                </h2>
            </motion.div>
            <TiltCard className="w-full rounded-3xl">
                <SpotlightGrid
                    className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:p-10
                               gap-4 sm:gap-6 lg:gap-8
                               w-full h-10/12
                               px-[clamp(0.5rem,3vw,3rem)]
                               overflow-y-auto scroll-smooth overscroll-contain no-scrollbar
                               content-start sm:content-center touch-pan-y"
                    style={{WebkitOverflowScrolling: "touch"}}
                >
                    {projects.map((project, i) => (
                        <MagneticCard
                            key={project.title}
                            strength={0.15}
                            className="group relative rounded-lg cursor-pointer"
                            style={METAL_STYLE}
                        >
                            <SpotlightCard color="primary" radius={280}
                                           className="p-5 rounded-lg h-full flex flex-col min-h-44">
                                {/* Brushed-metal surface sheen */}
                                <span aria-hidden
                                      className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/[0.07] via-transparent to-black/10"/>
                                <span aria-hidden className="pointer-events-none absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-linear-to-r from-transparent
                                                             via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100
                                                             group-active:scale-x-100 group-data-touching:scale-x-100"/>
                                <span className="text-muted-foreground text-xs font-body">
                                    0{i + 1}
                                </span>
                                <h3 className="font-heading font-semibold text-lg mt-1 mb-2 neon-text">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 flex-1">
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

'use client'

import Image from "next/image"
import {MagneticCard} from "@/components/magnetic/MagneticCard"
import {SpotlightCard} from "@/components/Spotlight"
import SectionShell, {METAL_STYLE} from "@/components/SectionShell"
import {useTranslations} from "@/lib/i18n"

const ProjectsSection = () => {
    const t = useTranslations()

    return (
        <SectionShell
            label={t.projects.label}
            title={t.projects.title}
            titleColor="primary"
            projectHeader={
                <div className="flex items-center gap-3 my-5">
                    <Image
                        src="/mirainote-logo-dark.svg"
                        alt="MirAI Note"
                        width={120}
                        height={52}
                        className="hidden dark:block"
                        priority
                    />
                    <Image
                        src="/mirainote-logo-light.svg"
                        alt="MirAI Note"
                        width={120}
                        height={52}
                        className="block dark:hidden"
                        priority
                    />
                </div>
            }
        >
            {t.projects.items.map((project, i) => (
                <MagneticCard
                    key={project.subtitle}
                    strength={0.15}
                    className="group relative rounded-3xl cursor-pointer"
                    style={METAL_STYLE}
                >
                    <SpotlightCard color="primary" radius={280} className="p-5 rounded-3xl h-full flex flex-col min-h-44">

                        {/* Header row: index + coming-soon badge */}
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-muted-foreground text-xs font-body">0{i + 1}</span>
                            {project.comingSoon && (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border text-muted-foreground tracking-wider">
                                    {project.linkLabel}
                                </span>
                            )}
                        </div>

                        {/* Platform as the card title */}
                        <h3 className="font-heading font-semibold text-lg mb-2 neon-text">
                            {project.subtitle}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 flex-1">
                            {project.description}
                        </p>

                        {/* Footer: tags + link */}
                        <div className="flex items-end justify-between gap-3 mt-auto">
                            <ul className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <li key={tag} className="text-muted-foreground font-body text-xs flex items-center gap-1.5">
                                        <span className="w-1 h-1 rounded-full bg-primary shrink-0"/>
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="shrink-0 text-xs font-mono text-primary hover:text-primary/60
                                               transition-colors underline underline-offset-2 whitespace-nowrap"
                                >
                                    {project.linkLabel} →
                                </a>
                            )}
                        </div>

                    </SpotlightCard>
                </MagneticCard>
            ))}
        </SectionShell>
    )
}

export default ProjectsSection

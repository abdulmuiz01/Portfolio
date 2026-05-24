'use client'

import {MagneticCard} from "@/components/magnetic/MagneticCard"
import {SpotlightCard} from "@/components/Spotlight"
import SectionShell, {METAL_STYLE} from "@/components/SectionShell"
import {useTranslations} from "@/lib/i18n"

const ExperienceSection = () => {
    const t = useTranslations()

    return (
        <SectionShell label={t.experience.label} title={t.experience.title} titleColor="accent">
            {t.experience.items.map((exp, i) => (
                <MagneticCard
                    key={exp.company}
                    strength={0.15}
                    className="group relative rounded-3xl cursor-pointer"
                    style={METAL_STYLE}
                >
                    <SpotlightCard color="accent" radius={200} className="p-5 rounded-3xl h-full flex flex-col min-h-52">
                        <span className="text-muted-foreground text-xs font-body">0{i + 1}</span>
                        <div className="mt-1 mb-1">
                            <h3 className="font-heading font-semibold text-base neon-text leading-tight">{exp.role}</h3>
                            <p className="text-primary font-body text-sm font-medium">{exp.company}</p>
                            <p className="text-muted-foreground font-body text-xs mt-0.5">{exp.type} · {exp.period}</p>
                            <p className="text-muted-foreground font-body text-xs">{exp.location}</p>
                        </div>
                        <p className="text-muted-foreground font-body text-xs leading-relaxed my-3 flex-1">{exp.description}</p>
                        <ul className="flex flex-wrap gap-2 mt-auto">
                            {exp.tags.map((tag) => (
                                <li key={tag} className="text-muted-foreground font-body text-xs flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-primary shrink-0"/>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </SpotlightCard>
                </MagneticCard>
            ))}
        </SectionShell>
    )
}

export default ExperienceSection

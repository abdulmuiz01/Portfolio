'use client'

import {MagneticCard} from "@/components/magnetic/MagneticCard"
import {SpotlightCard} from "@/components/Spotlight"
import SectionShell, {METAL_STYLE} from "@/components/SectionShell"
import {useTranslations} from "@/lib/i18n"

const TechStackSection = () => {
    const t = useTranslations()

    return (
        <SectionShell label={t.tech.label} title={t.tech.title} titleColor="accent">
            {t.tech.skills.map((group, i) => (
                <MagneticCard
                    key={group.category}
                    strength={0.15}
                    className="group relative rounded-3xl cursor-pointer"
                    style={METAL_STYLE}
                >
                    <SpotlightCard color="accent" radius={170} className="p-5 rounded-3xl h-full flex flex-col min-h-44">
                        <span className="text-muted-foreground text-xs font-body">0{i + 1}</span>
                        <h3 className="font-heading font-semibold text-lg mt-1 mb-3 neon-text">{group.category}</h3>
                        <ul className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <li key={item} className="text-muted-foreground font-body flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-primary shrink-0"/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SpotlightCard>
                </MagneticCard>
            ))}
        </SectionShell>
    )
}

export default TechStackSection

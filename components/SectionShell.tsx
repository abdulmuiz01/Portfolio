import {ReactNode} from "react";
import {motion} from "framer-motion";
import type {CSSProperties} from "react";
import {SpotlightText, SpotlightGrid} from "@/components/Spotlight";
import {MagneticText} from "@/components/magnetic/MagneticText";
import {TextScramble} from "@/components/TextScramble";
import {TiltCard} from "@/components/TiltCard";

export const METAL_STYLE: CSSProperties = {
    background: 'hsl(0,5%,4%)',
    boxShadow: [
        'inset 0 1px 0 rgba(255,255,255,0.07)',
        'inset 1px 0 rgba(255,255,255,0.03)',
        'inset 0 -1px 0 rgba(0,0,0,0.7)',
        'inset -1px 0 rgba(0,0,0,0.4)',
        '0 0 0 1px rgba(0,0,0,0.6)',
        '0 4px 0 rgba(0,0,0,0.9)',
        '0 8px 10px rgba(0,0,0,0.7)',
        '0 24px 10px rgba(0,0,0,0.4)',
    ].join(', '),
};

const ENTRY = {
    initial: {opacity: 0, scale: 0.55, filter: 'blur(12px)'},
    animate: {opacity: 1, scale: 1, filter: 'blur(0px)'},
    exit:    {opacity: 0, scale: 1.18, filter: 'blur(10px)'},
};

interface SectionShellProps {
    label: string;
    title: string;
    titleColor?: 'primary' | 'accent';
    children: ReactNode;
}

export default function SectionShell({label, title, titleColor = 'primary', children}: SectionShellProps) {
    return (
        <div className="flex flex-col items-center justify-start
                        h-full w-full max-w-7xl mx-auto mt-52 md:mt-0 md:justify-center
                        py-[clamp(1rem,3vh,3rem)] px-4 sm:px-6
                        gap-[clamp(1rem,2vh,2rem)]">

            <motion.div
                {...ENTRY}
                transition={{duration: 0.4, ease: [0.32, 0, 0.18, 1], delay: 0.1}}
                className="flex flex-col items-center justify-center gap-fluid-sm"
            >
                <MagneticText strength={0.5} className="text-lg font-bold">
                    <TextScramble text={label} trigger="view" className="neon-text uppercase tracking-[0.3em]"/>
                </MagneticText>
                <h2 className="text-fluid-3xl font-heading font-bold text-center">
                    <SpotlightText color={titleColor}>{title}</SpotlightText>
                </h2>
            </motion.div>

            <motion.div
                {...ENTRY}
                transition={{duration: 0.4, ease: [0.32, 0, 0.18, 1], delay: 0.2}}
                className="flex-1 min-h-0 w-full lg:flex-none"
            >
                <TiltCard className="w-full h-full lg:h-auto rounded-3xl">
                    <SpotlightGrid
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:p-10
                                   gap-4 sm:gap-6 lg:gap-8
                                   w-full h-10/12 lg:h-auto
                                   px-[clamp(0.5rem,3vw,3rem)]
                                   overflow-y-auto lg:overflow-visible scroll-smooth overscroll-contain no-scrollbar
                                   content-start sm:content-center touch-pan-y"
                        style={{WebkitOverflowScrolling: 'touch'}}
                    >
                        {children}
                    </SpotlightGrid>
                </TiltCard>
            </motion.div>
        </div>
    );
}

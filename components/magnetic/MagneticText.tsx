import type { ReactNode } from "react";

import { Magnetic } from "@/components/magnetic/Magnetic";

type TextTag =
    | "span"
    | "p"
    | "h1"
    | "h2"
    | "h3";

interface MagneticTextProps {
    children: ReactNode;
    className?: string;
    strength?: number;
    as?: TextTag;
}

export function MagneticText({
                                 children,
                                 className,
                                 strength = 0.2,
                                 as = "h1",
                             }: MagneticTextProps) {
    return (
        <Magnetic
            as={as}
            strength={strength}
            className={className}
        >
            {children}
        </Magnetic>
    );
}
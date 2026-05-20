import type { ReactNode } from "react";

import { Magnetic } from "@/components/magnetic/Magnetic";

type CardTag =
    | "div"
    | "section"
    | "article";

interface MagneticCardProps {
    children: ReactNode;
    className?: string;
    strength?: number;
    as?: CardTag;
    onClick?: () => void;
}

export function MagneticCard({
                                 children,
                                 className,
                                 strength = 0.35,
                                 as = "div",
                                 onClick,
                             }: MagneticCardProps) {
    return (
        <Magnetic
            as={as}
            strength={strength}
            onClick={onClick}
            className={className}
        >
            {children}
        </Magnetic>
    );
}
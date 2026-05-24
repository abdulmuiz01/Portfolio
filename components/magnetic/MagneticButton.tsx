import type { ReactNode } from "react";

import { Magnetic } from "@/components/magnetic/Magnetic";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    strength?: number;
    href?: string;
    onClick?: () => void;
    as?: "button" | "a";
}

export function MagneticButton({
                                   children,
                                   className,
                                   strength = 0.35,
                                   href,
                                   onClick,
                                   as = "button",
                               }: MagneticButtonProps) {
    return (
        <Magnetic
            as={as}
            href={href}
            onClick={onClick}
            strength={strength}
            className={className}
        >
            {children}
        </Magnetic>
    );
}
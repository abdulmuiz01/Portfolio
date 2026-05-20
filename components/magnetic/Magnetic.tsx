import {
    useRef,
    type CSSProperties,
    type ReactNode,
    type MouseEvent,
    type ElementType,
} from "react";

import {
    motion,
    useMotionValue,
    useSpring,
} from "framer-motion";

type AsTag =
    | "div"
    | "span"
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "section"
    | "article"
    | "button"
    | "a";

interface MagneticProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    strength?: number;
    as?: AsTag;
    href?: string;
    onClick?: () => void;
}

export function Magnetic({
                             children,
                             className,
                             style,
                             strength = 0.35,
                             as = "div",
                             href,
                             onClick,
                         }: MagneticProps) {
    const ref = useRef<HTMLElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = {
        stiffness: 200,
        damping: 18,
        mass: 0.4,
    };

    const sx = useSpring(x, springConfig);
    const sy = useSpring(y, springConfig);

    const onMove = (e: MouseEvent<HTMLElement>) => {
        const el = ref.current;

        if (!el) return;

        const rect = el.getBoundingClientRect();

        const moveX =
            (e.clientX - (rect.left + rect.width / 2)) *
            strength;

        const moveY =
            (e.clientY - (rect.top + rect.height / 2)) *
            strength;

        x.set(moveX);
        y.set(moveY);
    };

    const onLeave = () => {
        x.set(0);
        y.set(0);
    };

    const componentMap = {
        div: motion.div,
        span: motion.span,
        p: motion.p,
        h1: motion.h1,
        h2: motion.h2,
        h3: motion.h3,
        section: motion.section,
        article: motion.article,
        button: motion.button,
        a: motion.a,
    };

    const Comp: ElementType = componentMap[as];

    return (
        <Comp
            ref={ref}
            href={href}
            onClick={onClick}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{
                ...style,
                x: sx,
                y: sy,
            }}
            className={className}
            data-cursor="hover"
        >
            {children}
        </Comp>
    );
}
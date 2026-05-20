import { Magnetic } from "@/components/magnetic/Magnetic";

export function MagneticText() {
    return (
        <Magnetic
            as="h1"
            strength={0.25}
            className="
                text-6xl
                md:text-8xl
                font-bold
                tracking-tight
                cursor-default
                select-none
            "
        >
            Magnetic Text
        </Magnetic>
    );
}
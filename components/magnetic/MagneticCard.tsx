import { Magnetic } from "@/components/magnetic/Magnetic";

export function MagneticCard() {
    return (
        <Magnetic
            as="div"
            strength={0.4}
            className="
                w-80
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                transition-shadow
                hover:shadow-2xl
            "
        >
            <h3 className="text-2xl font-semibold mb-3">
                Magnetic Card
            </h3>

            <p className="text-muted-foreground leading-relaxed">
                This div smoothly follows the cursor using
                Framer Motion springs.
            </p>
        </Magnetic>
    );
}
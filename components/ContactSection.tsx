import {MagneticButton} from "@/components/magnetic/MagneticButton";
import {SpotlightText} from "@/components/Spotlight";
import {MagneticText} from "@/components/magnetic/MagneticText";

const ContactSection = () => {
    return (
        <div className="flex flex-col gap-10 md:gap-20 items-center justify-center px-6 max-w-2xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center gap-5 md:gap-14">
                <MagneticText
                    strength={0.5}
                    className="text-lg font-bold"
                >
                    <span className="neon-text uppercase tracking-[0.3em]">Contact</span>
                </MagneticText>
                <h2 className="flex gap-2 text-3xl md:text-6xl font-heading font-bold text-center">
                    <SpotlightText color="accent">Let&#39;s connect.</SpotlightText>
                </h2>
                <p className="text-muted-foreground font-body lg:text-lg">
                    Got a project in mind? I&#39;d love to hear about it.
                </p>
            </div>
            <MagneticButton
                className="inline-block border border-primary text-primary px-8 py-3 rounded-lg
                font-heading lg:text-lg tracking-wider uppercase
                hover:bg-primary hover:text-primary-foreground neon-border"
            >
                Say Hello
            </MagneticButton>
            <div className="flex gap-8">
                {["GitHub", "LinkedIn", "Twitter"].map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="text-muted-foreground text-sm font-body hover:text-primary transition-colors"
                    >
                        {link}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ContactSection;

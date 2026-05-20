import {MagneticButton} from "@/components/magnetic/MagneticButton";
import {SpotlightText} from "@/components/Spotlight";
import {MagneticText} from "@/components/magnetic/MagneticText";
import {TextScramble} from "@/components/TextScramble";

const ContactSection = () => {
    return (
        <div className="flex flex-col gap-fluid-lg items-center justify-center px-6 max-w-2xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center gap-fluid-md">
                <MagneticText
                    strength={0.5}
                    className="text-lg font-bold"
                >
                    <TextScramble text="Contact" trigger="view" className="neon-text uppercase tracking-[0.3em]" />
                </MagneticText>
                <h2 className="flex gap-2 text-fluid-3xl font-heading font-bold text-center">
                    <SpotlightText color="accent">Let&#39;s connect.</SpotlightText>
                </h2>
                <p className="text-muted-foreground font-body text-fluid-sm">
                    Got a project in mind? I&#39;d love to hear about it.
                </p>
            </div>
            <MagneticButton
                className="inline-block border border-primary text-primary px-8 py-3 rounded-lg
                font-heading text-fluid-sm tracking-wider uppercase
                hover:bg-primary hover:text-primary-foreground neon-border"
            >
                <TextScramble text="Say Hello" trigger="view" />
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

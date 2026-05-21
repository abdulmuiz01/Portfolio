import {MagneticButton} from "@/components/magnetic/MagneticButton";
import {SpotlightText} from "@/components/Spotlight";
import {MagneticText} from "@/components/magnetic/MagneticText";
import {TextScramble} from "@/components/TextScramble";
import {motion} from "framer-motion";
import {LinkedInIcon, GmailIcon, WhatsAppIcon} from "@/components/icons";

const links = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/abdulmuizkhan",
        icon: <LinkedInIcon />,
    },
    {
        label: "Email",
        href: "https://mail.google.com/mail/?view=cm&to=abdulmuizkhan8@gmail.com",
        icon: <GmailIcon className="w-4 h-4 shrink-0" />,
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/393208737348",
        icon: <WhatsAppIcon />,
    },
];

const ContactSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.55, filter: 'blur(12px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.18, filter: 'blur(10px)' }}
            transition={{ duration: 0.55, ease: [0.32, 0, 0.18, 1], delay: 0.2 }}
            className="flex flex-col gap-fluid-lg items-center justify-center
                        w-full max-w-2xl mx-auto px-4 sm:px-6 text-center"
        >
            <div className="flex flex-col items-center justify-center gap-fluid-md">
                <MagneticText strength={0.5} className="text-lg font-bold">
                    <TextScramble text="Contact" trigger="view" className="neon-text uppercase tracking-[0.3em]" />
                </MagneticText>
                <h2 className="text-fluid-3xl font-heading font-bold text-center">
                    <SpotlightText color="accent">Let&#39;s connect.</SpotlightText>
                </h2>
                <p className="text-muted-foreground font-body text-fluid-sm max-w-sm">
                    Got a project in mind? I&#39;d love to hear about it.
                </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
                {links.map((link) => (
                    <MagneticButton
                        key={link.label}
                        as="a"
                        href={link.href}
                        className="flex items-center justify-center gap-2 rounded-full
                                   w-full h-[clamp(2.8rem,7vh,4.5rem)]
                                   border border-border px-5 font-mono text-fluid-sm uppercase
                                   text-foreground transition-colors duration-300
                                   hover:border-primary/60 hover:text-primary
                                   bg-radial from-background to-primary/20"
                    >
                        {link.icon}
                        <TextScramble text={link.label} trigger="view" />
                    </MagneticButton>
                ))}
            </div>
        </motion.div>
    );
};

export default ContactSection;

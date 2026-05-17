const ContactSection = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 max-w-2xl mx-auto text-center">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-8">
                Contact
            </p>
            <h2 className="text-3xl md:text-6xl font-heading font-bold mb-8">
                Let's <span className="neon-text-purple">connect</span>.
            </h2>
            <p className="text-muted-foreground font-body mb-12 lg:text-lg">
                Got a project in mind? I'd love to hear about it.
            </p>
            <a
                href="#"
                className="inline-block border border-primary text-primary px-8 py-3 rounded-lg
                font-heading lg:text-lg tracking-wider uppercase
                hover:bg-primary hover:text-primary-foreground transition-all neon-border"
            >
                Say Hello
            </a>
            <div className="flex gap-8 mt-16">
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

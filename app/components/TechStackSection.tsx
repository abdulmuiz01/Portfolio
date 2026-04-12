const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "GraphQL"] },
    { category: "DevOps", items: ["AWS", "Docker", "CI/CD", "Kubernetes"] },
];

const SkillsSection = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 w-full mx-auto">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-8">
                Skills
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center">
                Tech <span className="neon-text-purple">Stack</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-1/2">
                {skills.map((group) => (
                    <div
                        key={group.category}
                        className="border border-border rounded-lg p-6 neon-border"
                    >
                        <h3 className="font-heading font-semibold text-lg mb-4 neon-text">
                            {group.category}
                        </h3>
                        <ul className="space-y-2">
                            {group.items.map((item) => (
                                <li key={item} className="text-muted-foreground font-body text-sm flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;

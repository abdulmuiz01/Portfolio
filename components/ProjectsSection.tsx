const projects = [
    {
        title: "CloudSync",
        description: "Real-time collaboration platform with WebSocket architecture",
        tags: ["React", "Node.js", "WebSocket"],
    },
    {
        title: "DataPulse",
        description: "Analytics dashboard with interactive data visualizations",
        tags: ["Next.js", "D3.js", "PostgreSQL"],
    },
    {
        title: "DevFlow",
        description: "CI/CD pipeline manager with GitHub integration",
        tags: ["Python", "Docker", "AWS"],
    },
];

const ProjectsSection = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 max-w-4xl mx-auto">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-8">
                Work
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center">
                Featured <span className="neon-text">Projects</span>
            </h2>
            <div className="space-y-6 w-full">
                {projects.map((project, i) => (
                    <div
                        key={project.title}
                        className="border border-border rounded-lg p-8 neon-border hover:bg-secondary/50 transition-colors cursor-pointer group"
                    >
                        <div className="flex items-start justify-between flex-col md:flex-row gap-4">
                            <div>
                <span className="text-muted-foreground text-xs font-body">
                  0{i + 1}
                </span>
                                <h3 className="font-heading font-semibold text-2xl mt-1 group-hover:neon-text transition-all">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground font-body text-sm mt-2">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-body px-3 py-1 rounded-full border border-border text-muted-foreground"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;

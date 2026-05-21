import {MagneticCard} from "@/components/magnetic/MagneticCard";
import {SpotlightCard} from "@/components/Spotlight";
import SectionShell, {METAL_STYLE} from "@/components/SectionShell";

const projects = [
    {
        title: "Hagile® Platform",
        description: "Back-office system for socio-sanitary non-urgent transport booking. Built dedicated dashboards for admins and operators, interactive mission calendars, and dynamic shift tables.",
        tags: ["Next.js", "React", "JavaScript", "Material UI", "REST API"],
    },
    {
        title: "ETL Data Pipeline",
        description: "Development and management of ETL processes using Talend, database integration and modeling, Java-based data pipelines, and Salesforce integration at Alt. Srl.",
        tags: ["Talend", "Java", "SQL", "Salesforce", "Data Integration"],
    },
    {
        title: "Web Application",
        description: "Full-stack web application built with Next.js and Java during an international internship in Vilnius. Delivered features on schedule within an agile cross-functional team.",
        tags: ["Next.js", "Java", "Quarkus", "REST API"],
    },
];

const ProjectsSection = () => (
    <SectionShell label="Work" title="Featured Projects" titleColor="primary">
        {projects.map((project, i) => (
            <MagneticCard
                key={project.title}
                strength={0.15}
                className="group relative rounded-3xl cursor-pointer"
                style={METAL_STYLE}
            >
                <SpotlightCard color="primary" radius={280} className="p-5 rounded-3xl h-full flex flex-col min-h-44">
                    <span className="text-muted-foreground text-xs font-body">0{i + 1}</span>
                    <h3 className="font-heading font-semibold text-lg mt-1 mb-2 neon-text">{project.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                    <ul className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                            <li key={tag} className="text-muted-foreground font-body text-xs flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-primary shrink-0"/>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </SpotlightCard>
            </MagneticCard>
        ))}
    </SectionShell>
);

export default ProjectsSection;

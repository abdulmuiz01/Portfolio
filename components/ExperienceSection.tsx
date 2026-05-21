import {MagneticCard} from "@/components/magnetic/MagneticCard";
import {SpotlightCard} from "@/components/Spotlight";
import SectionShell, {METAL_STYLE} from "@/components/SectionShell";

const experiences = [
    {
        role: "Software Developer",
        company: "Alt. Srl",
        type: "Full-time",
        period: "Oct 2025 – Present",
        location: "Dormelletto, Italy · Hybrid",
        description: "ETL process development with Talend, database integration and modeling, Java development, and Salesforce integration. Collaborating on data flow automation and process optimization.",
        tags: ["Talend", "Java", "SQL", "Salesforce", "Data Integration"],
    },
    {
        role: "Junior Web Developer",
        company: "5Social",
        type: "Full-time",
        period: "Sep 2024 – May 2025",
        location: "Varese, Italy · Hybrid",
        description: "Developed the back-office for Hagile®, a digital platform for socio-sanitary transport booking. Built admin dashboards, interactive mission calendars, and dynamic operator tables.",
        tags: ["Next.js", "React", "JavaScript", "Material UI", "REST API"],
    },
    {
        role: "Junior Web Developer",
        company: "Bod Lenses",
        type: "Internship",
        period: "Jun 2024 – Aug 2024",
        location: "Vilnius, Lithuania · Hybrid",
        description: "Built a full-stack web application using Next.js and Java within an international team. Contributed to feature development, testing, debugging, and technical documentation.",
        tags: ["Next.js", "Java", "Quarkus", "REST API"],
    },
];

const ExperienceSection = () => (
    <SectionShell label="Career" title="Experience" titleColor="accent">
        {experiences.map((exp, i) => (
            <MagneticCard
                key={exp.company}
                strength={0.15}
                className="group relative rounded-3xl cursor-pointer"
                style={METAL_STYLE}
            >
                <SpotlightCard color="accent" radius={200} className="p-5 rounded-3xl h-full flex flex-col min-h-52">
                    <span className="text-muted-foreground text-xs font-body">0{i + 1}</span>
                    <div className="mt-1 mb-1">
                        <h3 className="font-heading font-semibold text-base neon-text leading-tight">{exp.role}</h3>
                        <p className="text-primary font-body text-sm font-medium">{exp.company}</p>
                        <p className="text-muted-foreground font-body text-xs mt-0.5">{exp.type} · {exp.period}</p>
                        <p className="text-muted-foreground font-body text-xs">{exp.location}</p>
                    </div>
                    <p className="text-muted-foreground font-body text-xs leading-relaxed my-3 flex-1">{exp.description}</p>
                    <ul className="flex flex-wrap gap-2 mt-auto">
                        {exp.tags.map((tag) => (
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

export default ExperienceSection;

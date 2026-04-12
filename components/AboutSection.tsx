import {motion} from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
    return (
        <div className="flex items-center justify-center min-h-screen w-full mx-auto">
            <motion.div
                initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
            >
                <Image
                    src="/profile.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="rounded-full  "
                />
            </motion.div>
            <div className="flex flex-col items-center justify-center px-6 max-w-3xl ">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-8">
                About
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center">
                I build things for the <span className="neon-text">web</span>.
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed text-center ">
                I'm a full stack developer passionate about crafting clean, performant
                applications. With expertise spanning React, Node.js, Python, and cloud
                infrastructure, I turn complex problems into elegant solutions.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-16 w-full max-w-lg">
                {[
                    {num: "5+", label: "Years"},
                    {num: "40+", label: "Projects"},
                    {num: "15+", label: "Clients"},
                ].map((stat) => (
                    <div key={stat.label} className="text-center">
                        <p className="text-3xl font-heading font-bold neon-text">{stat.num}</p>
                        <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default AboutSection;

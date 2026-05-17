import {motion} from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
    return (
        <div className="flex flex-col items-center justify-center mx-auto gap-12 lg:flex-row ">
            <motion.div
                initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="flex justify-center"
            >
                <Image
                    src="/profile.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="rounded-full w-52 h-52 md:w-72 md:h-72 lg:w-96 lg:h-96 "
                />
            </motion.div>
            <div className="flex flex-col items-center justify-center px-6 max-w-3xl ">
                <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-8">
                    About
                </p>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-center">
                    Passione per il <span className="neon-text">web</span>.
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed text-center max-w-4xl lg:text-lg">
                    Sono un Web Developer con una forte passione per la tecnologia e lo sviluppo web full stack.
                    Amo creare interfacce intuitive e soluzioni digitali che migliorano la vita delle persone.
                </p>
                {/*<div className="grid grid-cols-3 gap-8 mt-16 w-full max-w-lg">*/}
                {/*    {[*/}
                {/*        {num: "1+", label: "Years"},*/}
                {/*        {num: "40+", label: "Projects"},*/}
                {/*        {num: "15+", label: "Clients"},*/}
                {/*    ].map((stat) => (*/}
                {/*        <div key={stat.label} className="text-center">*/}
                {/*            <p className="text-2xl font-heading font-bold neon-text">{stat.num}</p>*/}
                {/*            <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default AboutSection;

'use client'

import {createContext, useContext, useState, ReactNode} from 'react'

export type Lang = 'it' | 'en'

const it = {
    nav: {
        home: 'Home', about: 'Chi Sono', experience: 'Esperienza',
        tech: 'Tecnologie', projects: 'Progetti', contact: 'Contatti',
    },
    hero: {
        role: 'Junior Full Stack Developer',
        location: 'Varese, Italia',
        scroll: 'Scorri',
    },
    about: {
        label: 'Chi Sono',
        heading: 'Passione per il web.',
        bio: "Ciao! Sono Abdul Muiz Khan.\nJunior Full Stack Developer diplomato all'ITS Incom di Busto Arsizio. Appassionato di interfacce intuitive e soluzioni digitali che fanno davvero la differenza. Con esperienza pratica in progetti sanitari e commerciali, mi trovo a mio agio in ambienti agili e collaborativi dove crescere ogni giorno.",
        langLabel: 'Lingue',
        languages: 'Italiano · Urdu · Inglese (C1) · Francese (A2)',
    },
    experience: {
        label: 'Carriera',
        title: 'Esperienza',
        items: [
            {
                role: 'Software Developer', company: 'Alt. Srl', type: 'Tempo pieno',
                period: 'Ott 2025 – Presente', location: 'Dormelletto, Italia · Ibrido',
                description: "Sviluppo di processi ETL con Talend, integrazione e modellazione di database, sviluppo Java e integrazione Salesforce. Collaborazione sull'automazione dei flussi dati e ottimizzazione dei processi.",
                tags: ['Talend', 'Java', 'SQL', 'Salesforce', 'Data Integration'],
            },
            {
                role: 'Junior Web Developer', company: '5Social', type: 'Tempo pieno',
                period: 'Set 2024 – Mag 2025', location: 'Varese, Italia · Ibrido',
                description: 'Sviluppo del back-office di Hagile®, piattaforma digitale per la prenotazione di trasporti socio-sanitari. Realizzazione di dashboard dedicate, calendari missioni interattivi e tabelle operatori dinamiche.',
                tags: ['Next.js', 'React', 'JavaScript', 'Material UI', 'REST API'],
            },
            {
                role: 'Junior Web Developer', company: 'Bod Lenses', type: 'Stage',
                period: 'Giu 2024 – Ago 2024', location: 'Vilnius, Lituania · Ibrido',
                description: "Sviluppo di un'applicazione web full-stack con Next.js e Java in un team internazionale. Contributo a sviluppo funzionalità, testing, debugging e documentazione tecnica.",
                tags: ['Next.js', 'Java', 'Quarkus', 'REST API'],
            },
        ],
    },
    tech: {
        label: 'Competenze',
        title: 'Tecnologie',
        skills: [
            {category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'Tailwind CSS', 'ShadCN', 'Angular', 'Material UI']},
            {category: 'Backend', items: ['Java', 'Quarkus', 'REST APIs', 'Node.js']},
            {category: 'Database', items: ['SQL', 'MongoDB', 'Microsoft SQL Server']},
            {category: 'Strumenti & DevOps', items: ['Git / GitHub', 'Figma', 'Talend', 'Azure DevOps', 'Cypress', 'Salesforce']},
        ],
    },
    projects: {
        label: 'Lavori',
        title: 'Progetti in evidenza',
        items: [
            {
                title: 'Hagile® Platform',
                description: 'Sistema di back-office per la prenotazione di trasporti socio-sanitari non urgenti. Dashboard dedicate per amministratori e operatori, calendari missioni interattivi e tabelle turni dinamiche.',
                tags: ['Next.js', 'React', 'JavaScript', 'Material UI', 'REST API'],
            },
            {
                title: 'ETL Data Pipeline',
                description: 'Sviluppo e gestione di processi ETL con Talend, integrazione e modellazione di database, pipeline dati Java e integrazione Salesforce presso Alt. Srl.',
                tags: ['Talend', 'Java', 'SQL', 'Salesforce', 'Data Integration'],
            },
            {
                title: 'Web Application',
                description: "Applicazione web full-stack sviluppata con Next.js e Java durante uno stage internazionale a Vilnius. Funzionalità consegnate nei tempi all'interno di un team agile e interdisciplinare.",
                tags: ['Next.js', 'Java', 'Quarkus', 'REST API'],
            },
        ],
    },
    contact: {
        label: 'Contatti',
        title: 'Parliamoci.',
        subtitle: 'Hai un progetto in mente? Mi farebbe piacere sentirne parlare.',
        linkedin: 'LinkedIn', email: 'Email', whatsapp: 'WhatsApp',
    },
    footer: {
        status: 'disponibile per assunzione',
        built: 'fatto con passione e caffè',
    },
}

const en: typeof it = {
    nav: {
        home: 'Home', about: 'About', experience: 'Experience',
        tech: 'Tech Stack', projects: 'Projects', contact: 'Contact',
    },
    hero: {
        role: 'Junior Full Stack Developer',
        location: 'Varese, Italy',
        scroll: 'Scroll',
    },
    about: {
        label: 'About',
        heading: 'Passion for the web.',
        bio: "Hi! I'm Abdul Muiz Khan.\nA Junior Full Stack Developer graduated from ITS Incom, Busto Arsizio. Passionate about building intuitive interfaces and digital solutions that make a real difference. With hands-on experience in healthcare and commercial projects, I thrive in collaborative, agile environments where I can grow every day.",
        langLabel: 'Languages',
        languages: 'Italian · Urdu · English (C1) · French (A2)',
    },
    experience: {
        label: 'Career',
        title: 'Experience',
        items: [
            {
                role: 'Software Developer', company: 'Alt. Srl', type: 'Full-time',
                period: 'Oct 2025 – Present', location: 'Dormelletto, Italy · Hybrid',
                description: 'ETL process development with Talend, database integration and modeling, Java development, and Salesforce integration. Collaborating on data flow automation and process optimization.',
                tags: ['Talend', 'Java', 'SQL', 'Salesforce', 'Data Integration'],
            },
            {
                role: 'Junior Web Developer', company: '5Social', type: 'Full-time',
                period: 'Sep 2024 – May 2025', location: 'Varese, Italy · Hybrid',
                description: 'Developed the back-office for Hagile®, a digital platform for socio-sanitary transport booking. Built admin dashboards, interactive mission calendars, and dynamic operator tables.',
                tags: ['Next.js', 'React', 'JavaScript', 'Material UI', 'REST API'],
            },
            {
                role: 'Junior Web Developer', company: 'Bod Lenses', type: 'Internship',
                period: 'Jun 2024 – Aug 2024', location: 'Vilnius, Lithuania · Hybrid',
                description: 'Built a full-stack web application using Next.js and Java within an international team. Contributed to feature development, testing, debugging, and technical documentation.',
                tags: ['Next.js', 'Java', 'Quarkus', 'REST API'],
            },
        ],
    },
    tech: {
        label: 'Skills',
        title: 'Tech Stack',
        skills: [
            {category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'Tailwind CSS', 'ShadCN', 'Angular', 'Material UI']},
            {category: 'Backend', items: ['Java', 'Quarkus', 'REST APIs', 'Node.js']},
            {category: 'Database', items: ['SQL', 'MongoDB', 'Microsoft SQL Server']},
            {category: 'Tools & DevOps', items: ['Git / GitHub', 'Figma', 'Talend', 'Azure DevOps', 'Cypress', 'Salesforce']},
        ],
    },
    projects: {
        label: 'Work',
        title: 'Featured Projects',
        items: [
            {
                title: 'Hagile® Platform',
                description: 'Back-office system for socio-sanitary non-urgent transport booking. Built dedicated dashboards for admins and operators, interactive mission calendars, and dynamic shift tables.',
                tags: ['Next.js', 'React', 'JavaScript', 'Material UI', 'REST API'],
            },
            {
                title: 'ETL Data Pipeline',
                description: 'Development and management of ETL processes using Talend, database integration and modeling, Java-based data pipelines, and Salesforce integration at Alt. Srl.',
                tags: ['Talend', 'Java', 'SQL', 'Salesforce', 'Data Integration'],
            },
            {
                title: 'Web Application',
                description: 'Full-stack web application built with Next.js and Java during an international internship in Vilnius. Delivered features on schedule within an agile cross-functional team.',
                tags: ['Next.js', 'Java', 'Quarkus', 'REST API'],
            },
        ],
    },
    contact: {
        label: 'Contact',
        title: "Let's connect.",
        subtitle: "Got a project in mind? I'd love to hear about it.",
        linkedin: 'LinkedIn', email: 'Email', whatsapp: 'WhatsApp',
    },
    footer: {
        status: 'available for hire',
        built: 'built with passion & caffeine',
    },
}

export const translations = {it, en}
export type Translations = typeof it

const LanguageContext = createContext<{lang: Lang; setLang: (l: Lang) => void}>({
    lang: 'it',
    setLang: () => {},
})

export function LanguageProvider({children}: {children: ReactNode}) {
    const [lang, setLang] = useState<Lang>('it')
    return (
        <LanguageContext.Provider value={{lang, setLang}}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLang() {
    return useContext(LanguageContext)
}

export function useTranslations(): Translations {
    const {lang} = useLang()
    return translations[lang]
}

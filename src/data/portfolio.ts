export const profile = {
    name: "Guillaume Mbella Ebongue",
    title: "Développeur FullStack",
    subtitle: "10+ ans d'expérience · Java · React · .NET · Spring Boot",
    location: "Québec, QC, Canada",
    email: "dowesw@gmail.com",
    phone: "+1 438 773 6086",
    github: "https://github.com/dowesw",
    gitlab: "https://gitlab.com/dowesw",
    linkedin: "https://www.linkedin.com/in/dowes-mbella-a78720122/",
    malt: "https://www.malt.fr/profile/guillaumembellaebongue",
    avatar: "https://avatars.githubusercontent.com/u/6861482?v=4",
    bio: "Développeur FullStack passionné avec plus de 10 ans d'expérience dans la conception et le développement d'applications web, mobiles et d'ERP. Autonome, organisé et à l'aise aussi bien en équipe qu'en freelance.",
    highlights: [
        "Développeur FullStack depuis 2014",
        "Baccalauréat en informatique (IUC)",
        "Autonome, organisé et débrouillard",
        "Maîtrise des concepts orientés objet",
        "Facilité d'adaptation",
        "Aptitude à travailler en équipe",
        "Français et Anglais fonctionnel",
    ],
};

export const skills = [
    {
        category: "Langages",
        icon: "💻",
        items: ["Java", "C#", "TypeScript", "JavaScript", "Python", "PHP", "C++", "SQL", "PL/SQL", "Flutter"],
    },
    {
        category: "Frameworks",
        icon: "⚙️",
        items: ["React", "Angular", "Spring Boot", ".NET Core", "React Native", "Laravel", "Symfony", "Bootstrap", "Material UI"],
    },
    {
        category: "Base de données",
        icon: "🗄️",
        items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "SQLite"],
    },
    {
        category: "DevOps & Outils",
        icon: "🛠️",
        items: ["Docker", "Kubernetes", "Git", "GitLab CI", "Azure", "AWS", "Postman", "Figma", "Firebase"],
    },
    {
        category: "Architecture & API",
        icon: "🏗️",
        items: ["REST", "GraphQL", "SOAP", "Microservices", "MVC", "UML", "Merise"],
    },
];

export const experiences = [
    {
        title: "Conseiller – Développeur .NET",
        company: "CGI",
        period: "Octobre 2023 – Présent",
        location: "Québec, Canada",
        type: "CDI",
        description: [
            "Maintenance et mise à jour des logiciels chez Industriel Alliance",
            "Développement d'un service de gestion de la clientèle au Ministère des Ressources Naturelles et Forestières",
        ],
        stack: ["C#", ".NET Core", "React", "Angular", "TypeScript", "PostgreSQL", "SQL Server", "Azure", "AWS", "Docker", "Microservices"],
    },
    {
        title: "Développeur FullStack (Freelance)",
        company: "Motema – Blossense",
        period: "Juin 2023 – Présent",
        location: "Remote",
        type: "Freelance",
        description: [
            "Modélisation de la structure de données à partir des user stories",
            "Implémentation de services d'intégration (LinkedIn, Indeed, Pôle emploi)",
            "Développement des API backend et de l'interface web",
            "Tests unitaires & intégration, CI/CD avec GitLab",
            "Administration serveur Linux (Infomaniak + Docker)",
        ],
        stack: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker", "GitLab CI", "Microservices"],
    },
    {
        title: "Mentor Développeur",
        company: "OpenClassrooms",
        period: "Octobre 2021 – Mai 2023",
        location: "Remote",
        type: "Freelance",
        description: [
            "Mentor Développeur Web",
            "Mentor Développeur Java",
            "Mentor Développeur JavaScript / React",
        ],
        stack: ["HTML5", "CSS3", "JavaScript", "React", "Java", "Express", "MongoDB", "TypeScript"],
    },
    {
        title: "Développeur FullStack",
        company: "Lymytz – ERP v2",
        period: "Janvier 2022 – Juin 2023",
        location: "Remote",
        type: "Freelance",
        description: [
            "Analyse et conception de la base de données",
            "Implémentation des web services REST",
            "Développement des modules de facturation, paie, dépôts et tableaux de bord",
            "Déploiement sur serveur Linux virtuel",
        ],
        stack: ["React", "Spring Boot", "PostgreSQL", "REST", "Docker", "GitHub"],
    },
    {
        title: "Développeur FullStack",
        company: "Lymytz – Cloud Manager",
        period: "Décembre 2020 – Novembre 2021",
        location: "Cameroun",
        type: "CDI",
        description: [
            "Développement du logiciel de gestion des clients de Lymytz SA",
            "Intégration des paiements Orange Money et Mobile Money",
            "Déploiement sur serveur virtuel Linux",
        ],
        stack: ["Angular", "Spring Boot", "PostgreSQL", "REST", "JUnit"],
    },
    {
        title: "Développeur FullStack",
        company: "Lymytz – ERP",
        period: "Novembre 2014 – Décembre 2021",
        location: "Cameroun",
        type: "CDI",
        description: [
            "Développement complet d'un ERP pour moyennes et grandes entreprises",
            "Modules : facturation, paie, dépôts, comptabilité, présences",
            "Applications additives : pointage biométrique, synchronisation multi-BDD",
            "Application mobile de pointage (Android)",
        ],
        stack: ["Java EE", "C#", "Android", "PostgreSQL", "SOAP", "REST", "Primefaces"],
    },
];

export const projects = [
    {
        name: "ERP Lymytz",
        description: "ERP complet pour la gestion des moyennes et grandes entreprises (facturation, paie, comptabilité, RH).",
        stack: ["Java EE", "C#", "PostgreSQL", "Android"],
        github: "https://github.com/dowesw/ERP-LYMYTZ",
        type: "ERP",
    },
    {
        name: "Gestion École",
        description: "Logiciel de gestion académique incluant notes, bulletins, répartition des cours et livrets scolaires.",
        stack: ["C#", "PostgreSQL", "MVC"],
        github: "https://github.com/dowesw/Gestion-Ecole",
        type: "Desktop",
    },
    {
        name: "Gestion Caisse",
        description: "Logiciel de gestion commerciale avec caisse, facturation et gestion des articles.",
        stack: ["C#", "PostgreSQL"],
        github: "https://github.com/dowesw/GESTION_CAISSE",
        type: "Desktop",
    },
    {
        name: "E-commerce TNE",
        description: "Plateforme e-commerce avec backend REST en Node.js et frontend React.",
        stack: ["JavaScript", "Node.js", "React"],
        github: "https://github.com/dowesw/frontend-e-commerce-tne",
        githubBack: "https://github.com/dowesw/backend-e-commerce-tne",
        type: "Web",
    },
    {
        name: "Gestion Pack Auto",
        description: "Application de gestion automobile complète.",
        stack: ["C#", "PostgreSQL"],
        github: "https://github.com/dowesw/Gestion-Pack-Auto",
        type: "Desktop",
    },
    {
        name: "Blossense",
        description: "Logiciel de gestion du recrutement avec intégration LinkedIn, Indeed et Pôle Emploi.",
        stack: ["React", "Spring Boot", "PostgreSQL", "Docker"],
        github: "",
        type: "Web",
    },
    {
        name: "TourGuide",
        description: "Application d'aide au voyage par géolocalisation. Propose des attractions touristiques à proximité, attribue des points de récompense et suggère des offres de voyage personnalisées.",
        stack: ["Java 11", "Spring Boot", "Gradle", "Microservices", "Swagger", "GitLab CI"],
        github: "",
        gitlab: "https://gitlab.com/dowesw/projettourguide",
        type: "API",
    },
];

export const education = [
    {
        degree: "Baccalauréat en Informatique",
        school: "Institut Universitaire de la Côte (IUC)",
        year: "2014",
        note: "Évaluation comparative MICC",
    },
];

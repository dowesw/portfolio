const services = [
    {
        icon: '🌐',
        title: 'Développement Web',
        description: 'Conception et développement d\'applications web full-stack modernes avec React, Angular, Spring Boot et .NET Core. Du front-end responsive au back-end robuste.',
        tags: ['React', 'Angular', 'Spring Boot', '.NET', 'TypeScript'],
    },
    {
        icon: '⚡',
        title: 'API & Microservices',
        description: 'Conception d\'APIs REST et GraphQL, architecture microservices, intégrations tierces (LinkedIn, Indeed, paiement mobile) et déploiement avec Docker/Kubernetes.',
        tags: ['REST', 'GraphQL', 'Docker', 'Microservices', 'PostgreSQL'],
    },
    {
        icon: '📱',
        title: 'Développement Mobile',
        description: 'Applications Android natives et cross-platform avec Flutter et React Native. Déploiement sur Google Play Store et intégration de paiements mobiles (Orange Money, Mobile Money).',
        tags: ['Android', 'Flutter', 'React Native', 'SQLite'],
    },
    {
        icon: '🏢',
        title: 'ERP & Logiciels Métier',
        description: 'Développement de logiciels de gestion sur mesure (ERP, CRM, comptabilité, paie, académique). Analyse des besoins, modélisation UML/Merise et déploiement complet.',
        tags: ['Java EE', 'C#', 'UML', 'PostgreSQL', 'Reporting'],
    },
    {
        icon: '☁️',
        title: 'DevOps & Cloud',
        description: 'Conteneurisation Docker, CI/CD GitLab/GitHub Actions, déploiement sur Azure, AWS et serveurs Linux. Configuration d\'environnements de production sécurisés.',
        tags: ['Docker', 'GitLab CI', 'Azure', 'AWS', 'Linux'],
    },
    {
        icon: '🎓',
        title: 'Mentorat & Formation',
        description: '2 ans de mentorat chez OpenClassrooms pour des développeurs web, Java et JavaScript/React. Accompagnement, code review et suivi pédagogique personnalisé.',
        tags: ['Mentorat', 'Code Review', 'Java', 'React', 'JavaScript'],
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative" style={{ background: 'linear-gradient(180deg,#050b18 0%,#0a0f1e 100%)' }}>
            {/* Background dots */}
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-cyan-400 glass mb-4">Services</span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-6">Ce que je propose</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                        De la conception à la mise en production, je couvre l'ensemble du cycle de développement logiciel.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <div key={s.title}
                            className="relative bg-white/3 rounded-xl p-6 hover:bg-white/5 transition-colors">

                            <div className="flex items-start gap-4 mb-4">
                                <span className="text-3xl flex-shrink-0">{s.icon}</span>
                                <h3 className="text-white font-bold text-base leading-tight">{s.title}</h3>
                            </div>

                            <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {s.tags.map((tag) => (
                                    <span key={tag} className="px-2.5 py-1 bg-white/5 text-slate-400 rounded-md text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA freelance */}
                <div className="mt-16 text-center">
                    <div className="inline-block bg-white/5 rounded-lg px-6 py-6 sm:px-8 hover:bg-white/10 transition-colors">
                        <p className="text-white font-bold mb-3">Besoin d'un développeur FullStack expérimenté ?</p>
                        <a href="https://www.malt.fr/profile/guillaumembellaebongue" target="_blank" rel="noopener noreferrer"
                            className="btn-premium btn-gradient px-7 py-3 rounded-lg font-semibold text-white text-sm">
                            Me contacter sur Malt
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

const services = [
    {
        icon: '🌐',
        title: 'Développement Web',
        description: 'Conception et développement d\'applications web full-stack modernes avec React, Angular, Spring Boot et .NET Core. Du front-end responsive au back-end robuste.',
        tags: ['React', 'Angular', 'Spring Boot', '.NET', 'TypeScript'],
        gradient: 'from-indigo-500/10 to-blue-500/10',
        border: 'hover:border-indigo-500/40',
        glow: 'group-hover:shadow-indigo-500/10',
    },
    {
        icon: '⚡',
        title: 'API & Microservices',
        description: 'Conception d\'APIs REST et GraphQL, architecture microservices, intégrations tierces (LinkedIn, Indeed, paiement mobile) et déploiement avec Docker/Kubernetes.',
        tags: ['REST', 'GraphQL', 'Docker', 'Microservices', 'PostgreSQL'],
        gradient: 'from-blue-500/10 to-cyan-500/10',
        border: 'hover:border-blue-500/40',
        glow: 'group-hover:shadow-blue-500/10',
    },
    {
        icon: '📱',
        title: 'Développement Mobile',
        description: 'Applications Android natives et cross-platform avec Flutter et React Native. Déploiement sur Google Play Store et intégration de paiements mobiles (Orange Money, Mobile Money).',
        tags: ['Android', 'Flutter', 'React Native', 'SQLite'],
        gradient: 'from-cyan-500/10 to-teal-500/10',
        border: 'hover:border-cyan-500/40',
        glow: 'group-hover:shadow-cyan-500/10',
    },
    {
        icon: '🏢',
        title: 'ERP & Logiciels Métier',
        description: 'Développement de logiciels de gestion sur mesure (ERP, CRM, comptabilité, paie, académique). Analyse des besoins, modélisation UML/Merise et déploiement complet.',
        tags: ['Java EE', 'C#', 'UML', 'PostgreSQL', 'Reporting'],
        gradient: 'from-purple-500/10 to-pink-500/10',
        border: 'hover:border-purple-500/40',
        glow: 'group-hover:shadow-purple-500/10',
    },
    {
        icon: '☁️',
        title: 'DevOps & Cloud',
        description: 'Conteneurisation Docker, CI/CD GitLab/GitHub Actions, déploiement sur Azure, AWS et serveurs Linux. Configuration d\'environnements de production sécurisés.',
        tags: ['Docker', 'GitLab CI', 'Azure', 'AWS', 'Linux'],
        gradient: 'from-orange-500/10 to-amber-500/10',
        border: 'hover:border-orange-500/40',
        glow: 'group-hover:shadow-orange-500/10',
    },
    {
        icon: '🎓',
        title: 'Mentorat & Formation',
        description: '2 ans de mentorat chez OpenClassrooms pour des développeurs web, Java et JavaScript/React. Accompagnement, code review et suivi pédagogique personnalisé.',
        tags: ['Mentorat', 'Code Review', 'Java', 'React', 'JavaScript'],
        gradient: 'from-emerald-500/10 to-green-500/10',
        border: 'hover:border-emerald-500/40',
        glow: 'group-hover:shadow-emerald-500/10',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative" style={{ background: 'linear-gradient(180deg,#050b18 0%,#0a0f1e 100%)' }}>
            {/* Background dots */}
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-cyan-400 glass border border-cyan-500/20 mb-4">Services</span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-4">Ce que je propose</h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        De la conception à la mise en production, je couvre l'ensemble du cycle de développement logiciel.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((s) => (
                        <div key={s.title}
                            className={`group relative bg-gradient-to-br ${s.gradient} glass rounded-2xl p-6 border border-white/5 ${s.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${s.glow}`}>
                            {/* Top accent */}
                            <div className="absolute top-0 left-6 right-6 h-px rounded-t-2xl" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

                            <div className="flex items-start gap-4 mb-4">
                                <span className="text-3xl p-3 glass rounded-2xl flex-shrink-0">{s.icon}</span>
                                <h3 className="text-white font-bold text-base leading-tight pt-2">{s.title}</h3>
                            </div>

                            <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.description}</p>

                            <div className="flex flex-wrap gap-1.5">
                                {s.tags.map((tag) => (
                                    <span key={tag} className="px-2.5 py-0.5 bg-white/5 text-slate-400 rounded-full text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA freelance */}
                <div className="mt-12 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 glass rounded-2xl px-8 py-6 border border-indigo-500/20" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(168,85,247,0.06))' }}>
                        <div className="text-left">
                            <p className="text-white font-bold">Besoin d'un développeur FullStack expérimenté ?</p>
                            <p className="text-slate-400 text-sm">Disponible pour missions freelance courtes ou longues durées.</p>
                        </div>
                        <a href="https://www.malt.fr/profile/guillaumembellaebongue" target="_blank" rel="noopener noreferrer"
                            className="flex-shrink-0 px-6 py-3 rounded-full font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 whitespace-nowrap"
                            style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)' }}>
                            Me contacter sur Malt →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

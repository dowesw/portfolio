const serviceIcons = ['🌐', '⚡', '📱', '🏢', '☁️', '🎓'];
const serviceTags = [
    ['React', 'Angular', 'Spring Boot', '.NET', 'TypeScript'],
    ['REST', 'GraphQL', 'Docker', 'Microservices', 'PostgreSQL'],
    ['Android', 'Flutter', 'React Native', 'SQLite'],
    ['Java EE', 'C#', 'UML', 'PostgreSQL', 'Reporting'],
    ['Docker', 'GitLab CI', 'Azure', 'AWS', 'Linux'],
    ['Mentorat', 'Code Review', 'Java', 'React', 'JavaScript'],
];

import { useLanguage } from '../i18n/LanguageContext';

export default function Services() {
    const { t } = useLanguage();
    return (
        <section id="services" className="py-24 relative" style={{ background: 'linear-gradient(180deg,#050b18 0%,#0a0f1e 100%)' }}>
            {/* Background dots */}
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-cyan-400 glass mb-4">{t.services.badge}</span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-6">{t.services.title}</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                        {t.services.subtitle}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.services.items.map((s, idx) => {
                        const gradientClass = ['card-gradient-blue', 'card-gradient-purple', 'card-gradient-pink'][idx % 3];
                        const tagBg = [
                            'bg-indigo-500/10 text-indigo-300',
                            'bg-blue-500/10 text-blue-300',
                            'bg-purple-500/10 text-purple-300'
                        ];
                        return (
                        <div key={s.title}
                            className={`relative ${gradientClass} rounded-xl p-6 hover:bg-opacity-80 transition-all duration-300 group overflow-hidden`}>

                            {/* Hover accent line */}
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex items-start gap-4 mb-4">
                                <span className="text-3xl flex-shrink-0">{serviceIcons[idx]}</span>
                                <h3 className="text-white font-bold text-base leading-tight">{s.title}</h3>
                            </div>

                            <p className="text-slate-300 text-sm leading-relaxed mb-5">{s.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {serviceTags[idx].map((tag, ti) => (
                                    <span key={tag} className={`px-2.5 py-1 rounded-md text-xs font-medium ${tagBg[ti % 3]}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        );
                    })}
                </div>

                {/* CTA freelance */}
                <div className="mt-20 text-center">
                    <div className="inline-block bg-gradient-to-br from-indigo-500/8 to-blue-500/5 border border-indigo-500/20 rounded-2xl px-8 py-8 sm:px-12 hover:border-indigo-500/40 transition-all duration-300">
                        <p className="text-white font-bold text-lg mb-4">{t.services.ctaTitle}</p>
                        <p className="text-slate-400 text-sm mb-6 max-w-sm">{t.services.ctaDesc}</p>
                        <a href="https://www.malt.fr/profile/guillaumembellaebongue" target="_blank" rel="noopener noreferrer"
                            className="btn-premium btn-gradient btn-gradient-enhanced px-8 py-3 rounded-lg font-semibold text-white text-sm inline-block shadow-lg shadow-indigo-500/25">
                            {t.services.ctaBtn}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

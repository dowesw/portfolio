import { experiences } from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';

const typeBadge: Record<string, string> = {
    CDI: 'bg-emerald-900/40 text-emerald-300 border border-emerald-500/30',
    Freelance: 'bg-amber-900/40 text-amber-300 border border-amber-500/30',
    Stage: 'bg-violet-900/40 text-violet-300 border border-violet-500/30',
};

export default function Experience() {
    const { t } = useLanguage();
    return (
        <section id="experience" className="py-24 relative" style={{ background: 'linear-gradient(180deg,#050b18 0%,#0a0f1e 50%,#050b18 100%)' }}>
            {/* Side gradient accent */}
            <div className="absolute left-0 top-1/4 w-px h-1/2 opacity-30" style={{ background: 'linear-gradient(180deg,transparent,#6366f1,transparent)' }} />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-purple-400 glass border border-purple-500/20 mb-4">{t.experience.badge}</span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text">{t.experience.title}</h2>
                </div>

                <div className="relative">
                    {/* Central gradient line */}
                    <div className="absolute left-6 top-2 bottom-2 w-px" style={{ background: 'linear-gradient(180deg, transparent, #6366f1 10%, #3b82f6 50%, #a855f7 90%, transparent)' }} />

                    <div className="space-y-6 pl-14">
                        {experiences.map((exp, i) => (
                            <div key={i} className="relative group">
                                {/* Timeline dot */}
                                <div className="absolute -left-14 top-6 flex items-center justify-center">
                                    <div className="w-5 h-5 rounded-full border-2 border-indigo-500 bg-slate-900 z-10 group-hover:border-blue-400 transition-colors" />
                                    <div className="absolute w-3 h-3 rounded-full bg-indigo-500/40 group-hover:scale-150 transition-transform" />
                                </div>

                                <div className="glass rounded-2xl p-6 border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-indigo-500/10">
                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-white font-bold text-lg leading-tight">{exp.title}</h3>
                                            <p className="gradient-text-blue font-semibold text-sm mt-0.5">{exp.company}</p>
                                        </div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${typeBadge[exp.type] ?? 'bg-slate-700/50 text-slate-300 border border-slate-600/50'}`}>
                                                {t.experience.types[exp.type] ?? exp.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Meta */}
                                    <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            {exp.period}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            {exp.location}
                                        </span>
                                    </div>

                                    {/* Tasks */}
                                    <ul className="space-y-1.5 mb-5">
                                        {(t.experience.descriptions[exp.company] ?? exp.description).map((desc, j) => (
                                            <li key={j} className="flex gap-2 text-slate-400 text-sm">
                                                <span className="text-indigo-500 flex-shrink-0 mt-0.5">▸</span>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Stack */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.stack.map((tech) => (
                                            <span key={tech} className="px-2.5 py-0.5 bg-indigo-900/20 text-indigo-300/80 border border-indigo-800/30 rounded-full text-xs font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

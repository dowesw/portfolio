import { experiences } from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';

const typeBadge: Record<string, string> = {
    CDI: 'bg-emerald-900/40 text-emerald-300',
    Freelance: 'bg-amber-900/40 text-amber-300',
    Stage: 'bg-violet-900/40 text-violet-300',
};

export default function Experience() {
    const { t } = useLanguage();
    return (
        <section id="experience" className="py-24 relative" style={{ background: 'linear-gradient(180deg,#050b18 0%,#0a0f1e 50%,#050b18 100%)' }}>
            {/* Side gradient accent */}
            <div className="absolute left-0 top-1/4 w-px h-1/2 opacity-30" style={{ background: 'linear-gradient(180deg,transparent,#6366f1,transparent)' }} />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-purple-400 glass mb-4">{t.experience.badge}</span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-6">{t.experience.title}</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">{t.experience.subtitle}</p>
                </div>

                <div className="relative">
                    {/* Central gradient line */}
                    <div className="absolute left-6 top-2 bottom-2 w-px" style={{ background: 'linear-gradient(180deg, transparent, #6366f1 10%, #3b82f6 50%, #a855f7 90%, transparent)' }} />

                    <div className="space-y-6 pl-14">
                        {experiences.map((exp, i) => (
                            <div key={i} className="relative group">
                                {/* Timeline dot */}
                                <div className="absolute -left-14 top-6 flex items-center justify-center">
                                    <div className="w-5 h-5 rounded-full bg-slate-900 z-10 transition-colors ring-2 ring-indigo-500 group-hover:ring-blue-400" />
                                    <div className="absolute w-3 h-3 rounded-full bg-indigo-500/40 group-hover:scale-150 transition-transform" />
                                </div>

                                <div className="bg-white/3 rounded-xl p-6 hover:bg-white/5 transition-colors">
                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-white font-bold text-lg leading-tight">{exp.title}</h3>
                                            <p className="text-slate-300 font-semibold text-sm mt-0.5">{exp.company}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${typeBadge[exp.type] ?? 'bg-slate-700/50 text-slate-300'}`}>
                                            {t.experience.types[exp.type] ?? exp.type}
                                        </span>
                                    </div>

                                    {/* Meta */}
                                    <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-4">
                                        <span className="flex items-center gap-1.5">
                                            📅 {exp.period}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            📍 {exp.location}
                                        </span>
                                    </div>

                                    {/* Tasks */}
                                    <ul className="space-y-2 mb-5">
                                        {(t.experience.descriptions[exp.company] ?? exp.description).map((desc, j) => (
                                            <li key={j} className="flex gap-2 text-slate-400 text-sm">
                                                <span className="flex-shrink-0 mt-0.5">•</span>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Stack */}
                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {exp.stack.map((tech) => (
                                            <span key={tech} className="px-2.5 py-1 bg-white/5 text-slate-400 rounded-md text-xs font-medium">
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

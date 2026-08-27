import { education } from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';

const highlightIcons = ['👨‍💻', '🎓', '🎯', '🧩', '👥', '🔄', '🗣️'];

export default function About() {
    const { t, lang } = useLanguage();

    return (
        <section id="about" className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050b18 0%, #0a0f1e 100%)' }}>
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24" style={{ background: 'linear-gradient(180deg, transparent, rgba(99,102,241,0.4), transparent)' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-indigo-400 glass border border-indigo-500/20 mb-5">
                        {t.about.badge}
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-3">{t.about.title}</h2>
                    <p className="text-slate-500 text-sm max-w-xs mx-auto">
                        {lang === 'en' ? 'Background · Skills · Values' : 'Parcours · Compétences · Valeurs'}
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {t.about.stats.map((s) => (
                        <div key={s.label} className="relative glass glass-hover rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 group overflow-hidden border border-white/[0.04]">
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 70%)' }} />
                            <div className="text-3xl mb-2">{s.icon}</div>
                            <p className="text-4xl font-black gradient-text-blue leading-none mb-1">{s.value}</p>
                            <p className="text-slate-500 text-xs font-semibold tracking-wider uppercase">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Main grid */}
                <div className="grid lg:grid-cols-5 gap-12 items-start">

                    {/* Left – Bio + Highlights */}
                    <div className="lg:col-span-3 space-y-8">

                        {/* Bio */}
                        <div className="relative glass rounded-3xl p-8 border border-white/[0.04] overflow-hidden">
                            <div className="absolute top-0 left-0 w-[3px] h-full rounded-l-3xl"
                                style={{ background: 'linear-gradient(180deg, #6366f1, #3b82f6, #a855f7)' }} />
                            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-[0.04]"
                                style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
                            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                                {t.about.bio}
                            </p>
                        </div>

                        {/* Highlights */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="flex-1 h-px bg-white/[0.05]" />
                                <span className="text-slate-500 text-xs font-bold tracking-widest uppercase">
                                    {lang === 'en' ? 'Key Points' : 'Points clés'}
                                </span>
                                <span className="flex-1 h-px bg-white/[0.05]" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {t.about.highlights.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3.5 border border-white/[0.05] bg-white/[0.02] hover:border-indigo-500/25 hover:bg-indigo-500/[0.04] transition-all duration-200 hover:-translate-y-0.5">
                                        <span className="text-lg flex-shrink-0 select-none">{highlightIcons[i] ?? '✦'}</span>
                                        <span className="text-sm font-medium text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right – Formation + Langues */}
                    <div className="lg:col-span-2 space-y-5">

                        {/* Education – timeline */}
                        <div className="rounded-3xl p-6 border border-white/[0.05]" style={{ background: 'rgba(255,255,255,0.02)' }}>
                            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-6 flex items-center gap-2.5">
                                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
                                    style={{ background: 'rgba(99,102,241,0.15)' }}>🎓</span>
                                {t.about.educationTitle}
                            </h3>
                            <div className="relative">
                                <div className="absolute left-[11px] top-2 bottom-0 w-px"
                                    style={{ background: 'linear-gradient(180deg, rgba(99,102,241,0.5), rgba(59,130,246,0.2), transparent)' }} />
                                {education.map((edu) => {
                                    const eduDegree = lang === 'en' ? edu.degreeEn : edu.degree;
                                    const eduNote = lang === 'en' ? edu.noteEn : edu.note;
                                    return (
                                        <div key={edu.degree} className="relative pl-9 pb-7 last:pb-0">
                                            <div className="absolute left-0 top-0.5 w-[22px] h-[22px] rounded-full border border-indigo-500/50 flex items-center justify-center"
                                                style={{ background: '#0a0f1e' }}>
                                                <div className="w-2 h-2 rounded-full bg-indigo-400" />
                                            </div>
                                            <span className="inline-block text-[10px] font-bold tracking-widest text-indigo-400 rounded px-2 py-0.5 mb-1.5"
                                                style={{ background: 'rgba(99,102,241,0.1)' }}>
                                                {edu.year}
                                            </span>
                                            <p className="text-white font-semibold text-sm leading-snug mb-0.5">{eduDegree}</p>
                                            <p className="text-indigo-300/60 text-xs">{edu.school}</p>
                                            {eduNote && (
                                                <p className="text-slate-600 text-xs mt-1 italic">{eduNote}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="rounded-3xl p-6 border border-white/[0.05]" style={{ background: 'rgba(255,255,255,0.02)' }}>
                            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-5 flex items-center gap-2.5">
                                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
                                    style={{ background: 'rgba(59,130,246,0.15)' }}>🌐</span>
                                {t.about.languagesTitle}
                            </h3>
                            <div className="space-y-3">
                                {t.about.languages.map((l, i) => {
                                    const levels = lang === 'en'
                                        ? ['Native', 'Professional', 'Intermediate']
                                        : ['Langue maternelle', 'Professionnel', 'Intermédiaire'];
                                    const badge = [
                                        'text-emerald-400 border-emerald-500/25 bg-emerald-500/[0.08]',
                                        'text-blue-400 border-blue-500/25 bg-blue-500/[0.08]',
                                        'text-amber-400 border-amber-500/25 bg-amber-500/[0.08]',
                                    ];
                                    return (
                                        <div key={l.name} className="flex items-center justify-between py-1">
                                            <div className="flex items-center gap-2.5">
                                                <span className="text-xl">{l.flag}</span>
                                                <span className="text-slate-200 text-sm font-medium">{l.name}</span>
                                            </div>
                                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badge[i] ?? badge[2]}`}>
                                                {levels[i] ?? levels[2]}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}


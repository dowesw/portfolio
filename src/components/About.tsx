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
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-indigo-400 glass mb-5">
                        {t.about.badge}
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-6">{t.about.title}</h2>
                    <p className="text-slate-300 text-base max-w-2xl mx-auto">
                        {lang === 'en' ? 'Background · Skills · Values' : 'Parcours · Compétences · Valeurs'}
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {t.about.stats.map((s) => (
                        <div key={s.label} className="bg-white/3 rounded-lg p-6 text-center hover:bg-white/5 transition-colors">
                            <div className="text-3xl mb-3">{s.icon}</div>
                            <p className="text-3xl font-black text-white leading-none mb-2">{s.value}</p>
                            <p className="text-slate-400 text-xs font-semibold">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Main grid */}
                <div className="grid lg:grid-cols-5 gap-12 items-start">

                    {/* Left – Bio + Highlights */}
                    <div className="lg:col-span-3 space-y-8">

                        {/* Bio */}
                        <div className="bg-white/3 rounded-lg p-6 sm:p-8">
                            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
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
                                    <button key={i} className="highlight-card" aria-label={item} title={item}>
                                        <span className="text-lg flex-shrink-0 select-none">{highlightIcons[i] ?? '✦'}</span>
                                        <span className="text-sm font-medium text-slate-300">{item}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right – Formation + Langues */}
                    <div className="lg:col-span-2 space-y-5">

                        {/* Education – timeline */}
                        <div className="rounded-3xl p-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
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
                                            <div className="absolute left-0 top-0.5 w-[22px] h-[22px] rounded-full flex items-center justify-center"
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
                        <div className="rounded-3xl p-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
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
                                        'text-emerald-400 bg-emerald-500/[0.08]',
                                        'text-blue-400 bg-blue-500/[0.08]',
                                        'text-amber-400 bg-amber-500/[0.08]',
                                    ];
                                    return (
                                        <div key={l.name} className="flex items-center justify-between py-1">
                                            <div className="flex items-center gap-2.5">
                                                <span className="text-xl">{l.flag}</span>
                                                <span className="text-slate-200 text-sm font-medium">{l.name}</span>
                                            </div>
                                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${badge[i] ?? badge[2]}`}>
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


import { education } from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
    const { t, lang } = useLanguage();
    return (
        <section id="about" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050b18 0%, #0a0f1e 100%)' }}>
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section title */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-indigo-400 glass border border-indigo-500/20 mb-4">{t.about.badge}</span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text">{t.about.title}</h2>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {t.about.stats.map((s) => (
                        <div key={s.label} className="glass glass-hover rounded-2xl p-5 text-center transition-all hover:-translate-y-1">
                            <div className="text-3xl mb-1">{s.icon}</div>
                            <p className="text-3xl font-black gradient-text-blue leading-none mb-1">{s.value}</p>
                            <p className="text-slate-400 text-xs">{s.label}</p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-5 gap-10 items-start">
                    {/* Bio */}
                    <div className="lg:col-span-3">
                        <p className="text-slate-300 text-lg leading-relaxed mb-8 border-l-2 border-indigo-500 pl-5">
                            {t.about.bio}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {t.about.highlights.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 glass rounded-xl px-4 py-3 text-sm text-slate-300">
                                    <span className="text-indigo-400">✦</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="text-indigo-400">🎓</span> {t.about.educationTitle}
                        </h3>
                        {education.map((edu) => {
                            const eduDegree = lang === 'en' ? edu.degreeEn : edu.degree;
                            const eduNote = lang === 'en' ? edu.noteEn : edu.note;
                            return (
                                <div key={edu.degree} className="glass rounded-2xl p-5 border border-indigo-500/20 mb-3">
                                    <p className="text-white font-bold mb-1">{eduDegree}</p>
                                    <p className="text-indigo-300 text-sm mb-1">{edu.school}</p>
                                    <p className="text-slate-500 text-xs">{edu.year}{eduNote ? ` · ${eduNote}` : ''}</p>
                                </div>
                            );
                        })}

                        <div className="mt-4 glass rounded-2xl p-5">
                            <h4 className="text-white font-semibold mb-3 text-sm">🌐 {t.about.languagesTitle}</h4>
                            {t.about.languages.map((lang) => (
                                <div key={lang.name} className="mb-3">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-slate-300">{lang.flag} {lang.name}</span>
                                        <span className="text-slate-500">{lang.pct}%</span>
                                    </div>
                                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full rounded-full" style={{ width: `${lang.pct}%`, background: 'linear-gradient(90deg,#6366f1,#3b82f6)' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { skills } from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';

export default function Skills() {
    const { t } = useLanguage();
    return (
        <section id="skills" className="py-24 relative bg-gradient-to-b from-slate-900 to-slate-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-lg text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 bg-white/5">{t.skills.badge}</span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-6">{t.skills.title}</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base">Technologies et compétences</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((cat) => (
                        <div key={cat.category}
                            className="relative bg-gradient-to-br from-white/3 to-white/5 border border-white/5 hover:border-white/10 rounded-xl p-6 hover:bg-white/7 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-2xl">{cat.icon}</span>
                                <h3 className="text-white font-bold text-base">{t.skills.categories[cat.category] ?? cat.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((item) => (
                                    <span key={item}
                                        className="px-3 py-1.5 rounded-md text-xs font-medium bg-white/5 text-slate-300">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { skills } from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';

const gradients = [
    'from-indigo-500/10 to-blue-500/10 border-indigo-500/20 group-hover:border-indigo-500/50',
    'from-blue-500/10 to-cyan-500/10 border-blue-500/20 group-hover:border-blue-500/50',
    'from-purple-500/10 to-pink-500/10 border-purple-500/20 group-hover:border-purple-500/50',
    'from-cyan-500/10 to-teal-500/10 border-cyan-500/20 group-hover:border-cyan-500/50',
    'from-orange-500/10 to-amber-500/10 border-orange-500/20 group-hover:border-orange-500/50',
];
const tagGrads = [
    'bg-indigo-900/30 text-indigo-300 hover:bg-indigo-500/20',
    'bg-blue-900/30 text-blue-300 hover:bg-blue-500/20',
    'bg-purple-900/30 text-purple-300 hover:bg-purple-500/20',
    'bg-cyan-900/30 text-cyan-300 hover:bg-cyan-500/20',
    'bg-orange-900/30 text-orange-300 hover:bg-orange-500/20',
];

export default function Skills() {
    const { t } = useLanguage();
    return (
        <section id="skills" className="py-24 relative" style={{ background: 'linear-gradient(180deg,#0a0f1e 0%,#050b18 100%)' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-blue-400 glass border border-blue-500/20 mb-4">{t.skills.badge}</span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text">{t.skills.title}</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skills.map((cat, i) => (
                        <div key={cat.category}
                            className={`group relative bg-gradient-to-br ${gradients[i % gradients.length]} glass rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1`}>
                            {/* Top accent line */}
                            <div className="absolute top-0 left-6 right-6 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }} />
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-2xl p-2 rounded-xl glass">{cat.icon}</span>
                                <h3 className="text-white font-bold text-base">{t.skills.categories[cat.category] ?? cat.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((item) => (
                                    <span key={item}
                                        className={`px-3 py-1 rounded-full text-xs font-semibold cursor-default transition-colors ${tagGrads[i % tagGrads.length]}`}>
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

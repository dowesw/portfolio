import { skills } from '../data/portfolio';

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Compétences</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Stack Technique</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((category) => (
                        <div
                            key={category.category}
                            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-slate-800 transition-all group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">{category.icon}</span>
                                <h3 className="text-white font-semibold text-lg">{category.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium group-hover:bg-blue-900/40 group-hover:text-blue-300 transition-colors"
                                    >
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

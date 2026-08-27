import { profile } from '../data/portfolio';

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-800/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">À propos</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Qui suis-je ?</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            {profile.bio}
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                            {profile.highlights.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-300">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { value: '10+', label: "Ans d'expérience" },
                            { value: '15+', label: 'Projets réalisés' },
                            { value: '5+', label: 'Technologies majeures' },
                            { value: '3', label: 'Pays d\'intervention' },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-colors"
                            >
                                <p className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</p>
                                <p className="text-slate-400 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

import { experiences } from '../data/portfolio';

const typeColors: Record<string, string> = {
    CDI: 'bg-green-900/40 text-green-300 border-green-700/50',
    Freelance: 'bg-orange-900/40 text-orange-300 border-orange-700/50',
};

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-slate-800/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Expériences</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Parcours Professionnel</h2>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-700 md:-translate-x-1/2" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 mt-6 border-2 border-slate-900 z-10" />

                                {/* Spacer */}
                                <div className="hidden md:block md:w-1/2" />

                                {/* Card */}
                                <div className="ml-10 md:ml-0 md:w-1/2 md:px-6">
                                    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/40 transition-all">
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                            <div>
                                                <h3 className="text-white font-bold text-lg">{exp.title}</h3>
                                                <p className="text-blue-400 font-medium">{exp.company}</p>
                                            </div>
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium border ${typeColors[exp.type] ?? 'bg-slate-700 text-slate-300 border-slate-600'
                                                    }`}
                                            >
                                                {exp.type}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap gap-3 text-sm text-slate-400 mb-4">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {exp.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {exp.location}
                                            </span>
                                        </div>

                                        <ul className="space-y-1.5 mb-4">
                                            {exp.description.map((desc, i) => (
                                                <li key={i} className="text-slate-300 text-sm flex gap-2">
                                                    <span className="text-blue-500 mt-1 flex-shrink-0">▸</span>
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-0.5 bg-blue-900/30 text-blue-300 border border-blue-800/50 rounded-full text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
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

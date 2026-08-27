import { projects } from '../data/portfolio';

const GhIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

const typeBg: Record<string, { badge: string; glow: string }> = {
    Web: { badge: 'bg-blue-900/40 text-blue-300 border-blue-500/30', glow: 'group-hover:shadow-blue-500/10' },
    Desktop: { badge: 'bg-purple-900/40 text-purple-300 border-purple-500/30', glow: 'group-hover:shadow-purple-500/10' },
    Mobile: { badge: 'bg-emerald-900/40 text-emerald-300 border-emerald-500/30', glow: 'group-hover:shadow-emerald-500/10' },
    ERP: { badge: 'bg-amber-900/40 text-amber-300 border-amber-500/30', glow: 'group-hover:shadow-amber-500/10' },
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative" style={{ background: 'linear-gradient(180deg,#0a0f1e 0%,#050b18 100%)' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-blue-400 glass border border-blue-500/20 mb-4">Projets</span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text">Réalisations</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project) => {
                        const style = typeBg[project.type] ?? { badge: 'bg-slate-700/50 text-slate-300 border-slate-600/30', glow: '' };
                        return (
                            <div key={project.name}
                                className={`group relative glass rounded-2xl p-6 flex flex-col border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${style.glow}`}>
                                {/* Top gradient line */}
                                <div className="absolute top-0 inset-x-0 h-px rounded-t-2xl" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)' }} />

                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-white font-bold text-base leading-tight">{project.name}</h3>
                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border flex-shrink-0 ml-2 ${style.badge}`}>
                                        {project.type}
                                    </span>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="px-2.5 py-0.5 bg-white/5 text-slate-300 rounded-full text-xs font-medium hover:bg-indigo-900/30 hover:text-indigo-300 transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 border-t border-white/5 pt-4">
                                    {project.github ? (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-xs font-medium">
                                            <GhIcon />Code source
                                        </a>
                                    ) : (
                                        <span className="flex items-center gap-1.5 text-slate-600 text-xs">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                            Privé
                                        </span>
                                    )}
                                    {'githubBack' in project && project.githubBack && (
                                        <a href={project.githubBack as string} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors text-xs font-medium">
                                            <GhIcon />Backend
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/dowesw?tab=repositories" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 glass glass-hover border border-white/10 text-slate-300 hover:text-white px-7 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5">
                        <GhIcon />
                        Voir tous mes dépôts GitHub
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

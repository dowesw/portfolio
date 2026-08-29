import { projects } from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';

const GhIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

const GlIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.845.904a.9.9 0 00-.863.556L.083 10.77a.9.9 0 00.324 1.043l11.593 8.388a.9.9 0 001.072 0l11.593-8.388a.9.9 0 00.324-1.043L20.018 1.46a.9.9 0 00-.863-.556h-3.386l1.26 3.893h2.072l.822 2.513-7.923 5.737-7.923-5.737.822-2.513h2.072L8.231.904H4.845zm3.38 0L7.01 4.797H4.938L3.877.904h4.348zm7.55 0h4.348l-1.061 3.893H16.99L15.775.904z" />
    </svg>
);

const typeBg: Record<string, { badge: string; glow: string }> = {
    Web: { badge: 'bg-blue-900/40 text-blue-300', glow: 'group-hover:shadow-blue-500/10' },
    Desktop: { badge: 'bg-purple-900/40 text-purple-300', glow: 'group-hover:shadow-purple-500/10' },
    Mobile: { badge: 'bg-emerald-900/40 text-emerald-300', glow: 'group-hover:shadow-emerald-500/10' },
    ERP: { badge: 'bg-amber-900/40 text-amber-300', glow: 'group-hover:shadow-amber-500/10' },
    API: { badge: 'bg-orange-900/40 text-orange-300', glow: 'group-hover:shadow-orange-500/10' },
};

export default function Projects() {
    const { t } = useLanguage();
    return (
        <section id="projects" className="py-24 relative" style={{ background: 'linear-gradient(180deg,#0a0f1e 0%,#050b18 100%)' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-blue-400 glass mb-4">{t.projects.badge}</span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-6">{t.projects.title}</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">Projets sélectionnés qui démontrent mon expertise en création de solutions robustes</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => {
                        const style = typeBg[project.type] ?? { badge: 'bg-slate-700/50 text-slate-300' };
                        return (
                            <div key={project.name}
                                className="relative bg-white/3 rounded-xl p-6 hover:bg-white/5 transition-colors group flex flex-col">

                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-white font-bold text-lg leading-tight">{project.name}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold flex-shrink-0 ml-2 ${style.badge}`}>
                                        {project.type}
                                    </span>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{t.projects.descriptions[project.name] ?? project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="px-2.5 py-1 bg-white/5 text-slate-400 rounded-md text-xs font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 flex-wrap pt-4">
                                    {project.github ? (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-xs font-medium"
                                            aria-label={`Voir le code GitHub du projet ${project.name}`}>
                                            <GhIcon />GitHub
                                        </a>
                                    ) : !('gitlab' in project && project.gitlab) ? (
                                        <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                            {t.projects.privateLabel}
                                        </span>
                                    ) : null}
                                    {'gitlab' in project && project.gitlab && (
                                        <a href={project.gitlab as string} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-slate-400 hover:text-orange-400 transition-colors text-xs font-medium"
                                            aria-label={`Voir le code GitLab du projet ${project.name}`}>
                                            <GlIcon />GitLab
                                        </a>
                                    )}
                                    {'githubBack' in project && project.githubBack && (
                                        <a href={project.githubBack as string} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-xs font-medium"
                                            aria-label={`Voir le backend du projet ${project.name}`}>
                                            <GhIcon />Backend
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-12">
                    <a href="https://github.com/dowesw?tab=repositories" target="_blank" rel="noopener noreferrer"
                        className="btn-premium glass glass-hover text-slate-300 hover:text-white px-6 sm:px-7 py-3 rounded-full font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2"
                        aria-label="Voir tous mes projets GitHub">
                        <GhIcon />
                        <span className="hidden sm:inline">{t.projects.githubAll}</span>
                        <span className="sm:hidden">GitHub</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    <a href="https://gitlab.com/dowesw" target="_blank" rel="noopener noreferrer"
                        className="btn-premium glass glass-hover text-slate-300 hover:text-orange-400 px-6 sm:px-7 py-3 rounded-full font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2"
                        aria-label="Voir tous mes projets GitLab">
                        <GlIcon />
                        <span className="hidden sm:inline">{t.projects.gitlabAll}</span>
                        <span className="sm:hidden">GitLab</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

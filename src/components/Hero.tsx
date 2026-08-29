import { useState, useEffect } from 'react';
import { profile } from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';

const GithubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);
const GitlabIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.49a.42.42 0 0 1 .11-.18.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51 1.22 3.78a.84.84 0 0 1-.3.94z" />
    </svg>
);
const LinkedinIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 24 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

export default function Hero() {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center" style={{ background: '#050b18' }}>
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '50px 50px' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left – Text */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-slate-300 mb-6 sm:mb-8 bg-white/5">
                            <span className="w-2 h-2 rounded-full bg-green-400" />
                            <span className="hidden sm:inline">{t.hero.available} · 🇨🇦 {profile.location}</span>
                            <span className="sm:hidden">{t.hero.available}</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
                            <span className="gradient-text">{profile.name}</span>
                            <br />
                            <span className="text-slate-200 text-3xl sm:text-4xl font-medium">{t.hero.title}</span>
                        </h1>

                        {/* Description */}
                        <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            {t.hero.description}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                            <a href="#contact"
                                className="btn-premium btn-gradient btn-gradient-enhanced text-white px-8 py-3 rounded-lg font-semibold text-sm sm:text-base shadow-lg shadow-indigo-500/25"
                                aria-label={t.hero.contactAriaLabel}>
                                {t.hero.contactBtn}
                            </a>
                            <a href="#projects"
                                className="px-8 py-3 rounded-lg font-semibold text-sm sm:text-base text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                                aria-label={t.hero.projectsAriaLabel}>
                                {t.hero.projectsBtn}
                            </a>
                        </div>

                        {/* Social */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {[
                                { href: profile.github, icon: <GithubIcon />, label: 'GitHub', ariaLabel: t.hero.githubAriaLabel },
                                { href: profile.gitlab, icon: <GitlabIcon />, label: 'GitLab', ariaLabel: t.hero.gitlabAriaLabel },
                                { href: profile.linkedin, icon: <LinkedinIcon />, label: 'LinkedIn', ariaLabel: t.hero.linkedinAriaLabel },
                            ].map(s => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className="p-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                                    aria-label={s.ariaLabel}
                                    title={s.label}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right – Photo */}
                    <div className="flex-shrink-0 flex justify-center lg:justify-end order-first lg:order-last">
                        <div className="avatar-ring">
                            <img
                                src={profile.avatar}
                                alt={profile.name}
                                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover"
                            />
                        </div>
                    </div>

                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 sm:gap-12 mt-16 sm:mt-20 pt-16 sm:pt-20 accent-line border-t border-white/5">
                    <div>
                        <div className="text-4xl sm:text-5xl font-black stat-gradient-1 mb-2">10+</div>
                        <p className="text-slate-400 text-sm font-medium">{t.hero.statsYearsLabel}</p>
                    </div>
                    <div>
                        <div className="text-4xl sm:text-5xl font-black stat-gradient-2 mb-2">50+</div>
                        <p className="text-slate-400 text-sm font-medium">{t.hero.statsProjectsLabel}</p>
                    </div>
                    <div>
                        <div className="text-4xl sm:text-5xl font-black stat-gradient-3 mb-2">99%</div>
                        <p className="text-slate-400 text-sm font-medium">{t.hero.statsSatisfactionLabel}</p>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="animate-bounce">
                    <svg className="w-5 h-5 text-slate-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
}

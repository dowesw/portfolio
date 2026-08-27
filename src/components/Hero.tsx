import { profile } from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';

const GithubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);
const LinkedinIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

export default function Hero() {
    const { t } = useLanguage();
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(99,102,241,0.15) 0%, transparent 60%), #050b18' }}>
            {/* Animated blobs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
            <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-600/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left – Text */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/20 text-sm text-indigo-300 mb-8">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            {t.hero.available} · 🇨🇦 {profile.location}
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-none tracking-tight">
                            <span className="gradient-text">{profile.name.split(' ')[0]}</span>
                            <br />
                            <span className="text-white/90 text-4xl sm:text-5xl lg:text-6xl font-bold">{profile.name.split(' ').slice(1).join(' ')}</span>
                        </h1>

                        <p className="text-xl sm:text-2xl font-semibold mb-2" style={{ background: 'linear-gradient(90deg,#a5b4fc,#60a5fa,#c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {t.hero.title}
                        </p>
                        <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            {t.hero.subtitle}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                            <a href="#contact"
                                className="relative px-8 py-3.5 rounded-full font-bold text-white overflow-hidden group transition-all hover:-translate-y-1"
                                style={{ background: 'linear-gradient(135deg, #6366f1, #3b82f6)' }}>
                                <span className="relative z-10">{t.hero.contactBtn}</span>
                                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg,#4f46e5,#2563eb)' }} />
                            </a>
                            <a href="#projects"
                                className="px-8 py-3.5 rounded-full font-bold text-slate-300 hover:text-white glass glass-hover transition-all hover:-translate-y-1">
                                {t.hero.projectsBtn}
                            </a>
                            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-slate-400 hover:text-white border border-white/10 hover:border-white/30 transition-all hover:-translate-y-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                {t.hero.downloadCV}
                            </a>
                        </div>

                        {/* Social */}
                        <div className="flex justify-center lg:justify-start gap-4">
                            {[
                                { href: profile.github, icon: <GithubIcon />, label: 'GitHub', color: 'hover:text-white hover:border-white/30' },
                                { href: profile.linkedin, icon: <LinkedinIcon />, label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400/30' },
                                { href: profile.malt, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.4l8.1 4.65v9.9L12 21.6l-8.1-4.65V7.05L12 2.4z" /></svg>, label: 'Malt', color: 'hover:text-orange-400 hover:border-orange-400/30' },
                            ].map(s => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-slate-400 text-sm font-medium transition-all ${s.color}`}>
                                    {s.icon}{s.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right – Photo */}
                    <div className="flex-shrink-0 flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Outer spinning ring */}
                            <div className="absolute -inset-4 rounded-full animate-spin-slow opacity-60"
                                style={{ background: 'conic-gradient(from 0deg, #6366f1, #3b82f6, #a855f7, #f472b6, #6366f1)', mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), white calc(100% - 2px))' }} />
                            {/* Middle glow */}
                            <div className="absolute -inset-2 rounded-full animate-glow opacity-50"
                                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)' }} />
                            {/* Avatar */}
                            <div className="avatar-ring relative">
                                <img
                                    src={profile.avatar}
                                    alt={profile.name}
                                    className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover"
                                />
                            </div>
                            {/* Badge CGI */}
                            <div className="absolute -bottom-3 -right-3 glass border border-white/10 rounded-2xl px-4 py-2.5 text-sm shadow-xl">
                                <p className="text-white font-bold">CGI</p>
                                <p className="text-slate-400 text-xs">{t.hero.cgiRole}</p>
                            </div>
                            {/* Badge XP */}
                            <div className="absolute -top-3 -left-3 glass border border-indigo-500/30 rounded-2xl px-4 py-2.5 text-sm shadow-xl">
                                <p className="gradient-text font-black text-2xl leading-none">10+</p>
                                <p className="text-slate-400 text-xs">{t.hero.yearsExp}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
}

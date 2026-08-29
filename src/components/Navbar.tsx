import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { profile } from '../data/portfolio';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const { lang, setLang, t } = useLanguage();

    const links = [
        { href: '#about', label: t.nav.about },
        { href: '#services', label: t.nav.services },
        { href: '#skills', label: t.nav.skills },
        { href: '#experience', label: t.nav.experience },
        { href: '#projects', label: t.nav.projects },
        { href: '#contact', label: t.nav.contact },
    ];

    // IntersectionObserver pour détecter la section active
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm" style={{ background: 'rgba(5, 11, 24, 0.7)' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-3 rounded-lg hover:opacity-80 transition-opacity" aria-label={t.nav.homeAriaLabel}>
                        <div className="avatar-ring w-8 h-8">
                            <img src="/portfolio/avatar.jpg" alt={profile.name} className="w-full h-full rounded-full object-cover" loading="lazy" />
                        </div>
                        <span className="gradient-text font-bold text-sm">{profile.name}</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => {
                            const sectionId = link.href.substring(1);
                            const isActive = activeSection === sectionId;
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors duration-200 ${isActive
                                            ? 'text-white'
                                            : 'text-slate-400 hover:text-white'
                                        }`}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
                            aria-label={lang === 'fr' ? t.nav.languageAriaLabelSwitch : t.nav.switchToFrench}
                            title={lang === 'fr' ? t.nav.english : t.nav.french}
                        >
                            {lang === 'fr' ? 'EN' : 'FR'}
                        </button>

                        <a href={profile.malt} target="_blank" rel="noopener noreferrer"
                            className="hidden sm:inline-block btn-premium btn-gradient text-white px-5 py-2 rounded-lg text-sm font-semibold"
                            aria-label={t.nav.maltAriaLabel}>
                            {t.nav.available}
                        </a>

                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
                            aria-label={open ? t.nav.menuCloseAriaLabel : t.nav.menuOpenAriaLabel}
                            aria-expanded={open}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {open
                                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden pb-4 space-y-2 animate-slide-in-down">
                        {links.map((link) => {
                            const sectionId = link.href.substring(1);
                            const isActive = activeSection === sectionId;
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`block px-4 py-2.5 text-sm font-medium transition-colors ${isActive
                                            ? 'text-white'
                                            : 'text-slate-400 hover:text-white'
                                        }`}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                        <a href={profile.malt} target="_blank" rel="noopener noreferrer"
                            className="block text-center btn-premium btn-gradient text-white py-2 rounded-lg text-sm font-semibold mt-3"
                            aria-label={t.nav.maltAriaLabel}>
                            {t.nav.availableMobile}
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}

import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { profile } from '../data/portfolio';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { lang, setLang, t } = useLanguage();

    const links = [
        { href: '#about', label: t.nav.about },
        { href: '#services', label: t.nav.services },
        { href: '#skills', label: t.nav.skills },
        { href: '#experience', label: t.nav.experience },
        { href: '#projects', label: t.nav.projects },
        { href: '#contact', label: t.nav.contact },
    ];

    return (
        <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-white/[0.06]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#hero" className="flex items-center gap-2.5">
                        <div className="avatar-ring w-9 h-9">
                            <img src="/portfolio/avatar.jpg" alt="" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <span className="gradient-text font-bold text-sm">{profile.name.split(' ')[0]} <span className="text-white/70">{profile.name.split(' ').slice(1).join(' ')}</span></span>
                    </a>
                    <div className="hidden md:flex items-center gap-1">
                        {links.map((link) => (
                            <a key={link.href} href={link.href} className="px-4 py-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all text-sm font-medium">
                                {link.label}
                            </a>
                        ))}
                        <button
                            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                            className="ml-1 px-3 py-1.5 rounded-full glass border border-white/10 text-slate-400 hover:text-white hover:border-white/25 transition-all text-xs font-bold tracking-wider"
                            aria-label="Switch language"
                        >
                            {lang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
                        </button>
                        <a href={profile.malt} target="_blank" rel="noopener noreferrer"
                            className="ml-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20">
                            {t.nav.available}
                        </a>
                    </div>
                    <div className="flex items-center gap-2 md:hidden">
                        <button
                            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                            className="px-2.5 py-1.5 rounded-full glass border border-white/10 text-slate-400 text-xs font-bold"
                            aria-label="Switch language"
                        >
                            {lang === 'fr' ? '🇬🇧' : '🇫🇷'}
                        </button>
                        <button onClick={() => setOpen(!open)} className="p-2 text-slate-400 hover:text-white" aria-label="Menu">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {open
                                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                    </div>
                </div>
                {open && (
                    <div className="md:hidden pb-4 space-y-1 border-t border-white/[0.06] pt-3">
                        {links.map((link) => (
                            <a key={link.href} href={link.href} onClick={() => setOpen(false)}
                                className="block px-4 py-2.5 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg text-sm">
                                {link.label}
                            </a>
                        ))}
                        <a href={profile.malt} target="_blank" rel="noopener noreferrer"
                            className="block mx-4 mt-2 text-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2 rounded-full text-sm font-semibold">
                            {t.nav.availableMobile}
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}

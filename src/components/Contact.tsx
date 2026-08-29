import { profile } from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();
    return (
        <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#050b18 0%,#0d0a1a 100%)' }}>
            {/* Purple glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-lg text-xs font-bold tracking-widest uppercase text-slate-400 bg-white/5 mb-4">{t.contact.badge}</span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-6">{t.contact.title}</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">{t.contact.subtitle}</p>
                </div>

                {/* Main CTA section */}
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
                    {/* Left side - Why work with me */}
                    <div>
                        <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                            {t.contact.whyWorkWithMe}
                        </h3>
                        <div className="space-y-3 sm:space-y-4">
                            <div>
                                <p className="text-slate-300 font-semibold text-sm mb-1">🎯 {t.contact.measurableResults}</p>
                                <p className="text-slate-400 text-sm">{t.contact.measurableResultsDesc}</p>
                            </div>
                            <div>
                                <p className="text-slate-300 font-semibold text-sm mb-1">⚡ {t.contact.fastDelivery}</p>
                                <p className="text-slate-400 text-sm">{t.contact.fastDeliveryDesc}</p>
                            </div>
                            <div>
                                <p className="text-slate-300 font-semibold text-sm mb-1">🤝 {t.contact.transparentCollaboration}</p>
                                <p className="text-slate-400 text-sm">{t.contact.transparentCollaborationDesc}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Contact card */}
                    <div className="bg-white/3 rounded-xl p-6">
                        <h3 className="text-white font-bold text-lg mb-4">{t.contact.title}</h3>
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="avatar-ring w-16 h-16">
                                <img src={profile.avatar} alt={profile.name} className="w-full h-full rounded-full object-cover" loading="lazy" />
                            </div>
                            <div>
                                <p className="text-white font-bold">{profile.name}</p>
                                <p className="gradient-text-blue font-medium text-sm">{t.hero.title}</p>
                                <p className="text-slate-400 text-xs mt-1 flex items-center gap-1 justify-center">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    {t.contact.availableStatus}
                                </p>
                            </div>
                            <a href={`mailto:${profile.email}`}
                                className="w-full btn-premium btn-gradient text-white px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-indigo-500/30"
                                aria-label={`Envoyer un email à ${profile.email}`}>
                                {t.contact.writeBtn}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact cards */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {[
                        { href: `mailto:${profile.email}`, icon: '✉️', label: t.contact.emailLabel, value: profile.email, ariaLabel: `Envoyer un email à ${profile.email}` },
                        { href: `tel:${profile.phone}`, icon: '📞', label: t.contact.phoneLabel, value: profile.phone, ariaLabel: `Appeler le ${profile.phone}` },
                    ].map((item) => (
                        <a key={item.label} href={item.href}
                            className="flex items-center gap-4 bg-white/3 rounded-xl p-5 transition-colors hover:bg-white/5"
                            aria-label={item.ariaLabel}>
                            <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                            <div>
                                <p className="text-slate-400 text-xs">{item.label}</p>
                                <p className="text-white font-medium text-sm">{item.value}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Social network */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                        { href: profile.github, label: 'GitHub', emoji: '🐙', sub: t.contact.github, ariaLabel: 'Voir mon profil GitHub', color: 'hover:text-white' },
                        { href: profile.gitlab, label: 'GitLab', emoji: '🦊', sub: t.contact.gitlab, ariaLabel: 'Voir mon profil GitLab', color: 'hover:text-orange-400' },
                        { href: profile.linkedin, label: 'LinkedIn', emoji: '💼', sub: t.contact.linkedin, ariaLabel: 'Connecté sur LinkedIn', color: 'hover:text-blue-400' },
                        { href: profile.malt, label: 'Malt', emoji: '🏆', sub: t.contact.malt, ariaLabel: t.contact.maltAriaLabel, color: 'hover:text-amber-400' },
                    ].map((s) => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                            className={`flex flex-col items-center text-center bg-white/3 rounded-xl p-4 text-slate-400 transition-colors hover:bg-white/5 ${s.color}`}
                            aria-label={s.ariaLabel}
                            title={s.label}>
                            <span className="text-2xl mb-1" aria-hidden="true">{s.emoji}</span>
                            <p className="text-xs sm:text-sm font-bold">{s.label}</p>
                            <p className="text-xs text-slate-500 hidden sm:block">{s.sub}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}


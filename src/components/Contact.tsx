import { profile } from '../data/portfolio';

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#050b18 0%,#0d0a1a 100%)' }}>
            {/* Purple glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-pink-400 glass border border-pink-500/20 mb-4">Contact</span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-4">Travaillons Ensemble</h2>
                    <p className="text-slate-400 max-w-md mx-auto">
                        Disponible pour des missions freelance, des contrats ou des postes à temps plein.
                    </p>
                </div>

                {/* Main CTA card */}
                <div className="glass rounded-3xl p-8 border border-white/5 mb-6" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.08) 100%)' }}>
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="avatar-ring w-20 h-20 flex-shrink-0">
                            <img src={profile.avatar} alt={profile.name} className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div className="text-center sm:text-left flex-1">
                            <p className="text-white font-bold text-xl">{profile.name}</p>
                            <p className="gradient-text-blue font-medium">{profile.title}</p>
                            <p className="text-slate-400 text-sm mt-1 flex items-center gap-2 justify-center sm:justify-start">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                Disponible pour nouvelles missions
                            </p>
                        </div>
                        <a href={`mailto:${profile.email}`}
                            className="flex-shrink-0 px-7 py-3 rounded-full font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30"
                            style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)' }}>
                            M'écrire
                        </a>
                    </div>
                </div>

                {/* Contact cards */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {[
                        { href: `mailto:${profile.email}`, icon: '✉️', label: 'Email', value: profile.email, color: 'hover:border-indigo-500/40' },
                        { href: `tel:${profile.phone}`, icon: '📞', label: 'Téléphone', value: profile.phone, color: 'hover:border-blue-500/40' },
                    ].map((item) => (
                        <a key={item.label} href={item.href}
                            className={`flex items-center gap-4 glass rounded-2xl p-5 border border-white/5 transition-all hover:-translate-y-0.5 ${item.color}`}>
                            <span className="text-2xl">{item.icon}</span>
                            <div>
                                <p className="text-slate-500 text-xs">{item.label}</p>
                                <p className="text-white font-medium text-sm">{item.value}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Social network */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                        { href: profile.github, label: 'GitHub', emoji: '🐙', sub: '@dowesw', color: 'hover:border-white/30 hover:text-white' },
                        { href: profile.gitlab, label: 'GitLab', emoji: '🦊', sub: '@dowesw', color: 'hover:border-orange-500/40 hover:text-orange-400' },
                        { href: profile.linkedin, label: 'LinkedIn', emoji: '💼', sub: 'Profil LinkedIn', color: 'hover:border-blue-500/40 hover:text-blue-400' },
                        { href: profile.malt, label: 'Malt', emoji: '🏆', sub: 'Profil Freelance', color: 'hover:border-amber-500/40 hover:text-amber-400' },
                    ].map((s) => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                            className={`flex flex-col items-center text-center glass rounded-2xl p-4 border border-white/5 text-slate-400 transition-all hover:-translate-y-0.5 ${s.color}`}>
                            <span className="text-2xl mb-1">{s.emoji}</span>
                            <p className="text-sm font-bold">{s.label}</p>
                            <p className="text-xs text-slate-600">{s.sub}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}


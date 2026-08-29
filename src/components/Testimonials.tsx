const testimonials = [
    {
        name: 'Gouchere Yves',
        role: 'Directeur Général',
        company: 'Lymytz',
        avatar: 'GY',
        color: 'from-indigo-600 to-blue-600',
        text: 'Guillaume a été un pilier de notre équipe technique pendant plus de 7 ans. Son expertise sur l\'ensemble du stack (Java, React, Android, PostgreSQL) et sa capacité à livrer des solutions robustes et scalables ont été déterminantes pour le succès de nos produits ERP et CRM.',
    },
    {
        name: 'Okeland Francis',
        role: 'Directeur Général',
        company: 'Télécom & Network Engineering (TNE)',
        avatar: 'OF',
        color: 'from-blue-600 to-cyan-600',
        text: 'Guillaume a réalisé la migration de notre logiciel de gestion académique Scolaris ERP vers le web avec une rigueur exemplaire. Sa maîtrise des technologies Java EE et sa capacité à livrer dans les délais en font un développeur sur lequel on peut compter.',
    },
    {
        name: 'Elisabet Bialungana Loureiro',
        role: 'Membre Fondateur',
        company: 'Motema',
        avatar: 'EB',
        color: 'from-purple-600 to-pink-600',
        text: 'Guillaume a développé Blossense, notre plateforme de gestion du recrutement, avec un niveau de qualité impressionnant. Son expertise en microservices, Spring Boot et React, combinée à sa rigueur sur les tests et le déploiement CI/CD, a dépassé nos attentes.',
    },
    {
        name: 'Mabou Alain',
        role: 'Responsable Académique',
        company: 'ISTM',
        avatar: 'MA',
        color: 'from-emerald-600 to-teal-600',
        text: 'Guillaume fait preuve d\'une grande autonomie et d\'un sens aigu de l\'organisation. Sa polyvalence technique, son aptitude à comprendre rapidement les besoins métier et à les traduire en solutions logicielles concrètes en font un développeur rare et précieux.',
    },
];

const Stars = () => (
    <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#0a0f1e 0%,#050b18 100%)' }}>
            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.04] rounded-full" style={{ background: 'radial-gradient(ellipse, #6366f1, transparent)' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-amber-400 glass mb-4">Témoignages</span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-6">Ils me font confiance</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                        Références de clients et partenaires avec lesquels j'ai travaillé sur des projets concrets.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {testimonials.map((t) => (
                        <div key={t.name}
                            className="bg-white/3 rounded-xl p-8 hover:bg-white/5 transition-colors relative">

                            <Stars />

                            <blockquote className="text-slate-300 text-sm leading-relaxed mb-6">
                                "{t.text}"
                            </blockquote>

                            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`} aria-label={t.name}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">{t.name}</p>
                                    <p className="text-slate-400 text-xs">{t.role} · {t.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

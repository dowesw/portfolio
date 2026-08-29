const Stars = () => (
    <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

import { useLanguage } from '../i18n/LanguageContext';

export default function Testimonials() {
    const { t } = useLanguage();
    return (
        <section id="testimonials" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#0a0f1e 0%,#050b18 100%)' }}>
            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.04] rounded-full" style={{ background: 'radial-gradient(ellipse, #6366f1, transparent)' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-amber-400 glass mb-4">{t.testimonials.badge}</span>
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-6">{t.testimonials.title}</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                        {t.testimonials.subtitle}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {t.testimonials.items.map((testimonial) => (
                        <div key={testimonial.name}
                            className="bg-white/3 rounded-xl p-8 hover:bg-white/5 transition-colors relative">

                            <Stars />

                            <blockquote className="text-slate-300 text-sm leading-relaxed mb-6">
                                "{testimonial.text}"
                            </blockquote>

                            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`} aria-label={testimonial.name}>
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">{testimonial.name}</p>
                                    <p className="text-slate-400 text-xs">{testimonial.role} · {testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { profile } from '../data/portfolio';

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900"
        >
            {/* Background grid */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Avatar */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-2xl shadow-blue-500/30"
                        />
                        <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900 block" title="Disponible" />
                    </div>
                </div>

                {/* Badge */}
                <span className="inline-block px-4 py-1.5 bg-blue-900/50 border border-blue-700/50 text-blue-300 rounded-full text-sm font-medium mb-6">
                    🇨🇦 {profile.location}
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                    {profile.name}
                </h1>
                <p className="text-xl sm:text-2xl text-blue-400 font-semibold mb-3">
                    {profile.title}
                </p>
                <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
                    {profile.subtitle}
                </p>

                {/* CTA buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <a
                        href="#contact"
                        className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
                    >
                        Me contacter
                    </a>
                    <a
                        href="#projects"
                        className="border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-blue-400 px-8 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5"
                    >
                        Voir mes projets
                    </a>
                </div>

                {/* Social links */}
                <div className="flex justify-center gap-6">
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>
                    <a
                        href={profile.malt}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors text-sm"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.4l8.1 4.65v9.9L12 21.6l-8.1-4.65V7.05L12 2.4z" />
                        </svg>
                        Malt
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
}

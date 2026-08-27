import { profile } from '../data/portfolio';

const links = [
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#experience', label: 'Expériences' },
    { href: '#projects', label: 'Projets' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#hero" className="text-blue-400 font-bold text-lg hover:text-blue-300 transition-colors">
                        {profile.name.split(' ')[0]} <span className="text-slate-300">{profile.name.split(' ').slice(1).join(' ')}</span>
                    </a>
                    <div className="hidden md:flex items-center gap-6">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={profile.malt}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
                        >
                            Disponible
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

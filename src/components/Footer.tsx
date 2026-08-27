import { profile } from '../data/portfolio';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="py-8 bg-slate-900 border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-slate-500 text-sm">
                    © {year} {profile.name} — Conçu & développé avec React + Vite + Tailwind CSS
                </p>
            </div>
        </footer>
    );
}

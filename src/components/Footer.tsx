import { profile } from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();
    const year = new Date().getFullYear();
    return (
        <footer className="py-10" style={{ background: '#020609' }}>
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="avatar-ring w-8 h-8">
                        <img src={profile.avatar} alt={profile.name} className="w-full h-full rounded-full object-cover" loading="lazy" />
                    </div>
                    <span className="gradient-text text-sm font-bold">{profile.name}</span>
                </div>
                <p className="text-slate-500 text-xs text-center">
                    &copy; {year} &middot; {t.footer.madeWith}
                </p>
                <div className="flex gap-3">
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-xs px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10" aria-label="GitHub" title="GitHub">GitHub</a>
                    <a href={profile.gitlab} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-400 transition-colors text-xs px-4 py-2 rounded-lg bg-white/5 hover:bg-orange-500/10" aria-label="GitLab" title="GitLab">GitLab</a>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors text-xs px-4 py-2 rounded-lg bg-white/5 hover:bg-blue-500/10" aria-label="LinkedIn" title="LinkedIn">LinkedIn</a>
                    <a href={profile.malt} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors text-xs px-4 py-2 rounded-lg bg-white/5 hover:bg-amber-500/10" aria-label="Malt" title="Malt">Malt</a>
                </div>
            </div>
        </footer>
    );
}

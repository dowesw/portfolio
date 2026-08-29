import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import { translations, type Lang, type T } from './translations';

type LanguageContextType = {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: T;
};

const LanguageContext = createContext<LanguageContextType>({
    lang: 'fr',
    setLang: () => { },
    t: translations.fr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>(() => {
        try { return (localStorage.getItem('portfolio_lang') as Lang) ?? 'fr'; }
        catch { return 'fr'; }
    });

    function setLang(l: Lang) {
        setLangState(l);
        try { localStorage.setItem('portfolio_lang', l); } catch { }
        document.documentElement.lang = l;
    }

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const value = useMemo(() => ({
        lang,
        setLang,
        t: translations[lang],
    }), [lang]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

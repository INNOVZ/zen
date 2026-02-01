"use client";

import { useTranslation, LANGUAGES, LanguageCode } from "@/contexts/I18nContext";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ collapsed = false }: { collapsed?: boolean }) {
    const { language, setLanguage } = useTranslation();

    if (collapsed) {
        return (
            <button
                onClick={() => {
                    // Cycle languages if collapsed
                    const langKeys = Object.keys(LANGUAGES) as LanguageCode[];
                    const currentIndex = langKeys.indexOf(language);
                    const nextIndex = (currentIndex + 1) % langKeys.length;
                    setLanguage(langKeys[nextIndex]);
                }}
                className="flex items-center justify-center w-full p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title={LANGUAGES[language].label}
            >
                <span className="text-xl">{LANGUAGES[language].icon}</span>
            </button>
        );
    }

    return (
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg border border-gray-200 bg-white shadow-sm">
            <Globe size={16} className="text-gray-500" />
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as LanguageCode)}
                className="bg-transparent text-sm font-medium text-gray-700 outline-none cursor-pointer w-full"
            >
                {Object.entries(LANGUAGES).map(([code, { label, icon }]) => (
                    <option key={code} value={code}>
                        {icon} {label}
                    </option>
                ))}
            </select>
        </div>
    );
}

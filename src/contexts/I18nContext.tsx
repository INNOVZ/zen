"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Import translation files
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import de from "@/locales/de.json";
import it from "@/locales/it.json";
import ar from "@/locales/ar.json";

// Define languages and their properties
export const LANGUAGES = {
    en: { label: "English", dir: "ltr", icon: "🇬🇧", translation: en },
    es: { label: "Español", dir: "ltr", icon: "🇪🇸", translation: es },
    de: { label: "Deutsch", dir: "ltr", icon: "🇩🇪", translation: de },
    it: { label: "Italiano", dir: "ltr", icon: "🇮🇹", translation: it },
    ar: { label: "العربية", dir: "ltr", icon: "🇸🇦", translation: ar },
};

export type LanguageCode = keyof typeof LANGUAGES;

type I18nContextType = {
    language: LanguageCode;
    setLanguage: (lang: LanguageCode) => void;
    t: (key: string, params?: Record<string, string>) => string;
    dir: "ltr" | "rtl";
};

type TranslationNode = string | { [key: string]: TranslationNode };

function resolveTranslation(
    translation: unknown,
    keys: string[]
): TranslationNode | undefined {
    let current = translation as TranslationNode;

    for (const key of keys) {
        if (typeof current !== "object" || current === null || !(key in current)) {
            return undefined;
        }
        current = current[key];
    }

    return current;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
    // Default to 'en' but try to read from local storage
    const [language, setLanguageState] = useState<LanguageCode>("en");
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem("dashboard_language");
            if (stored && Object.keys(LANGUAGES).includes(stored)) {
                setLanguageState(stored as LanguageCode);
            } else {
                // Optional: Detect browser language
                const browserLang = navigator.language.split("-")[0];
                if (Object.keys(LANGUAGES).includes(browserLang)) {
                    setLanguageState(browserLang as LanguageCode);
                }
            }
        } catch (e) {
            console.error("Failed to load language preference", e);
        }
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            try {
                localStorage.setItem("dashboard_language", language);
                // Update document direction
                document.documentElement.dir = LANGUAGES[language].dir;
                document.documentElement.lang = language;
            } catch (e) {
                console.error("Failed to save language preference", e);
            }
        }
    }, [language, isInitialized]);

    const setLanguage = (lang: LanguageCode) => {
        setLanguageState(lang);
    };

    const t = (key: string, params?: Record<string, string>): string => {
        const keys = key.split(".");
        const value =
            resolveTranslation(LANGUAGES[language].translation, keys) ??
            resolveTranslation(LANGUAGES.en.translation, keys);

        if (typeof value !== "string") return key;

        // Interpolation {param}
        if (params) {
            return value.replace(/{(\w+)}/g, (_, k) => params[k] || `{${k}}`);
        }

        return value;
    };

    if (!isInitialized) return null; // Avoid hydration mismatch

    return (
        <I18nContext.Provider
            value={{
                language,
                setLanguage,
                t,
                dir: LANGUAGES[language].dir as "ltr" | "rtl",
            }}
        >
            {children}
        </I18nContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error("useTranslation must be used within an I18nProvider");
    }
    return context;
}

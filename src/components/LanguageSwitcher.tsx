"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation, LANGUAGES, LanguageCode } from "@/contexts/I18nContext";
import { Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function LanguageSwitcher({ collapsed = false }: { collapsed?: boolean }) {
    const { language, setLanguage } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={containerRef}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute bottom-full mb-2 ${collapsed ? "left-0 origin-bottom-left" : "left-0 w-full origin-bottom"} bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-[1000]`}
                        style={{ minWidth: collapsed ? "180px" : "100%" }}
                    >
                        <div className="p-1 space-y-0.5">
                            {Object.entries(LANGUAGES).map(([code, { label, icon }]) => (
                                <button
                                    key={code}
                                    onClick={() => {
                                        setLanguage(code as LanguageCode);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${language === code
                                            ? "bg-blue-50 text-blue-600 font-medium"
                                            : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    <span className="text-lg leading-none">{icon}</span>
                                    <span>{label}</span>
                                    {language === code && <Check size={14} className="ml-auto" />}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 ${collapsed
                        ? "justify-center w-full aspect-square"
                        : "w-full border border-gray-200 bg-white"
                    } ${isOpen ? "ring-2 ring-blue-100 border-blue-200" : ""}`}
                title="Select Language"
            >
                <Globe size={collapsed ? 20 : 18} className="text-[#5d7dde]" />
                {!collapsed && (
                    <div className="flex flex-1 items-center justify-between min-w-0">
                        <span className="text-sm font-medium text-gray-700 truncate">
                            {LANGUAGES[language].label}
                        </span>
                        <div className="flex items-center text-xs text-muted-foreground whitespace-nowrap opacity-60">
                            {LANGUAGES[language].icon}
                        </div>
                    </div>
                )}
            </button>
        </div>
    );
}

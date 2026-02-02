"use client";

import { Button } from "@/components/ui/button";
import {
    Zap,
    Settings,
    MessageSquarePlus,
    // Database,
    ExternalLink,
    Plus
} from "lucide-react";
// import { motion } from "framer-motion";

import { LucideIcon } from "lucide-react";

import { useTranslation } from "@/contexts/I18nContext";

interface QuickActionProps {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    primary?: boolean;
}

function QuickAction({ label, icon: Icon, onClick, primary }: QuickActionProps) {
    return (
        <Button
            variant={primary ? "default" : "outline"}
            onClick={onClick}
            className={`h-auto py-4 px-6 flex flex-col items-center gap-3 rounded-lg transition-all duration-300 ${primary
                ? "bg-indigo-900 hover:bg-indigo-900 shadow-lg shadow-indigo-200"
                : "bg-white hover:bg-indigo-50 border-none shadow-sm"
                }`}
        >
            <div className={`p-3 rounded-xl ${primary ? "bg-white/20" : "bg-indigo-50"}`}>
                <Icon className={`h-5 w-5 ${primary ? "text-white" : "text-indigo-900"}`} />
            </div>
            <span className={`text-sm font-semibold ${primary ? "text-white" : "text-gray-700"}`}>{label}</span>
        </Button>
    );
}

interface ModernQuickActionsProps {
    onTrainClick: () => void;
    onCustomizeClick: () => void;
    onSettingsClick?: () => void;
}

export function ModernQuickActions({
    onTrainClick,
    onCustomizeClick,
    // onSettingsClick,
}: ModernQuickActionsProps) {
    const { t } = useTranslation();

    return (
        <div className="mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Zap className="h-5 w-5 text-indigo-900" />
                {t("dashboard.quick_actions")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                <QuickAction
                    label={t("dashboard.train_agent")}
                    icon={Plus}
                    onClick={onTrainClick}
                    primary
                />
                <QuickAction
                    label={t("dashboard.customize_ui")}
                    icon={Settings}
                    onClick={onCustomizeClick}
                />
                <QuickAction
                    label={t("dashboard.test_chat")}
                    icon={MessageSquarePlus}
                    onClick={onCustomizeClick}
                />
                <QuickAction
                    label={t("dashboard.view_site")}
                    icon={ExternalLink}
                    onClick={() => window.open('/', '_blank')}
                />
            </div>
        </div>
    );
}

"use client";

import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { LucideIcon, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export type ConnectionStatus = 'connected' | 'disconnected' | 'warning' | 'not-configured';

interface IntegrationCardProps {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor: string;
    iconBgColor: string;
    hoverBorderColor: string;
    connectionStatus?: ConnectionStatus;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    children?: React.ReactNode;
}


export const IntegrationCard = memo<IntegrationCardProps>(({
    id,
    title,
    description,
    icon: Icon,
    iconColor,
    iconBgColor,
    hoverBorderColor,
    connectionStatus = 'not-configured',
    isOpen,
    onOpenChange,
    children,
}) => {
    const getStatusBadge = () => {
        switch (connectionStatus) {
            case 'connected':
                return (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Connected
                    </Badge>
                );
            case 'disconnected':
                return (
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        <XCircle className="h-3 w-3 mr-1" />
                        Disconnected
                    </Badge>
                );
            case 'warning':
                return (
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Warning
                    </Badge>
                );
            case 'not-configured':
            default:
                return (
                    <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-200">
                        Not Configured
                    </Badge>
                );
        }
    };

    return (
        <>
            <div
                className={`border rounded-lg p-4 hover:${hoverBorderColor} transition-colors`}
                role="region"
                aria-labelledby={`${id}-heading`}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                        <div className={`w-10 h-10 ${iconBgColor} rounded-lg flex items-center justify-center shrink-0`}>
                            <Icon className={`h-5 w-5 ${iconColor}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 id={`${id}-heading`} className="font-semibold text-sm">
                                {title}
                            </h3>
                            <p className="text-xs text-gray-500 truncate">{description}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 ml-2">
                        {getStatusBadge()}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onOpenChange(true)}
                            aria-label={connectionStatus === 'connected' ? `Edit ${title}` : `Configure ${title}`}
                        >
                            {connectionStatus === 'connected' ? 'Edit' : 'Configure'}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Configuration Modal */}
            <Dialog open={isOpen} onOpenChange={onOpenChange}>
                <DialogContent className="sm:max-w-[425px] md:max-w-2xl lg:max-w-[60vw] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <div className={`w-10 h-10 ${iconBgColor} rounded-lg flex items-center justify-center`}>
                                <Icon className={`h-5 w-5 ${iconColor}`} />
                            </div>
                            <div>
                                <DialogTitle>{title} Configuration</DialogTitle>
                                <DialogDescription>{description}</DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>
                    <div className="mt-4">
                        {children}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
});

IntegrationCard.displayName = 'IntegrationCard';

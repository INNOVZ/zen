import { useState, useEffect, useCallback } from 'react';
import { organizationApi, type UpdateOrganizationRequest } from '@/app/api/routes';
import { toast } from 'sonner';

interface OrganizationInfo {
    user: {
        email: string;
    };
    organization: {
        name: string;
        email: string;
        plan_id: string | null;
        contact_phone?: string;
        business_type?: string;
    };
}

/**
 * Custom hook for managing organization information
 * Handles loading, updating, and state management for organization data
 */
export const useOrganizationInfo = () => {
    const [organizationInfo, setOrganizationInfo] = useState<OrganizationInfo | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    const loadOrganizationInfo = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            const info = await organizationApi.getOrganizationInfo();
            setOrganizationInfo(info);
            return info;
        } catch (err) {
            const error = err instanceof Error ? err : new Error('Failed to load organization information');
            setError(error);
            console.error('Failed to load organization info:', err);
            toast.error('Failed to load organization information');
            throw error;
        } finally {
            setIsLoading(false);
        }
    }, []);

    const updateOrganization = useCallback(async (formData: UpdateOrganizationRequest) => {
        try {
            const response = await organizationApi.updateOrganization(formData);
            toast.success(response.message);

            // Reload organization info to get updated data
            const updatedInfo = await loadOrganizationInfo();
            return updatedInfo;
        } catch (err) {
            console.error('Failed to update organization:', err);
            toast.error('Failed to update organization. Please try again.');
            throw err;
        }
    }, [loadOrganizationInfo]);

    // Load organization info on mount
    useEffect(() => {
        let mounted = true;
        setIsMounted(true);

        const load = async () => {
            try {
                await loadOrganizationInfo();
            } catch (error) {
                if (mounted) {
                    console.error('Error loading organization info:', error);
                }
            }
        };

        load();

        return () => {
            mounted = false;
        };
    }, [loadOrganizationInfo]);

    return {
        organizationInfo,
        isLoading,
        isMounted,
        error,
        loadOrganizationInfo,
        updateOrganization,
    };
};

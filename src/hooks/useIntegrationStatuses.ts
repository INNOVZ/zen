import { useState, useEffect, useCallback } from 'react';
import { mcpApi, type IntegrationStatus } from '@/app/api/mcp';
import { whatsappApi } from '@/app/api/whatsapp';
import type { ConnectionStatus } from '@/components/dashboard/integrations/IntegrationCard';
import { INTEGRATION_IDS } from '@/constants/integrations';

interface IntegrationStatusMap {
    [key: string]: {
        status: ConnectionStatus;
        configured: boolean;
        enabled: boolean;
    };
}

/**
 * Custom hook for managing integration statuses
 * Fetches real connection status from backend APIs
 */
export const useIntegrationStatuses = () => {
    const [statuses, setStatuses] = useState<IntegrationStatusMap>({});
    const [isLoading, setIsLoading] = useState(true);

    const loadStatuses = useCallback(async () => {
        try {
            setIsLoading(true);

            // Fetch MCP integration statuses
            const mcpResponse = await mcpApi.getAllIntegrationStatuses();

            // Fetch WhatsApp status separately
            let whatsappStatus: ConnectionStatus = 'not-configured';
            let whatsappConfigured = false;
            let whatsappEnabled = false;

            try {
                const whatsappConfig = await whatsappApi.getConfig();
                if (whatsappConfig.success && whatsappConfig.config) {
                    whatsappConfigured = true;
                    whatsappEnabled = whatsappConfig.config.is_active ?? false;

                    // Determine status based on configuration
                    if (whatsappConfig.config.is_active) {
                        whatsappStatus = 'connected';
                    } else {
                        whatsappStatus = 'disconnected';
                    }
                }
            } catch (error) {
                console.log('WhatsApp not configured:', error);
            }

            // Build status map
            const statusMap: IntegrationStatusMap = {
                [INTEGRATION_IDS.WHATSAPP]: {
                    status: whatsappStatus,
                    configured: whatsappConfigured,
                    enabled: whatsappEnabled,
                },
            };

            // Process MCP integrations
            mcpResponse.statuses.forEach((integration: IntegrationStatus) => {
                let status: ConnectionStatus = 'not-configured';

                if (integration.configured) {
                    if (integration.enabled) {
                        status = 'connected';
                    } else {
                        status = 'disconnected';
                    }
                }

                // Map provider to integration ID
                if (integration.provider === 'google') {
                    statusMap[INTEGRATION_IDS.GOOGLE] = {
                        status,
                        configured: integration.configured,
                        enabled: integration.enabled,
                    };
                } else if (['hubspot', 'salesforce', 'pipedrive', 'zoho'].includes(integration.provider)) {
                    // CRM integrations - use the first configured one
                    if (!statusMap[INTEGRATION_IDS.CRM] || integration.configured) {
                        statusMap[INTEGRATION_IDS.CRM] = {
                            status,
                            configured: integration.configured,
                            enabled: integration.enabled,
                        };
                    }
                } else if (integration.provider === 'shopify') {
                    statusMap[INTEGRATION_IDS.SHOPIFY] = {
                        status,
                        configured: integration.configured,
                        enabled: integration.enabled,
                    };
                }
            });

            // Lead capture status (check if Google Sheets or CRM is configured)
            const googleConfigured = statusMap[INTEGRATION_IDS.GOOGLE]?.configured || false;
            const crmConfigured = statusMap[INTEGRATION_IDS.CRM]?.configured || false;

            statusMap[INTEGRATION_IDS.LEAD_CAPTURE] = {
                status: googleConfigured || crmConfigured ? 'connected' : 'not-configured',
                configured: googleConfigured || crmConfigured,
                enabled: googleConfigured || crmConfigured,
            };

            setStatuses(statusMap);
        } catch (error) {
            console.error('Failed to load integration statuses:', error);
            // Set default statuses on error
            setStatuses({
                [INTEGRATION_IDS.WHATSAPP]: { status: 'not-configured', configured: false, enabled: false },
                [INTEGRATION_IDS.GOOGLE]: { status: 'not-configured', configured: false, enabled: false },
                [INTEGRATION_IDS.CRM]: { status: 'not-configured', configured: false, enabled: false },
                [INTEGRATION_IDS.SHOPIFY]: { status: 'not-configured', configured: false, enabled: false },
                [INTEGRATION_IDS.LEAD_CAPTURE]: { status: 'not-configured', configured: false, enabled: false },
            });
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        loadStatuses();
    }, [loadStatuses]);

    return {
        statuses,
        isLoading,
        refresh: loadStatuses,
    };
};

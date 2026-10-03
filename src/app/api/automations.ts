import { fetchWithAuth } from "./auth";
import type {
  AutomationExecution,
  AutomationEntrypoint,
  AutomationEntrypointCreate,
  AutomationEntrypointInvocation,
  AutomationInvocationResult,
  ManualAutomationTrigger,
  OrganizationAutomation,
} from "./types/automation";

export const automationsApi = {
  async list(): Promise<OrganizationAutomation[]> {
    const response = (await fetchWithAuth("/api/automations")) as {
      automations: OrganizationAutomation[];
    };
    return response.automations;
  },

  async update(
    automationKey: string,
    changes: { enabled?: boolean; settings?: Record<string, unknown> }
  ): Promise<OrganizationAutomation> {
    return (await fetchWithAuth(
      `/api/automations/${encodeURIComponent(automationKey)}`,
      { method: "PATCH", body: JSON.stringify(changes) }
    )) as OrganizationAutomation;
  },

  async trigger(automationKey: string, payload: ManualAutomationTrigger) {
    return fetchWithAuth(
      `/api/automations/${encodeURIComponent(automationKey)}/trigger`,
      { method: "POST", body: JSON.stringify(payload) }
    );
  },

  async listExecutions(): Promise<AutomationExecution[]> {
    const response = (await fetchWithAuth(
      "/api/automations/executions?limit=50"
    )) as { executions: AutomationExecution[] };
    return response.executions;
  },

  async retry(executionId: string) {
    return fetchWithAuth(
      `/api/automations/executions/${encodeURIComponent(executionId)}/retry`,
      { method: "POST" }
    );
  },

  async listEntrypoints(): Promise<AutomationEntrypoint[]> {
    const response = (await fetchWithAuth("/api/automations/entrypoints")) as {
      entrypoints: AutomationEntrypoint[];
    };
    return response.entrypoints;
  },

  async createEntrypoint(
    payload: AutomationEntrypointCreate
  ): Promise<AutomationEntrypoint> {
    return (await fetchWithAuth("/api/automations/entrypoints", {
      method: "POST",
      body: JSON.stringify(payload),
    })) as AutomationEntrypoint;
  },

  async updateEntrypoint(
    entrypointKey: string,
    changes: Partial<AutomationEntrypointCreate>
  ): Promise<AutomationEntrypoint> {
    return (await fetchWithAuth(
      `/api/automations/entrypoints/${encodeURIComponent(entrypointKey)}`,
      { method: "PATCH", body: JSON.stringify(changes) }
    )) as AutomationEntrypoint;
  },

  async deleteEntrypoint(entrypointKey: string): Promise<void> {
    await fetchWithAuth(
      `/api/automations/entrypoints/${encodeURIComponent(entrypointKey)}`,
      { method: "DELETE" }
    );
  },

  async invokeEntrypoint(
    entrypointKey: string,
    payload: AutomationEntrypointInvocation
  ): Promise<AutomationInvocationResult> {
    return (await fetchWithAuth(
      `/api/automations/entrypoints/${encodeURIComponent(entrypointKey)}/invoke`,
      { method: "POST", body: JSON.stringify(payload) }
    )) as AutomationInvocationResult;
  },
};

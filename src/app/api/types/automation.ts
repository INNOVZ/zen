export type AutomationExecutionStatus =
  | "QUEUED"
  | "RUNNING"
  | "SUCCEEDED"
  | "PARTIAL"
  | "FAILED"
  | "TIMED_OUT";

export interface OrganizationAutomation {
  id: string;
  automation_key: string;
  enabled: boolean;
  workflow_key: string;
  workflow_version: number;
  allowed_capabilities: string[];
  capability_checks?: { name: string; available: boolean }[];
  settings: Record<string, unknown>;
  workflow_contract?: {
    trigger_type: "EVENT" | "ACTION" | "MANUAL";
    trigger_key: string;
    input_schema_version: number;
    input_schema: Record<string, unknown>;
  };
  updated_at: string;
}

export interface AutomationExecution {
  id: string;
  automation_key: string;
  workflow_key: string;
  workflow_version: number;
  status: AutomationExecutionStatus;
  provider_execution_id?: string | null;
  error_code?: string | null;
  retryable: boolean;
  created_at: string;
  completed_at?: string | null;
}

export interface ManualAutomationTrigger {
  schema_version: number;
  resource: { type: string; id: string };
  payload: Record<string, unknown>;
  idempotency_key: string;
}

export type AutomationEngineType = "N8N" | "TOOL" | "LANGGRAPH";
export type AutomationTriggerMode = "CTA" | "INTENT" | "BOTH";

export interface AutomationEntrypoint {
  id: string;
  entrypoint_key: string;
  display_name: string;
  description?: string | null;
  surface: "CHAT_WIDGET" | "DASHBOARD" | "API";
  trigger_mode: AutomationTriggerMode;
  cta_label?: string | null;
  cta_message?: string | null;
  intent_keys: string[];
  engine_type: AutomationEngineType;
  automation_key?: string | null;
  capability_name?: string | null;
  capability_version?: number | null;
  graph_key?: string | null;
  graph_version?: number | null;
  input_schema_version: number;
  input_schema: Record<string, unknown>;
  customer_invocable: boolean;
  requires_confirmation: boolean;
  enabled: boolean;
  sort_order: number;
}

export type AutomationEntrypointCreate = Omit<AutomationEntrypoint, "id">;

export interface AutomationEntrypointInvocation {
  input_schema_version: number;
  resource: { type: string; id: string };
  payload: Record<string, unknown>;
  idempotency_key: string;
  confirmation_granted: boolean;
  conversation_id?: string;
}

export interface AutomationInvocationResult {
  status: "ACCEPTED" | "COMPLETED" | "FAILED";
  engine_type: AutomationEngineType;
  event_id?: string;
  request_id: string;
  result?: Record<string, unknown>;
}

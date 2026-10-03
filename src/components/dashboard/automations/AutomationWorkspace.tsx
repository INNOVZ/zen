"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  Bot,
  ChevronRight,
  CircleAlert,
  Database,
  MoreHorizontal,
  Network,
  Play,
  Plus,
  ShieldCheck,
  Trash2,
  Webhook,
  Workflow,
  Wrench,
} from "lucide-react";
import { toast } from "sonner";

import { automationsApi } from "@/app/api/automations";
import type {
  AutomationEntrypoint,
  AutomationExecution,
  OrganizationAutomation,
} from "@/app/api/types/automation";
import { AutomationConnections } from "@/components/dashboard/automations/AutomationConnections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

const views = [
  { key: "overview", label: "Overview", href: "/dashboard/automations" },
  { key: "workflows", label: "Workflows", href: "/dashboard/automations/workflows" },
  { key: "connections", label: "Connections", href: "/dashboard/automations/connections" },
  { key: "capabilities", label: "Capabilities", href: "/dashboard/automations/capabilities" },
  { key: "entry-points", label: "Entry points", href: "/dashboard/automations/entry-points" },
  { key: "runs", label: "Runs", href: "/dashboard/automations/runs" },
] as const;

type ViewKey = (typeof views)[number]["key"];
const terminalFailure = new Set(["FAILED", "TIMED_OUT"]);

export default function AutomationWorkspace() {
  const pathname = usePathname() ?? "";
  const pathView = pathname.split("/").filter(Boolean).at(-1);
  const activeView: ViewKey = views.some((view) => view.key === pathView)
    ? (pathView as ViewKey)
    : "overview";
  const featureEnabled = process.env.NEXT_PUBLIC_AUTOMATION_ADMIN_ENABLED === "true";
  const [automations, setAutomations] = useState<OrganizationAutomation[]>([]);
  const [executions, setExecutions] = useState<AutomationExecution[]>([]);
  const [entrypoints, setEntrypoints] = useState<AutomationEntrypoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyKey, setBusyKey] = useState<string | null>(null);
  const [message, setMessage] = useState("Zaakiy automation connectivity test");
  const [settingsDrafts, setSettingsDrafts] = useState<Record<string, string>>({});
  const [entrypointDraft, setEntrypointDraft] = useState({
    automationKey: "",
    entrypointKey: "",
    displayName: "",
    ctaLabel: "",
    ctaMessage: "",
  });

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [nextAutomations, nextExecutions, nextEntrypoints] = await Promise.all([
        automationsApi.list(),
        automationsApi.listExecutions(),
        automationsApi.listEntrypoints(),
      ]);
      setAutomations(nextAutomations);
      setExecutions(nextExecutions);
      setEntrypoints(nextEntrypoints);
      setEntrypointDraft((current) => ({
        ...current,
        automationKey: current.automationKey || nextAutomations[0]?.automation_key || "",
      }));
      setSettingsDrafts(
        Object.fromEntries(
          nextAutomations.map((automation) => [
            automation.automation_key,
            JSON.stringify(automation.settings ?? {}, null, 2),
          ]),
        ),
      );
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to load automations");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!featureEnabled) return;
    const timer = window.setTimeout(() => void load(), 0);
    return () => window.clearTimeout(timer);
  }, [featureEnabled, load]);

  const setupCount = useMemo(
    () => automations.filter((automation) =>
      !automation.enabled || automation.capability_checks?.some((capability) => !capability.available),
    ).length,
    [automations],
  );

  const toggleAutomation = async (automation: OrganizationAutomation) => {
    setBusyKey(automation.automation_key);
    try {
      const updated = await automationsApi.update(automation.automation_key, {
        enabled: !automation.enabled,
      });
      setAutomations((current) => current.map((item) =>
        item.automation_key === updated.automation_key ? updated : item,
      ));
      toast.success(updated.enabled ? "Automation enabled" : "Automation disabled");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Update failed");
    } finally {
      setBusyKey(null);
    }
  };

  const saveSettings = async (automation: OrganizationAutomation) => {
    setBusyKey(automation.automation_key);
    try {
      const parsed = JSON.parse(settingsDrafts[automation.automation_key] || "{}") as unknown;
      if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") {
        throw new Error("Settings must be a JSON object");
      }
      const updated = await automationsApi.update(automation.automation_key, {
        settings: parsed as Record<string, unknown>,
      });
      setAutomations((current) => current.map((item) =>
        item.automation_key === updated.automation_key ? updated : item,
      ));
      toast.success("Automation settings saved");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Invalid settings");
    } finally {
      setBusyKey(null);
    }
  };

  const triggerAutomation = async (automation: OrganizationAutomation) => {
    setBusyKey(automation.automation_key);
    try {
      await automationsApi.trigger(automation.automation_key, {
        schema_version: 1,
        resource: { type: "system.test", id: crypto.randomUUID() },
        payload: { message },
        idempotency_key: `manual:${crypto.randomUUID()}`,
      });
      toast.success("Automation queued");
      await load();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Trigger failed");
    } finally {
      setBusyKey(null);
    }
  };

  const retryExecution = async (execution: AutomationExecution) => {
    setBusyKey(execution.id);
    try {
      await automationsApi.retry(execution.id);
      toast.success("Execution queued for retry");
      await load();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Retry failed");
    } finally {
      setBusyKey(null);
    }
  };

  const createEntrypoint = async () => {
    setBusyKey("new-entrypoint");
    try {
      const selected = automations.find((item) => item.automation_key === entrypointDraft.automationKey);
      if (!selected) throw new Error("Select an automation route");
      const contract = selected.workflow_contract;
      if (!contract || contract.trigger_type !== "ACTION") {
        throw new Error("Chat entry points require a registered ACTION workflow");
      }
      const required = Array.isArray(contract.input_schema.required)
        ? contract.input_schema.required
        : [];
      if (required.some((field) => field !== "message")) {
        throw new Error("Structured input must be collected before this workflow is invoked");
      }
      const created = await automationsApi.createEntrypoint({
        entrypoint_key: entrypointDraft.entrypointKey,
        display_name: entrypointDraft.displayName,
        description: null,
        surface: "CHAT_WIDGET",
        trigger_mode: "CTA",
        cta_label: entrypointDraft.ctaLabel,
        cta_message: entrypointDraft.ctaMessage,
        intent_keys: [],
        engine_type: "N8N",
        automation_key: entrypointDraft.automationKey,
        capability_name: null,
        capability_version: null,
        graph_key: null,
        graph_version: null,
        input_schema_version: contract.input_schema_version,
        input_schema: contract.input_schema,
        customer_invocable: true,
        requires_confirmation: true,
        enabled: false,
        sort_order: 100,
      });
      setEntrypoints((current) => [...current, created]);
      setEntrypointDraft((current) => ({
        automationKey: current.automationKey,
        entrypointKey: "",
        displayName: "",
        ctaLabel: "",
        ctaMessage: "",
      }));
      toast.success("Entry point created disabled for review");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to create entry point");
    } finally {
      setBusyKey(null);
    }
  };

  const toggleEntrypoint = async (entrypoint: AutomationEntrypoint) => {
    setBusyKey(entrypoint.entrypoint_key);
    try {
      const updated = await automationsApi.updateEntrypoint(entrypoint.entrypoint_key, {
        enabled: !entrypoint.enabled,
      });
      setEntrypoints((current) => current.map((item) =>
        item.entrypoint_key === updated.entrypoint_key ? updated : item,
      ));
      toast.success(updated.enabled ? "Entry point enabled" : "Entry point disabled");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to update entry point");
    } finally {
      setBusyKey(null);
    }
  };

  const deleteEntrypoint = async (entrypoint: AutomationEntrypoint) => {
    setBusyKey(entrypoint.entrypoint_key);
    try {
      await automationsApi.deleteEntrypoint(entrypoint.entrypoint_key);
      setEntrypoints((current) => current.filter((item) => item.id !== entrypoint.id));
      toast.success("Entry point removed");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to remove entry point");
    } finally {
      setBusyKey(null);
    }
  };

  if (!featureEnabled) {
    return (
      <main className="md:ml-20 p-2 md:p-6">
        <Card><CardContent className="p-6 text-sm text-slate-600">Automation administration is not enabled in this environment.</CardContent></Card>
      </main>
    );
  }

  return (
    <main className="md:ml-20 min-h-[calc(100vh-2rem)] rounded-2xl bg-[#f7f9fc] p-4 text-slate-950 md:p-7">
      <header className="flex flex-col gap-5 border-b border-slate-200 pb-0">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <h1 className="flex items-center gap-3 text-2xl font-semibold tracking-tight">
              <Workflow className="h-6 w-6 text-[#3564dc]" /> Automations
            </h1>
            <p className="mt-1 text-sm text-slate-600">Connect services, govern capabilities, and run customer workflows.</p>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" className="bg-white text-sm">
              <Link href="/dashboard/automations/runs"><Activity className="h-4 w-4" /> View activity</Link>
            </Button>
            <Button asChild className="bg-[#245de8] text-sm hover:bg-[#1f51cb]">
              <Link href="/dashboard/automations/entry-points"><Plus className="h-4 w-4" /> Create automation</Link>
            </Button>
          </div>
        </div>
        <nav className="flex gap-7 overflow-x-auto" aria-label="Automation workspace">
          {views.map((view) => (
            <Link
              key={view.key}
              href={view.href}
              className={`whitespace-nowrap border-b-2 pb-3 text-sm font-medium transition-colors ${
                activeView === view.key
                  ? "border-[#245de8] text-[#245de8]"
                  : "border-transparent text-slate-600 hover:text-slate-950"
              }`}
            >
              {view.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className="mt-5">
        {activeView === "overview" && (
          <Overview
            automations={automations}
            executions={executions}
            entrypoints={entrypoints}
            loading={loading}
            setupCount={setupCount}
          />
        )}
        {activeView === "workflows" && (
          <WorkflowsView
            automations={automations}
            busyKey={busyKey}
            loading={loading}
            message={message}
            settingsDrafts={settingsDrafts}
            onMessageChange={setMessage}
            onSettingsChange={(key, value) => setSettingsDrafts((current) => ({ ...current, [key]: value }))}
            onSave={saveSettings}
            onToggle={toggleAutomation}
            onTrigger={triggerAutomation}
          />
        )}
        {activeView === "connections" && <ConnectionsView automationCount={automations.length} />}
        {activeView === "capabilities" && <CapabilitiesView automations={automations} />}
        {activeView === "entry-points" && (
          <EntrypointsView
            automations={automations}
            busyKey={busyKey}
            draft={entrypointDraft}
            entrypoints={entrypoints}
            loading={loading}
            onCreate={createEntrypoint}
            onDelete={deleteEntrypoint}
            onDraftChange={setEntrypointDraft}
            onToggle={toggleEntrypoint}
          />
        )}
        {activeView === "runs" && (
          <RunsView executions={executions} loading={loading} busyKey={busyKey} onRetry={retryExecution} />
        )}
      </div>
    </main>
  );
}

function Overview({
  automations,
  executions,
  entrypoints,
  loading,
  setupCount,
}: {
  automations: OrganizationAutomation[];
  executions: AutomationExecution[];
  entrypoints: AutomationEntrypoint[];
  loading: boolean;
  setupCount: number;
}) {
  return (
    <div className="space-y-4">
      {setupCount > 0 && (
        <div className="flex flex-col justify-between gap-3 rounded-xl border border-blue-100 bg-blue-50/70 px-5 py-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700"><CircleAlert className="h-5 w-5" /></span>
            <div>
              <p className="text-sm font-semibold">{setupCount} {setupCount === 1 ? "automation needs" : "automations need"} setup</p>
              <p className="text-xs text-slate-600">Connect required services before activation.</p>
            </div>
          </div>
          <Button asChild variant="ghost" className="justify-start text-[#245de8] hover:text-[#1f51cb] sm:justify-center">
            <Link href="/dashboard/automations/connections">Review requirements <ChevronRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      )}

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-5 py-4">
          <h2 className="text-base font-semibold">Your automations</h2>
        </div>
        <AutomationTable automations={automations} entrypoints={entrypoints} loading={loading} />
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.05fr_.95fr]">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-start justify-between px-5 py-4">
            <div>
              <h2 className="text-base font-semibold">Connections</h2>
              <p className="text-xs text-slate-500">Credentials stay in Zaakiy.</p>
            </div>
            <Button asChild variant="link" className="h-auto p-0 text-[#245de8]">
              <Link href="/dashboard/automations/connections">Manage connections <ChevronRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <AutomationConnections compact automationCount={automations.length} />
        </div>
        <SystemMap />
      </section>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h2 className="text-base font-semibold">Recent runs</h2>
          <Button asChild variant="link" className="h-auto p-0 text-[#245de8]">
            <Link href="/dashboard/automations/runs">View all runs <ChevronRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <RunsTable executions={executions.slice(0, 3)} loading={loading} />
      </section>
    </div>
  );
}

function AutomationTable({
  automations,
  entrypoints,
  loading,
}: {
  automations: OrganizationAutomation[];
  entrypoints: AutomationEntrypoint[];
  loading: boolean;
}) {
  if (loading) return <LoadingRows />;
  if (automations.length === 0) {
    return <EmptyState icon={Workflow} title="No automations configured" description="A platform administrator must bind a reviewed workflow before it can be activated here." />;
  }
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader><TableRow><TableHead>Automation</TableHead><TableHead>Trigger</TableHead><TableHead>Engine</TableHead><TableHead>Requirements</TableHead><TableHead>Status</TableHead><TableHead className="w-12" /></TableRow></TableHeader>
        <TableBody>
          {automations.map((automation) => {
            const entrypoint = entrypoints.find((item) => item.automation_key === automation.automation_key);
            const unavailable = automation.capability_checks?.find((item) => !item.available);
            return (
              <TableRow key={automation.id}>
                <TableCell><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"><Workflow className="h-4 w-4" /></span><div><p className="font-medium">{friendlyName(automation.automation_key)}</p><p className="text-xs text-slate-500">{automation.workflow_key} · v{automation.workflow_version}</p></div></div></TableCell>
                <TableCell>{entrypoint ? formatTriggerMode(entrypoint.trigger_mode) : formatTrigger(automation.workflow_contract?.trigger_type)}</TableCell>
                <TableCell><span className="inline-flex items-center gap-2"><Network className="h-4 w-4 text-rose-500" /> n8n</span></TableCell>
                <TableCell className={unavailable ? "text-amber-700" : "text-emerald-700"}>{unavailable ? `${unavailable.name} · Action required` : automation.allowed_capabilities.length ? "Capabilities ready" : "No capabilities required"}</TableCell>
                <TableCell><StatusLabel status={automation.enabled ? "ACTIVE" : "DRAFT"} /></TableCell>
                <TableCell><MoreHorizontal className="h-4 w-4 text-slate-400" /></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

function SystemMap() {
  const nodes = [
    { icon: Webhook, title: "Entry points", detail: "Chat, WhatsApp, forms, events" },
    { icon: ShieldCheck, title: "Automation Gateway", detail: "Policy, auth, routing" },
    { icon: Network, title: "n8n or Tool Gateway", detail: "Workflows or tools" },
    { icon: Database, title: "Connections", detail: "MCP, APIs, channels" },
  ];
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-base font-semibold">System map</h2>
      <div className="mt-5 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
        {nodes.map((node, index) => (
          <div key={node.title} className="contents">
            <div className="flex min-h-28 flex-1 flex-col items-center justify-center rounded-lg border border-slate-200 px-2 text-center">
              <node.icon className="mb-2 h-5 w-5 text-[#245de8]" />
              <p className="text-xs font-semibold">{node.title}</p>
              <p className="mt-1 text-[11px] leading-4 text-slate-500">{node.detail}</p>
            </div>
            {index < nodes.length - 1 && <ArrowRight className="mx-auto h-4 w-4 rotate-90 shrink-0 text-slate-400 sm:rotate-0" />}
          </div>
        ))}
      </div>
      <p className="mt-5 flex items-center justify-center gap-2 border-t border-dashed border-slate-200 pt-4 text-center text-xs text-slate-600"><ShieldCheck className="h-4 w-4" /> Policy and tenant identity are enforced by Zaakiy.</p>
    </div>
  );
}

function WorkflowsView({
  automations,
  busyKey,
  loading,
  message,
  settingsDrafts,
  onMessageChange,
  onSettingsChange,
  onSave,
  onToggle,
  onTrigger,
}: {
  automations: OrganizationAutomation[];
  busyKey: string | null;
  loading: boolean;
  message: string;
  settingsDrafts: Record<string, string>;
  onMessageChange: (value: string) => void;
  onSettingsChange: (key: string, value: string) => void;
  onSave: (automation: OrganizationAutomation) => void;
  onToggle: (automation: OrganizationAutomation) => void;
  onTrigger: (automation: OrganizationAutomation) => void;
}) {
  if (loading) return <LoadingRows />;
  if (!automations.length) return <PanelEmpty icon={Workflow} title="No workflows are bound" description="Workflow creation stays in n8n. A platform administrator registers a reviewed version and binds it to this organization." />;
  return (
    <div className="space-y-4">
      {automations.map((automation) => (
        <Card key={automation.id} className="border-slate-200 shadow-sm">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div><CardTitle>{friendlyName(automation.automation_key)}</CardTitle><CardDescription className="mt-1">{automation.workflow_key} · version {automation.workflow_version} · n8n</CardDescription></div>
              <Switch checked={automation.enabled} disabled={busyKey === automation.automation_key} onCheckedChange={() => void onToggle(automation)} aria-label={`Enable ${automation.automation_key}`} />
            </div>
          </CardHeader>
          <CardContent className="grid gap-5 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <p className="mb-2 text-sm font-medium">Allowed capabilities</p>
              <div className="flex flex-wrap gap-2">
                {(automation.capability_checks?.length ? automation.capability_checks : [{ name: "No capabilities required", available: true }]).map((capability) => (
                  <Badge key={capability.name} variant={capability.available ? "secondary" : "destructive"}>{capability.name}{capability.available ? "" : " · unavailable"}</Badge>
                ))}
              </div>
              {automation.automation_key === "platform_test_v1" && (
                <div className="mt-5 flex gap-2">
                  <Input value={message} onChange={(event) => onMessageChange(event.target.value)} maxLength={200} aria-label="Test message" />
                  <Button onClick={() => void onTrigger(automation)} disabled={!automation.enabled || busyKey === automation.automation_key}><Play className="h-4 w-4" /> Run test</Button>
                </div>
              )}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor={`settings-${automation.id}`}>Non-secret settings</label>
              <Textarea id={`settings-${automation.id}`} rows={5} spellCheck={false} value={settingsDrafts[automation.automation_key] ?? "{}"} onChange={(event) => onSettingsChange(automation.automation_key, event.target.value)} />
              <Button className="mt-2" size="sm" variant="outline" disabled={busyKey === automation.automation_key} onClick={() => void onSave(automation)}>Save settings</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ConnectionsView({ automationCount }: { automationCount: number }) {
  return (
    <div className="space-y-4">
      <div><h2 className="text-lg font-semibold">Connections</h2><p className="text-sm text-slate-600">Connect providers once, then grant their governed capabilities to workflows.</p></div>
      <AutomationConnections automationCount={automationCount} />
    </div>
  );
}

function CapabilitiesView({ automations }: { automations: OrganizationAutomation[] }) {
  const capabilities = Array.from(new Set(automations.flatMap((item) => item.allowed_capabilities))).sort();
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-5 py-4"><h2 className="text-base font-semibold">Governed capabilities</h2><p className="mt-1 text-xs text-slate-500">Both n8n and agent-driven actions execute through the Tool Gateway.</p></div>
      {capabilities.length ? (
        <div className="divide-y divide-slate-100">
          {capabilities.map((capability) => {
            const consumers = automations.filter((automation) => automation.allowed_capabilities.includes(capability));
            const available = consumers.every((automation) => automation.capability_checks?.find((item) => item.name === capability)?.available !== false);
            return <div key={capability} className="flex items-center gap-4 px-5 py-4"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600"><Wrench className="h-4 w-4" /></span><div className="min-w-0 flex-1"><p className="font-mono text-sm font-medium">{capability}</p><p className="text-xs text-slate-500">Used by {consumers.length} {consumers.length === 1 ? "workflow" : "workflows"} · Tool Gateway</p></div><ConnectionDot ready={available} /></div>;
          })}
        </div>
      ) : <EmptyState icon={Wrench} title="No capabilities granted" description="Capabilities appear here when a registered workflow is bound to this organization." />}
    </section>
  );
}

type EntrypointDraft = {
  automationKey: string;
  entrypointKey: string;
  displayName: string;
  ctaLabel: string;
  ctaMessage: string;
};

function EntrypointsView({
  automations,
  busyKey,
  draft,
  entrypoints,
  loading,
  onCreate,
  onDelete,
  onDraftChange,
  onToggle,
}: {
  automations: OrganizationAutomation[];
  busyKey: string | null;
  draft: EntrypointDraft;
  entrypoints: AutomationEntrypoint[];
  loading: boolean;
  onCreate: () => void;
  onDelete: (entrypoint: AutomationEntrypoint) => void;
  onDraftChange: React.Dispatch<React.SetStateAction<EntrypointDraft>>;
  onToggle: (entrypoint: AutomationEntrypoint) => void;
}) {
  return (
    <div className="grid gap-4 xl:grid-cols-[.9fr_1.1fr]">
      <Card className="border-slate-200 shadow-sm">
        <CardHeader><CardTitle>Create chat entry point</CardTitle><CardDescription>Expose a reviewed ACTION workflow as an explicit, confirmation-protected CTA.</CardDescription></CardHeader>
        <CardContent className="space-y-3">
          <select className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm" value={draft.automationKey} onChange={(event) => onDraftChange((current) => ({ ...current, automationKey: event.target.value }))} aria-label="Automation route">
            <option value="">Select an automation route</option>
            {automations.map((automation) => <option key={automation.automation_key} value={automation.automation_key}>{friendlyName(automation.automation_key)}</option>)}
          </select>
          <Input placeholder="Stable key, e.g. hotel.book_room" value={draft.entrypointKey} onChange={(event) => onDraftChange((current) => ({ ...current, entrypointKey: event.target.value.toLowerCase().replace(/[^a-z0-9_.-]/g, "-") }))} />
          <Input placeholder="Automation name" value={draft.displayName} onChange={(event) => onDraftChange((current) => ({ ...current, displayName: event.target.value }))} />
          <Input placeholder="CTA label, e.g. Book a room" value={draft.ctaLabel} onChange={(event) => onDraftChange((current) => ({ ...current, ctaLabel: event.target.value }))} />
          <Input placeholder="Message sent with the CTA" value={draft.ctaMessage} onChange={(event) => onDraftChange((current) => ({ ...current, ctaMessage: event.target.value }))} />
          <Button onClick={() => void onCreate()} disabled={busyKey === "new-entrypoint" || !automations.length}><Plus className="h-4 w-4" /> Add disabled CTA</Button>
        </CardContent>
      </Card>
      <Card className="border-slate-200 shadow-sm">
        <CardHeader><CardTitle>Customer-facing entry points</CardTitle><CardDescription>CTA and intent routes remain separate from provider workflow definitions.</CardDescription></CardHeader>
        <CardContent className="space-y-3">
          {entrypoints.map((entrypoint) => (
            <div key={entrypoint.id} className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600"><Bot className="h-4 w-4" /></span>
              <div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{entrypoint.cta_label ?? entrypoint.display_name}</p><p className="truncate text-xs text-slate-500">{entrypoint.trigger_mode} · {entrypoint.engine_type} · {entrypoint.automation_key ?? entrypoint.capability_name ?? entrypoint.graph_key}</p></div>
              <Switch checked={entrypoint.enabled} disabled={busyKey === entrypoint.entrypoint_key} onCheckedChange={() => void onToggle(entrypoint)} aria-label={`Enable ${entrypoint.display_name}`} />
              <Button size="icon" variant="outline" disabled={busyKey === entrypoint.entrypoint_key} onClick={() => void onDelete(entrypoint)} aria-label={`Delete ${entrypoint.display_name}`}><Trash2 className="h-4 w-4" /></Button>
            </div>
          ))}
          {!loading && !entrypoints.length && <EmptyState icon={Webhook} title="No entry points yet" description="Create a CTA after an ACTION workflow is bound to this organization." />}
        </CardContent>
      </Card>
    </div>
  );
}

function RunsView({
  executions,
  loading,
  busyKey,
  onRetry,
}: {
  executions: AutomationExecution[];
  loading: boolean;
  busyKey: string | null;
  onRetry: (execution: AutomationExecution) => void;
}) {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-5 py-4"><h2 className="flex items-center gap-2 text-base font-semibold"><Activity className="h-4 w-4" /> Runs</h2><p className="mt-1 text-xs text-slate-500">Delivery acceptance and terminal workflow outcomes are tracked separately.</p></div>
      <RunsTable executions={executions} loading={loading} busyKey={busyKey} onRetry={onRetry} />
    </section>
  );
}

function RunsTable({
  executions,
  loading,
  busyKey,
  onRetry,
}: {
  executions: AutomationExecution[];
  loading: boolean;
  busyKey?: string | null;
  onRetry?: (execution: AutomationExecution) => void;
}) {
  if (loading) return <LoadingRows />;
  if (!executions.length) return <EmptyState icon={Activity} title="No runs yet" description="Execution history will appear after an automation is triggered." />;
  return (
    <div className="overflow-x-auto"><Table><TableHeader><TableRow><TableHead>Workflow</TableHead><TableHead>Status</TableHead><TableHead>Started</TableHead><TableHead>Duration</TableHead>{onRetry && <TableHead className="text-right">Action</TableHead>}</TableRow></TableHeader><TableBody>{executions.map((execution) => <TableRow key={execution.id}><TableCell><p className="font-medium">{friendlyName(execution.automation_key)}</p><p className="text-xs text-slate-500">{execution.workflow_key} · v{execution.workflow_version}</p></TableCell><TableCell><StatusLabel status={execution.status} /></TableCell><TableCell>{new Date(execution.created_at).toLocaleString()}</TableCell><TableCell>{execution.completed_at ? formatDuration(execution.created_at, execution.completed_at) : "—"}</TableCell>{onRetry && <TableCell className="text-right">{terminalFailure.has(execution.status) && execution.retryable && <Button size="sm" variant="outline" disabled={busyKey === execution.id} onClick={() => void onRetry(execution)}>Retry</Button>}</TableCell>}</TableRow>)}</TableBody></Table></div>
  );
}

function StatusLabel({ status }: { status: string }) {
  const styles: Record<string, string> = {
    ACTIVE: "bg-emerald-50 text-emerald-700",
    SUCCEEDED: "bg-emerald-50 text-emerald-700",
    RUNNING: "bg-blue-50 text-blue-700",
    QUEUED: "bg-slate-100 text-slate-700",
    DRAFT: "bg-slate-100 text-slate-700",
    PARTIAL: "bg-amber-50 text-amber-700",
    FAILED: "bg-red-50 text-red-700",
    TIMED_OUT: "bg-red-50 text-red-700",
  };
  return <span className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${styles[status] ?? styles.DRAFT}`}>{friendlyName(status)}</span>;
}

function ConnectionDot({ ready }: { ready: boolean }) {
  return <span className={`inline-flex items-center gap-2 text-xs font-medium ${ready ? "text-emerald-700" : "text-amber-700"}`}><span className={`h-1.5 w-1.5 rounded-full ${ready ? "bg-emerald-500" : "bg-amber-500"}`} />{ready ? "Available" : "Action required"}</span>;
}

function EmptyState({ icon: Icon, title, description }: { icon: typeof Workflow; title: string; description: string }) {
  return <div className="flex min-h-32 items-center justify-center gap-3 px-6 py-8 text-center"><Icon className="h-5 w-5 shrink-0 text-slate-400" /><div className="text-left"><p className="text-sm font-medium text-slate-800">{title}</p><p className="mt-1 max-w-xl text-xs leading-5 text-slate-500">{description}</p></div></div>;
}

function PanelEmpty(props: { icon: typeof Workflow; title: string; description: string }) {
  return <section className="rounded-xl border border-slate-200 bg-white shadow-sm"><EmptyState {...props} /></section>;
}

function LoadingRows() {
  return <div className="space-y-3 p-5" aria-label="Loading"><div className="h-12 animate-pulse rounded-lg bg-slate-100" /><div className="h-12 animate-pulse rounded-lg bg-slate-100" /><div className="h-12 animate-pulse rounded-lg bg-slate-100" /></div>;
}

function friendlyName(value: string) {
  return value.replace(/[._-]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatTrigger(trigger?: string) {
  if (!trigger) return "Not exposed";
  return trigger === "ACTION" ? "Chat or explicit action" : friendlyName(trigger);
}

function formatTriggerMode(mode: AutomationEntrypoint["trigger_mode"]) {
  if (mode === "BOTH") return "Chat intent + CTA";
  return mode === "CTA" ? "Chat CTA" : "Chat intent";
}

function formatDuration(start: string, end: string) {
  const seconds = Math.max(0, Math.round((new Date(end).getTime() - new Date(start).getTime()) / 1000));
  return seconds < 60 ? `${seconds}s` : `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}

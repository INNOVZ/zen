import { notFound } from "next/navigation";

import AutomationWorkspace from "@/components/dashboard/automations/AutomationWorkspace";

const views = new Set(["workflows", "connections", "capabilities", "entry-points", "runs"]);

export default async function AutomationViewPage({
  params,
}: {
  params: Promise<{ view: string }>;
}) {
  const { view } = await params;
  if (!views.has(view)) notFound();
  return <AutomationWorkspace />;
}

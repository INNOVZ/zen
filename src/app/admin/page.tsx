import { headers } from "next/headers";
import AdminDashboardClient from "@/components/admin/AdminDashboardClient";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

export default function AdminDashboard() {
  // Mark this route as dynamic by reading headers.
  headers();
  return <AdminDashboardClient />;
}

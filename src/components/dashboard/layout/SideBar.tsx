"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  User,
  Home,
  Settings,
  Brain,
  Workflow,
} from "lucide-react";
import { RiRobot3Line } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getUserDisplayName } from "@/utils/userUtils";
import { SimpleSubscriptionStatus } from "@/components/dashboard/layout/SimpleSubscriptionStatus";
import { useTranslation } from "@/contexts/I18nContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useAuth } from "@/hooks/useAuthGuard";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { signOut, user } = useAuth();
  const pathname = usePathname() ?? "";
  const automationsEnabled =
    process.env.NEXT_PUBLIC_AUTOMATION_ADMIN_ENABLED === "true";

  const { t } = useTranslation();

  // Sidebar-only menu items (page nav items moved to FloatingDock)
  const menuItems = [
    {
      title: t("sidebar.dashboard"),
      icon: <Home size={20} strokeWidth={1.8} />,
      path: "/dashboard",
    },
    {
      title: t("sidebar.train"),
      icon: <Brain size={20} strokeWidth={1.8} />,
      path: "/dashboard/train",
    },
    {
      title: t("sidebar.customize"),
      icon: <RiRobot3Line size={20} />,
      path: "/dashboard/customize",
    },
    ...(automationsEnabled
      ? [
          {
            title: "Automations",
            icon: <Workflow size={20} strokeWidth={1.8} />,
            path: "/dashboard/automations",
          },
        ]
      : []),
    {
      title: t("sidebar.settings"),
      icon: <Settings size={20} strokeWidth={1.8} />,
      path: "/dashboard/settings",
    },
    
  ];

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully");
    } catch {
      toast.error("Error logging out");
    }
  };

  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "sm:w-60 w-60 z-[999]"
      } my-4 bg-white text-white transition-all-ease-in-out duration-400 fixed top-0 flex-col rounded-xl shadow-lg h-[97vh] hidden md:flex`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 overflow-y-auto">
        {!isCollapsed && (
          <span className="text-xl text-center font-bold text-black">
            Zaakiy Pro
          </span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="pointer"
        >
          {isCollapsed ? (
            <span className="bg-black shadow-sm p-2 rounded-full flex items-center justify-center w-8 h-8">
              <ChevronRight size={18} className="text-white" />
            </span>
          ) : (
            <span className="bg-black shadow-sm p-2 rounded-full flex items-center justify-center w-8 h-8">
              <ChevronLeft size={18} className="text-white" />
            </span>
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const normalizedItemPath = item.path.replace(/\/$/, "");
            const normalizedPathname = pathname.replace(/\/$/, "");

            let isActive = false;

            if (item.path === "/dashboard") {
              isActive = normalizedPathname === "/dashboard";
            } else {
              isActive =
                normalizedPathname === normalizedItemPath ||
                normalizedPathname.startsWith(`${normalizedItemPath}/`);
            }

            return (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`flex items-center gap-4 p-[6px] rounded-lg transition-colors
                    ${
                      isActive
                        ? "bg-[#5d7dde] text-white font-bold shadow-sm"
                        : "text-[#5d7dde] hover:text-[#5d7dde] hover:bg-gray-100"
                    }
                  `}
                >
                  <div className="flex items-center justify-center w-5 h-5 shrink-0">
                    {item.icon}
                  </div>
                  {!isCollapsed && (
                    <span className="text-base font-semibold">
                      {item.title}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {!isCollapsed && (
        <div className="p-4  space-y-4">
          {/* Subscription Status Widget */}
          <SimpleSubscriptionStatus showRefreshButton={false} />

          {/* Language Switcher */}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
      {/* Collapsed Language Switcher */}
      {isCollapsed && (
        <div className="p-4 border-t border-gray-700 flex justify-center">
          <LanguageSwitcher collapsed={true} />
        </div>
      )}

      {/* User Info and Logout Section */}
      <div className="mt-auto border-t border-gray-700">
        {!isCollapsed && user && (
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <User size={16} className="text-black" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-black truncate">
                  {getUserDisplayName({
                    id: user.id,
                    email: user.email || "",
                    name: user.user_metadata?.name || "",
                    display_name: user.user_metadata?.name || "",
                  })}
                </p>
                <p className="text-xs text-gray-600 truncate">
                  User ID: {user.id.slice(0, 8)}...
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="p-4">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className={`w-full justify-start text-white hover:text-gray-100 bg-gray-900 hover:bg-black pointer ${
              isCollapsed ? "px-2" : ""
            }`}
          >
            <div className="pointer flex items-center justify-center shrink-0">
              <RiLogoutCircleLine />
            </div>
            {!isCollapsed && (
              <span className="ml-4">{t("sidebar.logout")}</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

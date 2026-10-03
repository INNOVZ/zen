"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Settings, Brain, LogOut, Users, Menu, X, Workflow, MessageSquare } from "lucide-react";
import { RiRobot3Line } from "react-icons/ri";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuthGuard";

const MobileBottomMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useAuth();
  const pathname = usePathname() ?? "";
  const automationsEnabled = process.env.NEXT_PUBLIC_AUTOMATION_ADMIN_ENABLED === "true";

  // Menu items with simple paths - no userId needed
  const menuItems = [
    {
      title: "Dashboard",
      icon: <Home size={20} />,
      path: "/dashboard",
    },
    {
      title: "Train",
      icon: <Brain size={20} />,
      path: "/dashboard/train",
    },
    {
      title: "Customize",
      icon: <RiRobot3Line size={20} />,
      path: "/dashboard/customize",
    },
    {
      title: "Conversations",
      icon: <MessageSquare size={20} />,
      path: "/dashboard/conversations",
    },
    {
      title: "Leads",
      icon: <Users size={20} />,
      path: "/dashboard/leads",
    },
    ...(automationsEnabled ? [{
      title: "Automations",
      icon: <Workflow size={20} />,
      path: "/dashboard/automations",
    }] : []),
    {
      title: "Settings",
      icon: <Settings size={20} />,
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

  const isMenuItemActive = (itemPath: string) => {
    const normalizedItemPath = itemPath.replace(/\/$/, "");
    const normalizedPathname = pathname.replace(/\/$/, "");

    if (itemPath === "/dashboard") {
      return normalizedPathname === "/dashboard";
    } else {
      return (
        normalizedPathname === normalizedItemPath ||
        normalizedPathname.startsWith(`${normalizedItemPath}/`)
      );
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[998]">
      {/* Mobile Menu Bar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Menu Items - Horizontal Scroll */}
        <div className="flex gap-2 flex-1 overflow-x-auto">
          {menuItems.slice(0, 4).map((item, index) => {
            const isActive = isMenuItemActive(item.path);
            return (
              <Link
                key={index}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "bg-[#5d7dde] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="w-5 h-5">{item.icon}</div>
                <span className="text-xs font-medium">{item.title}</span>
              </Link>
            );
          })}
        </div>

        {/* Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-2 p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-gray-50 max-h-64 overflow-y-auto">
          <div className="p-4 space-y-2">
            {/* Additional menu items */}
            {menuItems.slice(4).map((item, index) => {
              const isActive = isMenuItemActive(item.path);
              return (
                <Link
                  key={index}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#5d7dde] text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <div className="w-5 h-5">{item.icon}</div>
                  <span className="font-medium">{item.title}</span>
                </Link>
              );
            })}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
            >
              <div className="w-5 h-5">
                <LogOut size={20} />
              </div>
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileBottomMenu;

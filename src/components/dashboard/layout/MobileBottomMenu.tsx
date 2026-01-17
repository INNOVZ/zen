"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Settings, Brain, LogOut, Users, Menu, X } from "lucide-react";
import { RiRobot3Line } from "react-icons/ri";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const MobileBottomMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() ?? "";

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
      title: "Leads",
      icon: <Users size={20} />,
      path: "/dashboard/leads",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/dashboard/settings",
    },
  ];

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error logging out");
    } else {
      toast.success("Logged out successfully");
      window.location.href = "/auth/login";
    }
  };

  const isMenuItemActive = (itemPath: string) => {
    const normalizedItemPath = itemPath.replace(/\/$/, "");
    const normalizedPathname = pathname.replace(/\/$/, "");

    if (itemPath === "/dashboard") {
      return normalizedPathname === "/dashboard";
    } else {
      return normalizedPathname === normalizedItemPath;
    }
  };

  // Close menu when navigation occurs
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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

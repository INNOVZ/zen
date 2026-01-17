"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Settings,
  Brain,
  ChevronLeft,
  ChevronRight,
  User,
  Users,
  Calendar,
} from "lucide-react";
import { RiLogoutCircleLine } from "react-icons/ri";

import { RiRobot3Line } from "react-icons/ri";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import { getUserDisplayName } from "@/utils/userUtils";
import { SimpleSubscriptionStatus } from "@/components/dashboard/layout/SimpleSubscriptionStatus";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const pathname = usePathname() ?? "";

  useEffect(() => {
    const getUser = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (userData?.user) {
        setUser(userData.user);
      }
    };
    getUser();
  }, []);

  // Menu items with simple paths - no userId needed
  const menuItems = [
    {
      title: "Dashboard",
      icon: <Home size={16} />,
      path: "/dashboard",
    },
    {
      title: "Train",
      icon: <Brain size={16} />,
      path: "/dashboard/train",
    },
    {
      title: "Customize",
      icon: <RiRobot3Line size={16} />,
      path: "/dashboard/customize",
    },
    {
      title: "Leads",
      icon: <Users size={16} />,
      path: "/dashboard/leads",
    },
    {
      title: "Calendar",
      icon: <Calendar size={16} />,
      path: "/dashboard/calendar",
    },
    {
      title: "Settings",
      icon: <Settings size={16} />,
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
            // Normalize paths by removing trailing slashes
            const normalizedItemPath = item.path.replace(/\/$/, "");
            const normalizedPathname = pathname.replace(/\/$/, "");

            // Simple active state logic for new URL structure without userId
            let isActive = false;

            if (item.title === "Dashboard") {
              // Dashboard is active only when we're exactly on /dashboard with no additional segments
              isActive = normalizedPathname === "/dashboard";
            } else {
              // For other items, check exact path match
              isActive = normalizedPathname === normalizedItemPath;
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

      {/* Subscription Status Widget */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-700">
          <SimpleSubscriptionStatus showRefreshButton={false} />
        </div>
      )}

      {/* User Info and Logout Section */}
      <div className="mt-auto border-t border-gray-700">
        {/* User Info */}
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

        {/* Logout Button */}
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
            {!isCollapsed && <span className="ml-4">Logout</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

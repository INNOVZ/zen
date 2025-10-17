"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import {
  Home,
  Settings,
  Brain,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User,
  BrainCircuit,
} from "lucide-react";

import { RiRobot3Line } from "react-icons/ri";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import { getUserDisplayName } from "@/utils/userUtils";
import { SimpleSubscriptionStatus } from "@/components/subscription/SimpleSubscriptionStatus";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const pathname = usePathname();
  const params = useParams();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
      }
    };
    getUser();
  }, []);

  // Get userId from params or user state
  const currentUserId = params?.userId || user?.id;

  // Create a function to get the correct path for menu items
  const getMenuItemPath = (basePath: string) => {
    return currentUserId
      ? `/dashboard/${currentUserId}${basePath}`
      : `/dashboard${basePath}`;
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <Home size={20} />,
      path: getMenuItemPath(""),
    },
    {
      title: "Train",
      icon: <Brain size={20} />,
      path: getMenuItemPath("/train"),
    },
    {
      title: "AI",
      icon: <BrainCircuit size={20} />,
      path: getMenuItemPath("/context-settings"),
    },
    {
      title: "Customize",
      icon: <RiRobot3Line size={20} />,
      path: getMenuItemPath("/customize"),
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: getMenuItemPath("/settings"),
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
        isCollapsed ? "w-[4vw]" : "sm:w-60 w-60 z-[999]"
      } min-h-screen bg-white text-white transition-all-ease-in-out duration-400 fixed left-0 top-0 flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-r border-gray-700 overflow-y-auto">
        {!isCollapsed && (
          <span className="text-xl font-bold text-white">Zentria Pro</span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="pointer"
        >
          {isCollapsed ? (
            <span className="glass shadow-sm p-2 rounded-full flex items-center justify-center">
              {" "}
              <ChevronRight size={20} color="#fff" />
            </span>
          ) : (
            <span className="glass shadow-sm p-2 rounded-full flex items-center justify-center">
              <ChevronLeft size={20} color="#fff" />
            </span>
          )}
        </button>
      </div>

      {/* User Info */}
      {!isCollapsed && user && (
        <div className="p-4 border-r border-gray-700 overflow-y-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {getUserDisplayName({
                  id: user.id,
                  email: user.email || "",
                  name: user.user_metadata?.name || "",
                  display_name: user.user_metadata?.display_name || "",
                })}
              </p>
              <p className="text-xs text-white">
                User ID: {user.id.slice(0, 8)}...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="p-4 flex-1 border-r border-gray-700 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            // Normalize paths by removing trailing slashes
            const normalizedItemPath = item.path.replace(/\/$/, "");
            const normalizedPathname = pathname.replace(/\/$/, "");

            // Much simpler and more reliable active state logic
            let isActive = false;

            // Split paths into segments for comparison
            const pathSegments = normalizedPathname.split("/").filter(Boolean);
            const itemSegments = normalizedItemPath.split("/").filter(Boolean);

            if (item.title === "Dashboard") {
              // Dashboard is active only when we're exactly on /dashboard/{userId} with no additional segments
              isActive =
                pathSegments.length === 2 &&
                pathSegments[0] === "dashboard" &&
                pathSegments[1] !== undefined &&
                pathSegments[2] === undefined;
            } else {
              // For other items, check if the last meaningful segment matches
              const lastPathSegment = pathSegments[pathSegments.length - 1];
              const expectedSegment = itemSegments[itemSegments.length - 1];
              isActive = lastPathSegment === expectedSegment;
            }

            return (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`flex items-center gap-4 p-2 rounded-lg transition-colors
                    ${
                      isActive
                        ? "glass shadow-sm text-white font-bold"
                        : "text-[#0a0a60] hover:text-[#020617]"
                    }
                  `}
                >
                  {item.icon}
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

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className={`w-full justify-start text-gray-600 hover:text-white hover:bg-red-500 ${
            isCollapsed ? "px-2" : ""
          }`}
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="ml-4">Logout</span>}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

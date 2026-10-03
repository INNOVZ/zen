"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Calendar, MessageSquare } from "lucide-react";
import { useTranslation } from "@/contexts/I18nContext";

const FloatingDock = () => {
  const pathname = usePathname() ?? "";
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const dockItems = [
    {
      title: t("sidebar.leads"),
      icon: <Users size={16} />,
      path: "/dashboard/leads",
    },
    {
      title: t("sidebar.conversations"),
      icon: <MessageSquare size={16} />,
      path: "/dashboard/conversations",
    },
    {
      title: t("sidebar.calendar"),
      icon: <Calendar size={16} />,
      path: "/dashboard/calendar",
    },
  ];

  const isActive = (itemPath: string) => {
    const normalizedItemPath = itemPath.replace(/\/$/, "");
    const normalizedPathname = pathname.replace(/\/$/, "");
    if (itemPath === "/dashboard") {
      return normalizedPathname === "/dashboard";
    }
    return (
      normalizedPathname === normalizedItemPath ||
      normalizedPathname.startsWith(`${normalizedItemPath}/`)
    );
  };

  useEffect(() => {
    if (hoveredIndex !== null && itemRefs.current[hoveredIndex]) {
      const el = itemRefs.current[hoveredIndex];
      if (el) {
        const rect = el.getBoundingClientRect();
        const parentRect = el.closest("[data-dock]")?.getBoundingClientRect();
        if (parentRect) {
          setTooltipStyle({
            left: rect.left - parentRect.left + rect.width / 2,
          });
        }
      }
    }
  }, [hoveredIndex]);

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[1000] hidden md:block rounded-4xl shadow-2xl">
      {/* Tooltip */}
      {hoveredIndex !== null && (
        <div
          className="absolute -top-10 -translate-x-1/2 px-3 py-1.5 rounded-2xl
            bg-gray-900/90 text-white text-xs font-medium whitespace-nowrap
            backdrop-blur-md shadow-lg
            animate-in fade-in slide-in-from-bottom-1 duration-150"
          style={tooltipStyle}
        >
          {dockItems[hoveredIndex].title}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-gray-900/90" />
        </div>
      )}

      {/* Dock */}
      <div
        data-dock
        className="flex items-center gap-1.5 px-3 py-2.5 rounded-2xl
          bg-white/60 backdrop-blur-xl
          border border-white/40
          shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)]"
      >
        {dockItems.map((item, index) => {
          const active = isActive(item.path);

          return (
            <Link
              key={item.path}
              href={item.path}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative flex items-center justify-center
                w-9 h-9 rounded-lg
                transition-all duration-300 ease-out
                ${
                  active
                    ? "bg-[#5d7dde] text-white shadow-[0_2px_12px_rgba(93,125,222,0.4)] scale-105"
                    : "text-[#5d7dde] hover:text-[#5d7dde] hover:bg-black/[0.06] hover:scale-110"
                }
                ${hoveredIndex === index && !active ? "scale-110" : ""}
              `}
            >
              <div className="flex items-center justify-center">
                {item.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingDock;

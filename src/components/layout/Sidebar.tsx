"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { navigation, type NavItem } from "@/data/navigation";
import clsx from "clsx";

function SidebarLink({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const isParentActive = item.children?.some((c) => pathname === c.href);
  const [expanded, setExpanded] = useState(isActive || !!isParentActive);

  return (
    <div>
      <div className="flex items-center">
        <Link
          href={item.href}
          className={clsx(
            "flex-1 block py-1.5 text-sm rounded-md transition-colors",
            depth === 0 ? "px-3" : "px-3 pl-7",
            isActive
              ? "bg-blue-50 text-blue-700 font-medium"
              : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
          )}
        >
          {item.title}
        </Link>
        {item.children && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1 text-zinc-400 hover:text-zinc-600"
          >
            {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>
        )}
      </div>
      {item.children && expanded && (
        <div className="mt-0.5">
          {item.children.map((child) => (
            <SidebarLink key={child.href} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md lg:hidden"
        aria-label="Abrir menu"
      >
        <Menu size={20} />
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={clsx(
          "fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-zinc-200 flex flex-col transition-transform duration-200 lg:translate-x-0 lg:static lg:z-auto",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-zinc-100">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DS</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-900 leading-tight">
                DS Design & Motion
              </p>
              <p className="text-[10px] text-zinc-400">Brand System</p>
            </div>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1 text-zinc-400 lg:hidden"
            aria-label="Fechar menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-5">
          {navigation.map((section) => (
            <div key={section.label}>
              <p className="px-3 mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                {section.label}
              </p>
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <SidebarLink key={item.href} item={item} />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
              ? "bg-accent/10 text-accent font-medium"
              : "text-zinc-500 hover:text-white hover:bg-white/5"
          )}
        >
          {item.title}
        </Link>
        {item.children && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1 text-zinc-600 hover:text-zinc-400"
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
        className="fixed top-4 left-4 z-50 p-2 bg-surface-light rounded-lg shadow-md lg:hidden"
        aria-label="Abrir menu"
      >
        <Menu size={20} className="text-white" />
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={clsx(
          "fixed top-0 left-0 z-50 h-full w-64 bg-surface border-r border-white/5 flex flex-col transition-transform duration-200 lg:translate-x-0 lg:static lg:z-auto",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-DS.png"
              alt="DS Design & Motion"
              width={28}
              height={28}
              className="w-7 h-7 invert"
            />
            <div>
              <p className="text-sm font-semibold text-white leading-tight">
                DS Design & Motion
              </p>
              <p className="text-[10px] text-zinc-600">Brand System</p>
            </div>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1 text-zinc-600 lg:hidden"
            aria-label="Fechar menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-5">
          {navigation.map((section) => (
            <div key={section.label}>
              <p className="px-3 mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-600">
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

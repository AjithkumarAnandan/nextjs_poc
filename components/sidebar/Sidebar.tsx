"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: "▦" },
  { name: "All Reports", href: "/reports", icon: "▤" },
  { name: "Sales Reports", href: "/reports/sales", icon: "↗" },
  { name: "Financial Reports", href: "/reports/finance", icon: "₹" },
  { name: "Operational Reports", href: "/reports/operations", icon: "◷" },
  { name: "User Management", href: "/users", icon: "♙" },
  { name: "Settings", href: "/settings", icon: "⚙" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-full w-64 flex-col border-r border-gray-200 bg-white">

      <nav className="flex-1 space-y-1 p-3">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Workspace
        </p>

        {menuItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" &&
              item.href !== "/reports" &&
              pathname.startsWith(item.href + "/"));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span className="w-5 text-center text-base">
                {item.icon}
              </span>
              {item.name}
            </Link>
          );
        })}
      </nav>      
    </aside>
  );
}
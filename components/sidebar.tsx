"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ArrowLeftRight,
  PieChart,
  Receipt,
  PiggyBank,
  FileSpreadsheet,
  Landmark,
  Users,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  LogOut,
  ShieldCheck,
  TrendingUp,
  X,
  CreditCard,
  Building2,
} from "lucide-react";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean | ((prev: boolean) => boolean)) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  badgeColor?: string;
}

interface NavGroup {
  groupTitle: string;
  items: NavItem[];
}

export default function Sidebar({
  isCollapsed,
  setIsCollapsed,
  mobileOpen,
  setMobileOpen,
}: SidebarProps) {
  const pathname = usePathname();

  const navigationGroups: NavGroup[] = [
    {
      groupTitle: "Menu Utama",
      items: [
        {
          name: "Dashboard",
          href: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          name: "Arus Kas & Transaksi",
          href: "/dashboard/transactions",
          icon: ArrowLeftRight,
          badge: "Live",
          badgeColor: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
        },
        {
          name: "Portofolio & Aset",
          href: "/dashboard/portfolio",
          icon: PieChart,
        },
        {
          name: "Faktur & Tagihan",
          href: "/dashboard/invoices",
          icon: Receipt,
          badge: "4 Baru",
          badgeColor: "bg-blue-500/10 text-[#0266B3] border border-blue-500/20",
        },
      ],
    },
    {
      groupTitle: "Finansial & Analisis",
      items: [
        {
          name: "Anggaran & Budgeting",
          href: "/dashboard/budgets",
          icon: PiggyBank,
        },
        {
          name: "Laporan Keuangan",
          href: "/dashboard/reports",
          icon: FileSpreadsheet,
        },
        {
          name: "Rekonsiliasi Bank",
          href: "/dashboard/reconciliation",
          icon: Landmark,
          badge: "Automatis",
          badgeColor: "bg-amber-500/10 text-amber-600 border border-amber-500/20",
        },
      ],
    },
    {
      groupTitle: "Sistem & Kelola",
      items: [
        {
          name: "Manajemen Pengguna",
          href: "/dashboard/users",
          icon: Users,
        },
        {
          name: "Pengaturan Sistem",
          href: "/dashboard/settings",
          icon: Settings,
        },
        {
          name: "Pusat Bantuan",
          href: "/dashboard/help",
          icon: HelpCircle,
        },
      ],
    },
  ];

  const handleLinkClick = () => {
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs transition-opacity lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar Element */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col bg-white border-r border-slate-200/90 transition-all duration-300 ease-in-out lg:static ${
          mobileOpen ? "translate-x-0 w-72" : "-translate-x-full lg:translate-x-0"
        } ${isCollapsed ? "lg:w-20" : "lg:w-64"} shadow-xl lg:shadow-none`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-100 bg-white">
          <Link
            href="/dashboard"
            onClick={handleLinkClick}
            className="flex items-center gap-3 overflow-hidden group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 p-1.5 shadow-2xs group-hover:border-[#0266B3]/40 transition-colors">
              <Image
                src="/assets/image/Logo-graphic.png"
                alt="Skyterra Logo"
                width={28}
                height={28}
                className="object-contain"
                priority
              />
            </div>

            {(!isCollapsed || mobileOpen) && (
              <div className="flex flex-col min-w-0 transition-opacity duration-200">
                <span className="text-sm font-bold tracking-tight text-slate-900 leading-tight truncate">
                  SKYTERRA
                </span>
                <span className="text-[9px] tracking-[0.2em] font-bold text-[#0266B3] mt-0.5 truncate uppercase">
                  Nusantara Finance
                </span>
              </div>
            )}
          </Link>

          {/* Close button on mobile */}
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg lg:hidden"
            aria-label="Tutup Menu"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Desktop Collapse Toggle */}
          <button
            type="button"
            onClick={() => setIsCollapsed((prev) => !prev)}
            className={`hidden lg:flex items-center justify-center w-6 h-6 rounded-md border border-slate-200 text-slate-400 hover:text-[#0266B3] hover:bg-slate-50 transition-colors ${
              isCollapsed ? "mx-auto mt-2" : ""
            }`}
            title={isCollapsed ? "Perluas Sidebar" : "Perkecil Sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="w-3.5 h-3.5" />
            ) : (
              <ChevronLeft className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Navigation Links Scrollable Area */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-200">
          {navigationGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-1">
              {(!isCollapsed || mobileOpen) ? (
                <div className="px-3 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 select-none">
                  {group.groupTitle}
                </div>
              ) : (
                <div className="w-6 mx-auto border-t border-slate-200 my-2" />
              )}

              <ul className="space-y-1">
                {group.items.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/dashboard" && pathname?.startsWith(item.href));
                  const Icon = item.icon;

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        title={isCollapsed && !mobileOpen ? item.name : undefined}
                        className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                          isActive
                            ? "bg-[#0266B3] text-white shadow-sm shadow-[#0266B3]/25"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                        } ${isCollapsed && !mobileOpen ? "justify-center px-2" : ""}`}
                      >
                        <Icon
                          className={`w-5 h-5 shrink-0 transition-transform duration-150 group-hover:scale-105 ${
                            isActive
                              ? "text-white"
                              : "text-slate-500 group-hover:text-slate-800"
                          }`}
                        />

                        {(!isCollapsed || mobileOpen) && (
                          <span className="truncate flex-1">{item.name}</span>
                        )}

                        {(!isCollapsed || mobileOpen) && item.badge && (
                          <span
                            className={`px-1.5 py-0.5 text-[10px] font-semibold rounded-md shrink-0 ${
                              isActive
                                ? "bg-white/20 text-white"
                                : item.badgeColor || "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}

                        {/* Collapsed Tooltip on Hover */}
                        {isCollapsed && !mobileOpen && (
                          <div className="pointer-events-none absolute left-full ml-3 px-2.5 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 shadow-md">
                            {item.name}
                            {item.badge && ` (${item.badge})`}
                          </div>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Quick Kas Perusahaan Widget Card (Only shown when expanded) */}
          {(!isCollapsed || mobileOpen) && (
            <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-sm relative overflow-hidden">
              <div className="absolute -right-3 -top-3 w-16 h-16 bg-[#0266B3]/25 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center justify-between text-xs text-slate-300 font-medium mb-1">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#0266B3]" />
                  Status Kas Perusahaan
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Sehat
                </span>
              </div>
              <div className="text-lg font-bold tracking-tight text-white mt-1">
                Rp 8.450.000.000
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 pt-2 border-t border-slate-700/60">
                <span>Realisasi Target Q3</span>
                <span className="text-emerald-400 font-semibold">+14.2%</span>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Card at Bottom */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/50">
          <div
            className={`flex items-center gap-3 p-2 rounded-xl hover:bg-slate-100 transition-colors ${
              isCollapsed && !mobileOpen ? "justify-center p-1.5" : ""
            }`}
          >
            <div className="relative shrink-0">
              <div className="w-9 h-9 rounded-full bg-[#0266B3] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                AF
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
            </div>

            {(!isCollapsed || mobileOpen) && (
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <p className="text-xs font-bold text-slate-900 truncate">
                    Ahmad Fauzi, M.Ak
                  </p>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0266B3] shrink-0" />
                </div>
                <p className="text-[11px] text-slate-500 truncate">
                  Head of Finance
                </p>
              </div>
            )}

            {(!isCollapsed || mobileOpen) && (
              <Link
                href="/login"
                title="Keluar dari Portal"
                className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

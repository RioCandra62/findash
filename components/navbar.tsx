"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  Bell,
  Plus,
  ChevronDown,
  User,
  Settings,
  ShieldAlert,
  LogOut,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Sparkles,
  Building2,
  FileText,
  CreditCard,
  X,
} from "lucide-react";

interface NavbarProps {
  onToggleMobileMenu: () => void;
  pageTitle?: string;
}

export default function Navbar({
  onToggleMobileMenu,
  pageTitle = "Ringkasan Eksekutif",
}: NavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showQuickActionModal, setShowQuickActionModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (userRef.current && !userRef.current.contains(event.target as Node)) {
        setShowUserDropdown(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    {
      id: 1,
      title: "Pencairan Dana Proyek Disetujui",
      description: "Pencairan Rp 120.000.000 untuk Divisi Operasional telah disetujui Direksi.",
      time: "10 menit yang lalu",
      unread: true,
      type: "success",
    },
    {
      id: 2,
      title: "Faktur Jatuh Tempo Segera",
      description: "Faktur vendor #INV-2026-092 jatuh tempo dalam 2 hari kalender.",
      time: "1 jam yang lalu",
      unread: true,
      type: "warning",
    },
    {
      id: 3,
      title: "Rekonsiliasi Bank Otomatis Selesai",
      description: "148 transaksi Rekening Bank Mandiri Nusantara telah tercocokkan 100%.",
      time: "4 jam yang lalu",
      unread: false,
      type: "info",
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-30 h-16 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-colors">
        <div className="h-full px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Left section: Mobile toggle & Breadcrumb */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleMobileMenu}
              className="p-2 -ml-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl lg:hidden transition-colors"
              aria-label="Buka Menu Navigasi"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <span className="hover:text-slate-600 cursor-pointer">Skyterra</span>
                <span>/</span>
                <span className="hover:text-slate-600 cursor-pointer">Finansial</span>
                <span>/</span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                {pageTitle}
                <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
              </h1>
            </div>
          </div>

          {/* Center section: Global Search Bar */}
          <div
            ref={searchRef}
            className="hidden md:flex flex-1 max-w-md relative mx-2"
          >
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setShowSearchSuggestions(true)}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari transaksi, faktur, vendor, akun (Ctrl + K)..."
                className="w-full pl-10 pr-12 py-2 bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0266B3] focus:ring-2 focus:ring-[#0266B3]/15 transition-all"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 bg-white border border-slate-200 rounded-md shadow-2xs">
                  ⌘K
                </kbd>
              </div>
            </div>

            {/* Quick Search Suggestions Popover */}
            {showSearchSuggestions && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-50 text-xs">
                <div className="px-3 py-1.5 font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                  Pencarian Terpopuler
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setSearchQuery("Pencairan Anggaran Q3");
                      setShowSearchSuggestions(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 flex items-center justify-between text-slate-700"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      Pencairan Anggaran Q3 - Divisi IT
                    </span>
                    <span className="text-[10px] text-slate-400">Pengajuan</span>
                  </button>
                  <button
                    onClick={() => {
                      setSearchQuery("Faktur Vendor AWS");
                      setShowSearchSuggestions(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 flex items-center justify-between text-slate-700"
                  >
                    <span className="flex items-center gap-2">
                      <CreditCard className="w-3.5 h-3.5 text-slate-400" />
                      Faktur Vendor Cloud Server #INV-8890
                    </span>
                    <span className="text-[10px] text-amber-600 font-medium">Tagihan</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right section: Actions & Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Add Button */}
            <button
              type="button"
              onClick={() => setShowQuickActionModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-[#0266B3] hover:bg-[#015291] active:bg-[#014478] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Transaksi Baru</span>
            </button>

            {/* Entity Selector (Desktop only) */}
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700">
              <Building2 className="w-3.5 h-3.5 text-[#0266B3]" />
              <span className="max-w-[130px] truncate">PT Skyterra Nusantara</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-200 font-bold text-slate-600">
                IDR
              </span>
            </div>

            {/* Notification Bell with Dropdown */}
            <div ref={notifRef} className="relative">
              <button
                type="button"
                onClick={() => setShowNotifications(!showNotifications)}
                className={`p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors relative cursor-pointer ${
                  showNotifications ? "bg-slate-100 text-slate-900" : ""
                }`}
                aria-label="Pemberitahuan"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white" />
              </button>

              {/* Notification Popover */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200/90 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">Notifikasi</span>
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-[#0266B3]/10 text-[#0266B3] rounded-full">
                        2 Baru
                      </span>
                    </div>
                    <button
                      type="button"
                      className="text-xs text-[#0266B3] hover:underline font-medium"
                    >
                      Tandai terbaca
                    </button>
                  </div>

                  <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                    {notifications.map((item) => (
                      <div
                        key={item.id}
                        className={`p-4 hover:bg-slate-50/80 transition-colors flex gap-3 cursor-pointer ${
                          item.unread ? "bg-[#0266B3]/[0.02]" : ""
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {item.type === "success" && (
                            <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                          )}
                          {item.type === "warning" && (
                            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                              <Clock className="w-4 h-4" />
                            </div>
                          )}
                          {item.type === "info" && (
                            <div className="w-7 h-7 rounded-full bg-blue-100 text-[#0266B3] flex items-center justify-center">
                              <Sparkles className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-slate-900 leading-tight">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-600 mt-0.5 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                          <span className="text-[10px] text-slate-400 mt-1 block">
                            {item.time}
                          </span>
                        </div>
                        {item.unread && (
                          <div className="w-2 h-2 rounded-full bg-[#0266B3] mt-1 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="p-2.5 border-t border-slate-100 bg-slate-50 text-center">
                    <Link
                      href="/dashboard/notifications"
                      onClick={() => setShowNotifications(false)}
                      className="text-xs font-semibold text-[#0266B3] hover:text-[#014c85] transition-colors"
                    >
                      Lihat Semua Aktivitas Finansial →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Avatar with Dropdown */}
            <div ref={userRef} className="relative">
              <button
                type="button"
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Menu Profil"
              >
                <div className="w-8 h-8 rounded-full bg-[#0266B3] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                  AF
                </div>
                <div className="hidden md:flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-900 leading-tight">
                    Ahmad Fauzi
                  </span>
                  <span className="text-[10px] text-slate-500 leading-none">
                    Finance Head
                  </span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden md:block" />
              </button>

              {/* User Menu Popover */}
              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200/90 z-50 p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2.5 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-900">Ahmad Fauzi, M.Ak</p>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">
                      ahmad.fauzi@skyterranusantara.co.id
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-50 text-[10px] font-semibold text-[#0266B3] border border-blue-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0266B3]" />
                      Super Admin Finansial
                    </div>
                  </div>

                  <div className="py-1">
                    <Link
                      href="/dashboard/profile"
                      onClick={() => setShowUserDropdown(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                    >
                      <User className="w-4 h-4 text-slate-400" />
                      Profil & Jabatan
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      onClick={() => setShowUserDropdown(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                    >
                      <Settings className="w-4 h-4 text-slate-400" />
                      Pengaturan Akun & Keamanan
                    </Link>
                    <Link
                      href="/dashboard/audit"
                      onClick={() => setShowUserDropdown(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                    >
                      <ShieldAlert className="w-4 h-4 text-slate-400" />
                      Log Audit Aktivitas
                    </Link>
                  </div>

                  <div className="pt-1 border-t border-slate-100">
                    <Link
                      href="/login"
                      onClick={() => setShowUserDropdown(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <LogOut className="w-4 h-4 text-red-500" />
                      Keluar dari Portal
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Quick Transaction Modal (Demonstration) */}
      {showQuickActionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#0266B3]/10 text-[#0266B3] flex items-center justify-center font-bold">
                  <Plus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Input Transaksi Baru
                  </h3>
                  <p className="text-xs text-slate-500">
                    Sistem Buku Kas & Jurnal Finansial Skyterra
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowQuickActionModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowQuickActionModal(false);
              }}
              className="mt-4 space-y-3.5"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Jenis Transaksi
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center justify-center gap-2 p-2 border border-[#0266B3] bg-blue-50/50 rounded-xl text-xs font-bold text-[#0266B3] cursor-pointer">
                    <input type="radio" name="tx_type" defaultChecked className="hidden" />
                    Pemasukan / Pendapatan
                  </label>
                  <label className="flex items-center justify-center gap-2 p-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer">
                    <input type="radio" name="tx_type" className="hidden" />
                    Pengeluaran / Biaya
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nominal (IDR)
                </label>
                <input
                  type="text"
                  placeholder="Rp 0"
                  defaultValue="Rp 25.000.000"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:bg-white focus:outline-none focus:border-[#0266B3]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Deskripsi / Keterangan
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Pembayaran Invoice #SK-901"
                  className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0266B3]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowQuickActionModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-[#0266B3] hover:bg-[#015291] rounded-xl transition-colors shadow-xs"
                >
                  Simpan Transaksi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

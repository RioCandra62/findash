"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Server, HelpCircle, FileCheck, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-white/90 backdrop-blur-xs py-4 px-4 sm:px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        {/* Left: Brand Copyright & Security Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-medium text-slate-700">
            © {currentYear} PT Skyterra Nusantara Indonesia.
          </span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <div className="inline-flex items-center gap-1.5 text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Enkripsi AES-256 Bit & Standar Keamanan Finansial</span>
          </div>
        </div>

        {/* Center: System Status Indicator */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] font-medium text-slate-600">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Sistem Finansial Normal</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-400">Latensi 28ms</span>
        </div>

        {/* Right: Quick Links & Version */}
        <div className="flex items-center gap-4 text-[11px]">
          <Link
            href="/dashboard/support"
            className="hover:text-[#0266B3] transition-colors"
          >
            Pusat Bantuan
          </Link>
          <Link
            href="#"
            className="hover:text-[#0266B3] transition-colors"
          >
            Kebijakan Privasi
          </Link>
          <Link
            href="#"
            className="hover:text-[#0266B3] transition-colors"
          >
            Syarat Layanan
          </Link>
          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono text-[10px] font-semibold border border-slate-200">
            v2.4.8
          </span>
        </div>
      </div>
    </footer>
  );
}

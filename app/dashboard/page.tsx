"use client";

import React from "react";
import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  DollarSign,
  CreditCard,
  Building2,
  Calendar,
  Filter,
  Download,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  ArrowRight,
  Layers,
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Kas & Likuiditas",
      amount: "Rp 8.450.230.000",
      change: "+12.5%",
      isPositive: true,
      timeframe: "dibandingkan bulan lalu",
      icon: Wallet,
      color: "bg-blue-500",
      lightColor: "bg-blue-50 text-[#0266B3]",
    },
    {
      title: "Arus Kas Masuk (Inflow)",
      amount: "Rp 2.180.450.000",
      change: "+8.2%",
      isPositive: true,
      timeframe: "Oktober 2026",
      icon: ArrowUpRight,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Pengeluaran Operasional (Outflow)",
      amount: "Rp 945.800.000",
      change: "-3.1%",
      isPositive: true, // less expense is good
      timeframe: "Efisiensi 94% dari budget",
      icon: ArrowDownRight,
      color: "bg-amber-500",
      lightColor: "bg-amber-50 text-amber-600",
    },
    {
      title: "Laba Bersih Berjalan",
      amount: "Rp 1.234.650.000",
      change: "+18.4%",
      isPositive: true,
      timeframe: "Margin Operasional 56.6%",
      icon: TrendingUp,
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50 text-indigo-600",
    },
  ];

  const recentTransactions = [
    {
      id: "TX-9021",
      entity: "PT Graha Surya Mandiri",
      category: "Pembayaran Kontrak Infrastruktur",
      date: "14 Okt 2026, 14:20",
      amount: "+ Rp 450.000.000",
      status: "Berhasil",
      type: "inflow",
    },
    {
      id: "TX-9020",
      entity: "Amazon Web Services Inc.",
      category: "Biaya Server & Cloud Enterprise",
      date: "14 Okt 2026, 11:15",
      amount: "- Rp 48.750.000",
      status: "Berhasil",
      type: "outflow",
    },
    {
      id: "TX-9019",
      entity: "Bank Central Asia (BCA)",
      category: "Dividen Portofolio Reksa Dana",
      date: "13 Okt 2026, 17:00",
      amount: "+ Rp 85.200.000",
      status: "Berhasil",
      type: "inflow",
    },
    {
      id: "TX-9018",
      entity: "PT Nusantara Logistik Prima",
      category: "Pengadaan Armada & Operasional Lapangan",
      date: "13 Okt 2026, 09:30",
      amount: "- Rp 180.000.000",
      status: "Proses Kliring",
      type: "pending",
    },
    {
      id: "TX-9017",
      entity: "KPP Pratama Nusantara",
      category: "Penyetoran PPh 21 Masa September",
      date: "12 Okt 2026, 15:40",
      amount: "- Rp 64.300.000",
      status: "Berhasil",
      type: "outflow",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner / Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#0266B3]/10 text-[#0266B3]">
              Portal Finansial Terpadu
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500 font-medium">Tahun Anggaran 2026</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 tracking-tight">
            Selamat Datang, Bapak Ahmad Fauzi
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Status keuangan PT Skyterra Nusantara dalam kondisi sangat sehat dengan rasio likuiditas 3.8x.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-center shrink-0">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-2xs transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>Oktober 2026</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0266B3] hover:bg-[#015291] text-white text-xs font-semibold shadow-2xs transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Ekspor Neraca</span>
          </button>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  {stat.title}
                </span>
                <div className={`w-9 h-9 rounded-xl ${stat.lightColor} flex items-center justify-center font-bold`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {stat.amount}
                </h3>
                <div className="flex items-center gap-1.5 mt-2 text-xs">
                  <span
                    className={`inline-flex items-center font-bold px-1.5 py-0.5 rounded text-[11px] ${
                      stat.isPositive
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-slate-400 text-[11px] truncate">
                    {stat.timeframe}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Grid: Financial Chart Preview + Cash Allocation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Arus Kas & Analisis Performa */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Arus Kas Bulanan & Proyeksi
              </h3>
              <p className="text-xs text-slate-500">
                Perbandingan Pemasukan vs Pengeluaran 6 Bulan Terakhir
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-600">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0266B3]" />
                Pemasukan
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-600">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                Pengeluaran
              </span>
            </div>
          </div>

          {/* Bar Chart Simulation */}
          <div className="pt-6">
            <div className="h-56 flex items-end justify-between gap-2 sm:gap-6 px-2">
              {[
                { month: "Mei", inVal: 65, outVal: 40 },
                { month: "Jun", inVal: 78, outVal: 45 },
                { month: "Jul", inVal: 70, outVal: 52 },
                { month: "Agu", inVal: 85, outVal: 48 },
                { month: "Sep", inVal: 92, outVal: 55 },
                { month: "Okt (Est)", inVal: 98, outVal: 42 },
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                  <div className="w-full flex items-end justify-center gap-1.5 h-44">
                    <div
                      style={{ height: `${bar.inVal}%` }}
                      className="w-1/2 max-w-[28px] bg-[#0266B3] rounded-t-lg transition-all duration-300 group-hover:brightness-110"
                      title={`Pemasukan ${bar.month}: ${bar.inVal}%`}
                    />
                    <div
                      style={{ height: `${bar.outVal}%` }}
                      className="w-1/2 max-w-[28px] bg-slate-200 rounded-t-lg transition-all duration-300 group-hover:bg-slate-300"
                      title={`Pengeluaran ${bar.month}: ${bar.outVal}%`}
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {bar.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Distribusi Alokasi Kas */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                Alokasi Portofolio
              </h3>
              <span className="text-xs text-[#0266B3] font-semibold hover:underline cursor-pointer">
                Rincian
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {[
                { name: "Kas Operasional (Giro Bank)", amount: "Rp 3.850.000.000", pct: 45, color: "bg-[#0266B3]" },
                { name: "Deposito & Pasar Uang", amount: "Rp 2.500.000.000", pct: 30, color: "bg-emerald-500" },
                { name: "Surat Berharga Negara (SBN)", amount: "Rp 1.300.000.000", pct: 15, color: "bg-indigo-500" },
                { name: "Dana Cadangan Darurat", amount: "Rp 800.230.000", pct: 10, color: "bg-amber-500" },
              ].map((item, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-slate-700">{item.name}</span>
                    <span className="font-bold text-slate-900">{item.pct}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-slate-400">{item.amount}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
            <span className="text-xs text-slate-600 font-medium">Kesehatan Likuiditas</span>
            <span className="text-xs font-bold text-emerald-600">Sangat Optimal (Grade AAA)</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Recent Transactions Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Transaksi Terkini Skyterra
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Daftar mutasi rekening dan pencairan dana langsung secara real-time
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <Filter className="w-3.5 h-3.5" />
              Filter
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Semua Mutasi
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase tracking-wider border-b border-slate-100">
              <tr>
                <th className="py-3 px-6">ID & Entitas</th>
                <th className="py-3 px-6">Kategori & Keterangan</th>
                <th className="py-3 px-6">Waktu Mutasi</th>
                <th className="py-3 px-6">Status Rekonsiliasi</th>
                <th className="py-3 px-6 text-right">Nominal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {recentTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-6">
                    <div className="font-bold text-slate-900">{tx.entity}</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">{tx.id}</div>
                  </td>
                  <td className="py-3.5 px-6 text-slate-600">
                    {tx.category}
                  </td>
                  <td className="py-3.5 px-6 text-slate-500">
                    {tx.date}
                  </td>
                  <td className="py-3.5 px-6">
                    {tx.status === "Berhasil" ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {tx.status}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                        <Clock className="w-3 h-3 text-amber-600" />
                        {tx.status}
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-6 text-right font-bold">
                    <span
                      className={
                        tx.type === "inflow"
                          ? "text-emerald-600"
                          : tx.type === "outflow"
                          ? "text-slate-900"
                          : "text-amber-600"
                      }
                    >
                      {tx.amount}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
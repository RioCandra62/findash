"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Silakan masukkan email dan kata sandi Anda.");
      return;
    }

    setErrorMessage("");
    setIsLoading(true);

    // Simulasi login
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleDemoFill = () => {
    setEmail("admin@skyterranusantara.co.id");
    setPassword("SkyTerra2026");
    setErrorMessage("");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between text-slate-900 font-sans antialiased">
      {/* Top Simple Header */}
      <header className="w-full border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/login" className="flex items-center gap-3">
            <Image
              src="/assets/image/Logo-graphic.png"
              alt="Skyterra Nusantara"
              width={34}
              height={34}
              className="object-contain"
              priority
            />
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 leading-none">
                SKYTERRA
              </span>
              <span className="text-[10px] tracking-[0.2em] font-semibold text-slate-500 mt-0.5">
                NUSANTARA
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3 text-sm">
            <span className="text-slate-500 hidden sm:inline">Perlu bantuan?</span>
            <Link
              href="#"
              className="text-[#0266B3] hover:text-[#014c85] font-medium transition-colors"
            >
              Hubungi Tim IT
            </Link>
          </div>
        </div>
      </header>

      {/* Main Login Area */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-[420px]">
          {/* Card Container */}
          <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm p-8 sm:p-10">
            {/* Header info */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Masuk ke Portal
              </h1>
              <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                Gunakan kredensial resmi Skyterra Nusantara untuk mengakses sistem finansial.
              </p>
            </div>

            {/* Error & Success States */}
            {errorMessage && (
              <div className="mb-6 p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                <span className="leading-snug">{errorMessage}</span>
              </div>
            )}

            {isSuccess && (
              <div className="mb-6 p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800 text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
                <span className="leading-snug">Autentikasi berhasil. Mengarahkan ke dashboard...</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Alamat Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@skyterranusantara.co.id"
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0266B3] focus:ring-2 focus:ring-[#0266B3]/15 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Kata Sandi
                  </label>
                  <Link
                    href="#"
                    className="text-xs text-[#0266B3] hover:text-[#014c85] font-medium transition-colors"
                  >
                    Lupa sandi?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan kata sandi"
                    className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0266B3] focus:ring-2 focus:ring-[#0266B3]/15 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-[#0266B3] focus:ring-[#0266B3] cursor-pointer"
                  />
                  <span className="text-sm text-slate-600">Ingat saya</span>
                </label>

                <button
                  type="button"
                  onClick={handleDemoFill}
                  className="text-xs text-slate-500 hover:text-[#0266B3] underline underline-offset-2 transition-colors cursor-pointer"
                >
                  Gunakan akun demo
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 py-2.5 px-4 bg-[#0266B3] hover:bg-[#015291] active:bg-[#014478] text-white font-medium text-sm rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Memproses...</span>
                  </>
                ) : (
                  <>
                    <span>Masuk</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs text-slate-500">
                <span className="bg-white px-3">atau</span>
              </div>
            </div>

            {/* Single Sign On Option */}
            <div className="space-y-2.5">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12 0 12s.7 2.3 1.9 4.7l3.7-2.9z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z"
                  />
                </svg>
                <span>Masuk dengan Google Workspace</span>
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 23 23">
                  <path fill="#f35325" d="M1 1h10v10H1z" />
                  <path fill="#81bc06" d="M12 1h10v10H12z" />
                  <path fill="#05a6f0" d="M1 12h10v10H1z" />
                  <path fill="#ffba08" d="M12 12h10v10H12z" />
                </svg>
                <span>Masuk dengan Microsoft 365</span>
              </button>
            </div>
          </div>

          {/* Under card notice */}
          <p className="text-center text-xs text-slate-500 mt-6">
            Akses portal ini dilindungi dan diawasi oleh standar keamanan sistem internal Skyterra Nusantara.
          </p>
        </div>
      </main>

      {/* Clean Footer */}
      <footer className="w-full border-t border-slate-200 bg-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} PT Skyterra Nusantara Indonesia. Hak Cipta Dilindungi.</span>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-slate-800 transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="hover:text-slate-800 transition-colors">
              Syarat & Ketentuan
            </Link>
            <Link href="#" className="hover:text-slate-800 transition-colors">
              Pusat Keamanan
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

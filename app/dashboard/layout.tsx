"use client";

import React, { useState } from "react";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50/60 flex text-slate-900 font-sans antialiased">
      {/* Sidebar Component */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Navbar */}
        <Navbar
          onToggleMobileMenu={() => setMobileOpen(true)}
          pageTitle="Ringkasan Eksekutif"
        />

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
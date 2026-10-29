import type { ReactNode } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
<div className="grid min-h-screen grid-rows-[auto_auto__1fr_auto]">
  <Header />
  <Navbar/>

  <div className="grid grid-cols-[240px_minmax(0,1fr)]">
    <Sidebar />

    <main className="min-w-0 p-4">
      {children}
    </main>
  </div>

  <Footer />
</div>
  );
}
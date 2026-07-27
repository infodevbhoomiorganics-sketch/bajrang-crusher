import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import AnimatedBackground from "./AnimatedBackground";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

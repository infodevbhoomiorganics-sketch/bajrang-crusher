import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { openWhatsApp, defaultQuoteMessage } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Chat on WhatsApp"
      onClick={() => openWhatsApp(defaultQuoteMessage)}
      className={`btn-glow fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#1ebe5d] px-4 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.6)] transition-all duration-500 sm:bottom-7 sm:right-7 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-16 opacity-0"
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-lg -z-10 animate-pulse-glow" />
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm sm:inline">Chat on WhatsApp</span>
    </button>
  );
}

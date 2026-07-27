import { Link } from "react-router-dom";
import { Mountain, Phone, MapPin, MessageCircle, ArrowUp } from "lucide-react";
import { openWhatsApp, defaultQuoteMessage, DISPLAY_PHONE, ADDRESS, COMPANY } from "@/lib/whatsapp";
import { products, navLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-royal-500 to-electric-500 shadow-glow">
                <Mountain className="h-5 w-5 text-white" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-sm font-bold text-white">Bajrang</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-royal-200/80">Stone Crusher</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Trusted stone crusher and construction material supplier in Kandaghat, Solan,
              Himachal Pradesh. Supplying premium sand, aggregates and pebble stones to builders,
              contractors and infrastructure projects across the region.
            </p>
            <button
              onClick={() => openWhatsApp(defaultQuoteMessage)}
              className="btn-glow mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1ebe5d] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.5)]"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </button>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Products</h3>
            <ul className="mt-4 space-y-2.5">
              {products.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <Link
                    to={
                      p.category === "sand"
                        ? "/products/construction-sand"
                        : p.category === "aggregates"
                        ? "/products/stone-aggregates"
                        : "/products/pebble-stones"
                    }
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`tel:${DISPLAY_PHONE.replace(/\s/g, "")}`} className="flex items-start gap-3 text-sm text-slate-400 hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 text-royal-300" />
                  {DISPLAY_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 text-royal-300" />
                {ADDRESS}
              </li>
            </ul>
            <div className="mt-5 overflow-hidden rounded-2xl gradient-border shadow-glow">
              <iframe
                title="Bajrang Stone Crusher map"
                src="https://www.google.com/maps?q=22MQ%2BGM3%20Kandaghat%20Himachal%20Pradesh%20173222&output=embed"
                width="100%"
                height="140"
                loading="lazy"
                style={{ border: 0, filter: "grayscale(0.4) invert(0.9) hue-rotate(180deg)" }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {COMPANY}. All rights reserved.
          </p>
          <Link
            to="/"
            className="group flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-white"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-full glass transition-transform group-hover:-translate-y-1">
              <ArrowUp className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

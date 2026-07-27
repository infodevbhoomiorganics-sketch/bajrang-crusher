import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mountain, ChevronDown } from "lucide-react";
import { useScrolled } from "@/lib/useScrolled";
import { openWhatsApp, defaultQuoteMessage } from "@/lib/whatsapp";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl px-4 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "glass-strong shadow-glass mx-3 py-2.5 sm:mx-6"
            : "bg-transparent py-3"
        }`}
      >
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-royal-500 to-electric-500 shadow-glow">
            <Mountain className="h-5 w-5 text-white" />
            <span className="absolute inset-0 rounded-xl bg-royal-400/40 blur-md -z-10 animate-pulse-glow" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-bold tracking-tight text-white sm:text-base">
              Bajrang
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-royal-200/80 sm:text-[11px]">
              Stone Crusher
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => setDropdown(link.children ? link.label : null)}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link
                to={link.href}
                className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.href || location.pathname.startsWith(link.href + "/")
                    ? "text-white"
                    : "text-slate-300/80 hover:text-white"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {(location.pathname === link.href || location.pathname.startsWith(link.href + "/")) && (
                <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-royal-400 to-electric-400" />
              )}

              {link.children && dropdown === link.label && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-56 rounded-2xl glass-strong p-2 shadow-glass">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => openWhatsApp(defaultQuoteMessage)}
            className="btn-glow hidden rounded-xl bg-gradient-to-r from-royal-500 to-electric-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] sm:block"
          >
            Get Quote
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl glass text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[78%] max-w-sm flex-col gap-1 overflow-y-auto glass-strong p-6 pt-24 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link, i) => (
            <div key={link.href}>
              <Link
                to={link.href}
                style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                } ${
                  location.pathname === link.href
                    ? "glass text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-400 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            onClick={() => openWhatsApp(defaultQuoteMessage)}
            className="btn-glow mt-4 rounded-xl bg-gradient-to-r from-royal-500 to-electric-500 px-5 py-3 text-base font-semibold text-white shadow-glow"
          >
            Get Quote on WhatsApp
          </button>
        </div>
      </div>
    </header>
  );
}

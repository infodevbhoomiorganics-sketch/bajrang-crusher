import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { openWhatsApp, defaultQuoteMessage } from "@/lib/whatsapp";

type Props = {
  title?: React.ReactNode;
  subtitle?: string;
  image: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export default function CTASection({
  title,
  subtitle,
  image,
  primaryLabel = "Get Quote on WhatsApp",
  secondaryLabel = "View Products",
  secondaryTo = "/products",
}: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal-scale ${visible ? "is-visible" : ""} relative overflow-hidden rounded-3xl shadow-glass`}
        >
          <img src={image} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

          <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {title || (
                <>
                  Ready to order <span className="text-gradient">premium material</span> for your project?
                </>
              )}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-300/85 sm:text-lg">
              {subtitle || "Get a quotation on WhatsApp in minutes. Bulk orders, fast delivery across Kandaghat & Solan."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => openWhatsApp(defaultQuoteMessage)}
                className="btn-glow flex items-center gap-2 rounded-xl bg-gradient-to-r from-royal-500 to-electric-500 px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.04] sm:text-base"
              >
                <MessageCircle className="h-5 w-5" />
                {primaryLabel}
              </button>
              <Link
                to={secondaryTo}
                className="group flex items-center gap-2 rounded-xl glass px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.04] sm:text-base"
              >
                {secondaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

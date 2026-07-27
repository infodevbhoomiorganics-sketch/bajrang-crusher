import { useState } from "react";
import { Plus, MessageCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { useReveal } from "@/lib/useReveal";
import { faqs, IMG } from "@/lib/content";
import { openWhatsApp, defaultQuoteMessage } from "@/lib/whatsapp";

export default function FAQPage() {
  const r = useReveal<HTMLDivElement>();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <SEOHead
        title="FAQ | Bajrang Stone Crusher & Construction Material Supplier in Kandaghat"
        description="Frequently asked questions about Bajrang Stone Crusher — our products, delivery areas, bulk orders, pricing, working hours and more. Find answers about construction sand, aggregates, pebble stones and road base material supply in Himachal Pradesh."
        canonical="/faq"
        schema={schema}
      />
      <PageHero
        title={<>Frequently Asked <span className="text-gradient">Questions</span></>}
        subtitle="Answers to common questions about our products, delivery, bulk orders, pricing and more. Can't find what you need? Message us on WhatsApp."
        image={IMG.modernPlant}
        crumbs={[{ label: "FAQ" }]}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div ref={r.ref} className="space-y-3">
            {faqs.map((faq, i) => {
              const open = openIdx === i;
              return (
                <div key={faq.q} className={`reveal ${r.visible ? "is-visible" : ""} overflow-hidden rounded-2xl glass`} style={{ transitionDelay: `${i * 60}ms` }}>
                  <button onClick={() => setOpenIdx(open ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                    <span className="text-base font-semibold text-white">{faq.q}</span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200 transition-transform duration-500 ${open ? "rotate-45" : ""}`}><Plus className="h-4 w-4" /></span>
                  </button>
                  <div className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden"><p className="px-5 pb-5 text-sm leading-relaxed text-slate-300/85">{faq.a}</p></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl glass p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-slate-300">Still have a question? We reply fast on WhatsApp.</p>
            <button onClick={() => openWhatsApp(defaultQuoteMessage)} className="btn-glow flex items-center gap-2 rounded-xl bg-gradient-to-r from-royal-500 to-electric-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow">
              <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
            </button>
          </div>
        </div>
      </section>

      <CTASection image={IMG.quarry} title={<>Ready to <span className="text-gradient">get started</span>?</>} subtitle="Send your requirement on WhatsApp and we'll quote it directly." secondaryLabel="View Products" secondaryTo="/products" />
    </>
  );
}

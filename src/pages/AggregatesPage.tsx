import { useState } from "react";
import { MessageCircle, Check, Plus, Truck, ShieldCheck, Boxes, Route } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { useReveal } from "@/lib/useReveal";
import { products, IMG } from "@/lib/content";
import { openWhatsApp } from "@/lib/whatsapp";

export default function AggregatesPage() {
  const r = useReveal<HTMLDivElement>();
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const aggProducts = products.filter((p) => p.category === "aggregates");

  const schema = [
    ...aggProducts.map((p) => ({
      "@context": "https://schema.org", "@type": "Product",
      name: p.name, description: p.description,
      brand: { "@type": "Brand", name: "Bajrang Stone Crusher" },
      offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
    })),
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: aggProducts.flatMap((p) => p.faqs).map((f) => ({
        "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <SEOHead
        title="Crushed Stone Aggregates Supplier in Kandaghat, Solan | 10mm, 20mm, 40mm Aggregate"
        description="Crushed stone aggregates (10mm, 20mm, 40mm) and road base material supplied by Bajrang Stone Crusher in Kandaghat, Solan, Himachal Pradesh. Graded aggregates for structural concrete, road construction and infrastructure projects. Order on WhatsApp."
        canonical="/products/stone-aggregates"
        schema={schema}
      />
      <PageHero
        title={<>Stone <span className="text-gradient">Aggregates</span></>}
        subtitle="Crushed stone aggregates in 10mm, 20mm and 40mm grades plus engineered road base material — for structural concrete, road construction and infrastructure projects across Himachal Pradesh."
        image={IMG.quarry}
        crumbs={[{ label: "Products", href: "/products" }, { label: "Stone Aggregates" }]}
      />

      {/* Overview */}
      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div ref={r.ref} className={`reveal-left ${r.visible ? "is-visible" : ""} relative`}>
              <div className="gradient-border relative overflow-hidden rounded-3xl shadow-glass">
                <img src={IMG.hopper} alt="Crushed stone aggregate production at Bajrang Stone Crusher, Kandaghat" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
            <div className={`reveal-right ${r.visible ? "is-visible" : ""}`}>
              <SectionHeading align="left" eyebrow="Aggregate Overview" title={<>Strong aggregates for <span className="text-gradient">structural & road work</span></>} />
              <p className="mt-5 text-base leading-relaxed text-slate-300/85 sm:text-lg">
                Crushed stone aggregates are the backbone of structural concrete and road
                construction. At our Kandaghat plant we mechanically crush hard stone into sharp,
                angular particles that interlock and bond strongly with cement. We produce three
                graded sizes — 10mm, 20mm and 40mm — along with an engineered road base material
                for highway and pavement construction.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Every batch is screened for grading consistency so contractors can design concrete
                mixes and road layers with confidence. We supply aggregates to residential,
                commercial, government and infrastructure projects across Solan, Kandaghat,
                Shimla and the wider Himachal Pradesh region.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: ShieldCheck, title: "Graded", text: "10mm, 20mm, 40mm sizes." },
                  { icon: Route, title: "Road Ready", text: "Engineered road base mix." },
                  { icon: Boxes, title: "Bulk Supply", text: "Project-scale volumes." },
                ].map((c) => (
                  <div key={c.title} className="rounded-2xl glass p-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200"><c.icon className="h-5 w-5" /></span>
                    <h3 className="mt-3 text-sm font-semibold text-white">{c.title}</h3>
                    <p className="mt-1 text-xs text-slate-400">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aggregate products */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Aggregate Products" title={<>Our <span className="text-gradient">aggregate range</span></>} />
          <div className="mt-14 space-y-12">
            {aggProducts.map((p, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={p.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={flip ? "lg:order-2" : ""}>
                    <div className="gradient-border relative overflow-hidden rounded-3xl shadow-glass">
                      <img src={p.image} alt={`${p.name} supplied by Bajrang Stone Crusher`} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                  </div>
                  <div className={flip ? "lg:order-1" : ""}>
                    <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-royal-200">{`0${i + 1}`} · Aggregate</span>
                    <h3 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">{p.name}</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-300/85">{p.longDescription}</p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold text-white">Key Features</h4>
                        <ul className="mt-2 space-y-1.5">{p.features.map((f) => (<li key={f} className="flex items-center gap-2 text-sm text-slate-300"><Check className="h-4 w-4 text-electric-300" />{f}</li>))}</ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Applications</h4>
                        <ul className="mt-2 space-y-1.5">{p.applications.map((a) => (<li key={a} className="flex items-center gap-2 text-sm text-slate-300"><Check className="h-4 w-4 text-electric-300" />{a}</li>))}</ul>
                      </div>
                    </div>
                    <button onClick={() => openWhatsApp(`Hello Bajrang Stone Crusher,\n\nI want to order: ${p.name}\n\nName:\nPhone:\nQuantity:\nDelivery Location:\n\nPlease send quotation.`)} className="btn-glow mt-8 flex items-center gap-2 rounded-xl bg-gradient-to-r from-royal-500 to-electric-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]">
                      <MessageCircle className="h-4 w-4" /> Order {p.name}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading eyebrow="Aggregate FAQ" title={<>Common questions about <span className="text-gradient">stone aggregates</span></>} />
          <div className="mt-12 space-y-3">
            {aggProducts.flatMap((p) => p.faqs).map((faq, i) => {
              const open = faqOpen === i;
              return (
                <div key={faq.q} className="overflow-hidden rounded-2xl glass">
                  <button onClick={() => setFaqOpen(open ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
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
        </div>
      </section>

      <CTASection image={IMG.quarry} title={<>Order <span className="text-gradient">crushed stone aggregates</span> for your project</>} subtitle="Tell us your required size and quantity on WhatsApp — we'll quote and arrange delivery." secondaryLabel="View All Products" secondaryTo="/products" />
    </>
  );
}

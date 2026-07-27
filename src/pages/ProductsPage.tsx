import { Link } from "react-router-dom";
import { MessageCircle, Check, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { useReveal } from "@/lib/useReveal";
import { products, IMG } from "@/lib/content";
import { openWhatsApp } from "@/lib/whatsapp";

export default function ProductsPage() {
  const r = useReveal<HTMLDivElement>();

  const schema = products.map((p) => ({
    "@context": "https://schema.org", "@type": "Product",
    name: p.name, description: p.description,
    brand: { "@type": "Brand", name: "Bajrang Stone Crusher" },
    offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  }));

  return (
    <>
      <SEOHead
        title="Products | Construction Sand, Stone Aggregates & Pebble Stones in Kandaghat, Solan"
        description="Browse our full range of construction materials — construction sand, washed sand, raw sand, crushed stone aggregates (10mm, 20mm, 40mm), pebble stones and road base material. Supplied by Bajrang Stone Crusher in Kandaghat, Solan, Himachal Pradesh. Order on WhatsApp."
        canonical="/products"
        schema={schema}
      />
      <PageHero
        title={<>Our <span className="text-gradient">Products</span></>}
        subtitle="A complete range of construction sand, crushed stone aggregates, pebble stones and road base material — graded, washed and ready for delivery across Himachal Pradesh."
        image={IMG.modernPlant}
        crumbs={[{ label: "Products" }]}
      />

      {/* Intro */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <SectionHeading eyebrow="Construction Materials" title={<>Premium materials for <span className="text-gradient">every construction need</span></>} />
          <p className="mt-6 text-base leading-relaxed text-slate-300/85 sm:text-lg">
            At Bajrang Stone Crusher we produce and supply a full range of construction materials
            from our Kandaghat plant. Whether you need fine construction sand for plastering,
            crushed stone aggregates for structural concrete, pebble stones for landscaping or road
            base material for a highway project, we have the grading, capacity and delivery reach
            to keep your work moving. Every product is screened and inspected before dispatch.
          </p>
        </div>
      </section>

      {/* Product categories */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Construction Sand", to: "/products/construction-sand", image: IMG.heroCrusher, desc: "Construction sand, washed sand and raw sand for plastering, RCC and bulk fill." },
              { title: "Stone Aggregates", to: "/products/stone-aggregates", image: IMG.quarry, desc: "Crushed stone aggregates in 10mm, 20mm and 40mm grades plus road base material." },
              { title: "Pebble Stones", to: "/products/pebble-stones", image: IMG.hopper, desc: "Naturally rounded pebble stones for landscaping, drainage and decoration." },
            ].map((cat) => (
              <Link key={cat.to} to={cat.to} className="group relative overflow-hidden rounded-2xl glass transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                <div className="relative h-56 overflow-hidden">
                  <img src={cat.image} alt={`${cat.title} supplied by Bajrang Stone Crusher`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 font-display text-xl font-bold text-white">{cat.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-slate-400">{cat.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-royal-200">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All products grid */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="All Materials" title={<>Full <span className="text-gradient">product range</span></>} />
          <div ref={r.ref} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <article key={p.id} className={`reveal ${r.visible ? "is-visible" : ""} group relative flex flex-col overflow-hidden rounded-2xl glass transition-all duration-500 hover:-translate-y-2 hover:shadow-glow`} style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <div className="relative h-52 overflow-hidden">
                  <img src={p.image} alt={`${p.name} supplied by Bajrang Stone Crusher in Kandaghat`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-royal-200">{p.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold text-white">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{p.short}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300/80">{p.description}</p>
                  <ul className="mt-4 space-y-1.5">
                    {p.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-300"><Check className="h-3.5 w-3.5 text-electric-300" />{f}</li>
                    ))}
                  </ul>
                  <button onClick={() => openWhatsApp(`Hello Bajrang Stone Crusher,\n\nI would like to order: ${p.name}\n\nName:\nPhone:\nQuantity:\nDelivery Location:\n\nPlease send quotation.`)} className="btn-glow mt-5 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-royal-500 to-electric-500 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]">
                    <MessageCircle className="h-4 w-4" /> Order Material
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection image={IMG.quarry} title={<>Need a specific <span className="text-gradient">grade or quantity</span>?</>} subtitle="Tell us your requirement on WhatsApp and we'll quote it directly." secondaryLabel="Contact Us" secondaryTo="/contact" />
    </>
  );
}

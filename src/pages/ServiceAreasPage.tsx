import { Link } from "react-router-dom";
import { MapPin, Truck, Check, ArrowRight, MessageCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { useReveal } from "@/lib/useReveal";
import { serviceAreas, IMG } from "@/lib/content";
import { openWhatsApp } from "@/lib/whatsapp";

const areaDetails: Record<string, { distance: string; blurb: string }> = {
  Kandaghat: { distance: "0 km (Home base)", blurb: "Our crusher plant is located in Kandaghat — fastest supply and same-day delivery for local projects." },
  Solan: { distance: "~18 km", blurb: "We regularly supply construction sand and aggregates to builders and contractors across Solan." },
  Shimla: { distance: "~60 km", blurb: "Supplying material to residential and commercial projects in and around Shimla." },
  Dharampur: { distance: "~25 km", blurb: "Fast delivery to Dharammur and nearby areas along the Kalka–Shimla highway." },
  Parwanoo: { distance: "~35 km", blurb: "Bulk aggregate and sand supply to industrial and construction projects in Parwanoo." },
  Baddi: { distance: "~55 km", blurb: "Reliable material supply to the Baddi industrial belt for construction and infrastructure work." },
  Nalagarh: { distance: "~60 km", blurb: "Supplying crushed stone aggregates and road base material to Nalagarh and nearby project sites." },
  Sirmaur: { distance: "~70 km", blurb: "Delivery to Sirmaur and surrounding villages for residential and government projects." },
  Kalka: { distance: "~40 km", blurb: "Construction material supply to Kalka and the plains-hills corridor projects." },
  Chail: { distance: "~30 km", blurb: "Supplying sand, aggregates and pebble stones to Chail and nearby hill projects." },
  Kufri: { distance: "~75 km", blurb: "Material delivery to Kufri and the surrounding tourist and residential developments." },
};

export default function ServiceAreasPage() {
  const r = useReveal<HTMLDivElement>();

  const schema = {
    "@context": "https://schema.org", "@type": "LocalBusiness",
    name: "Bajrang Stone Crusher & Bajrang Constructions",
    areaServed: serviceAreas.map((a) => ({ "@type": "City", name: a })),
  };

  return (
    <>
      <SEOHead
        title="Service Areas | Stone Crusher & Material Supply in Kandaghat, Solan, Shimla, Himachal Pradesh"
        description="Bajrang Stone Crusher supplies construction sand, crushed stone aggregates, pebble stones and road base material across Kandaghat, Solan, Shimla, Dharampur, Parwanoo, Baddi, Nalagarh, Sirmaur, Kalka, Chail and Kufri in Himachal Pradesh. Check our delivery areas and order on WhatsApp."
        canonical="/service-areas"
        schema={schema}
      />
      <PageHero
        title={<>Service <span className="text-gradient">Areas</span></>}
        subtitle="Based in Kandaghat, we deliver construction materials across Solan and the wider Himachal Pradesh region. Find your area below and order on WhatsApp."
        image={IMG.quarry}
        crumbs={[{ label: "Service Areas" }]}
      />

      {/* Intro */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <SectionHeading eyebrow="Delivery Coverage" title={<>Supplying across <span className="text-gradient">Himachal Pradesh</span></>} />
          <p className="mt-6 text-base leading-relaxed text-slate-300/85 sm:text-lg">
            Bajrang Stone Crusher is based in Kandaghat, Solan, Himachal Pradesh. From our crusher
            plant we deliver construction sand, washed sand, crushed stone aggregates, pebble stones
            and road base material to builders, contractors and infrastructure projects across the
            region. Being local means faster delivery, fair pricing and a better understanding of
            regional project requirements. Below are the areas we regularly supply to.
          </p>
        </div>
      </section>

      {/* Area cards */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div ref={r.ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area, i) => {
              const d = areaDetails[area];
              return (
                <div key={area} className={`reveal ${r.visible ? "is-visible" : ""} group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow`} style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-royal-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200 transition-transform group-hover:scale-110">
                      <MapPin className="h-6 w-6" />
                    </span>
                    <span className="rounded-full glass px-3 py-1 text-xs font-medium text-royal-200">{d?.distance}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">Stone Crusher Supply in {area}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{d?.blurb}</p>
                  <button
                    onClick={() => openWhatsApp(`Hello Bajrang Stone Crusher,\n\nI need construction material delivered to ${area}.\n\nName:\nPhone:\nMaterial:\nQuantity:\n\nPlease send quotation.`)}
                    className="btn-glow mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-royal-500 to-electric-500 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
                  >
                    <MessageCircle className="h-4 w-4" /> Order for {area}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Truck, title: "Bulk Delivery", text: "We handle high-volume orders for infrastructure, road and commercial projects with scheduled delivery." },
              { icon: Check, title: "Reliable Logistics", text: "Our fleet and local knowledge mean dependable delivery times across the Himachal hills." },
              { icon: MapPin, title: "Local Advantage", text: "Being based in Kandaghat means shorter lead times and better support for nearby projects." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl glass p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200"><c.icon className="h-6 w-6" /></span>
                <h3 className="mt-4 text-base font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection image={IMG.quarry} title={<>Don't see your <span className="text-gradient">area listed</span>?</>} subtitle="Message us on WhatsApp with your delivery location — we'll confirm availability and quote your requirement." secondaryLabel="Contact Us" secondaryTo="/contact" />
    </>
  );
}

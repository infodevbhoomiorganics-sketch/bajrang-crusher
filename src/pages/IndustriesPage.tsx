import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { useReveal } from "@/lib/useReveal";
import { industries, IMG, serviceAreas } from "@/lib/content";

export default function IndustriesPage() {
  const r = useReveal<HTMLDivElement>();

  return (
    <>
      <SEOHead
        title="Industries We Serve | Construction, Road & Infrastructure Material Supply in Himachal"
        description="Bajrang Stone Crusher supplies construction materials to construction, road projects, residential, commercial, government, infrastructure, landscape and contractor projects across Kandaghat, Solan and Himachal Pradesh."
        canonical="/industries"
      />
      <PageHero
        title={<>Industries <span className="text-gradient">We Serve</span></>}
        subtitle="Our construction sand, aggregates, pebble stones and road base material are trusted across residential, commercial, government and infrastructure projects in Himachal Pradesh."
        image={IMG.modernPlant}
        crumbs={[{ label: "Industries" }]}
      />

      {/* Intro */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <SectionHeading eyebrow="Who We Supply" title={<>Materials for <span className="text-gradient">every kind of build</span></>} />
          <p className="mt-6 text-base leading-relaxed text-slate-300/85 sm:text-lg">
            From a single residential plot to a highway stretch, our materials are used across a
            wide range of construction and infrastructure projects. We understand that each
            industry has its own requirements — grading, volume, delivery schedule and quality
            documentation — and we tailor our supply accordingly. Below are the industries we
            regularly serve across Kandaghat, Solan and the wider Himachal Pradesh region.
          </p>
        </div>
      </section>

      {/* Industry cards */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div ref={r.ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <div key={ind.name} className={`reveal ${r.visible ? "is-visible" : ""} group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow`} style={{ transitionDelay: `${(i % 4) * 70}ms` }}>
                <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200 transition-transform duration-500 group-hover:scale-110">
                  <ind.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-5 sm:px-8">
          {[
            { title: "Construction & Residential", text: "We supply construction sand, washed sand and aggregates to home builders, commercial developers and residential projects across Kandaghat and Solan. Our sand is used for plastering, masonry and RCC work, while our aggregates form the structural backbone of columns, beams, slabs and foundations. Builders value the consistent grading that keeps their concrete mixes reliable.", image: IMG.heroCrusher },
            { title: "Road & Infrastructure Projects", text: "For road contractors and infrastructure projects we supply crushed stone aggregates in 10mm, 20mm and 40mm grades along with engineered road base material. Our road base compacts into a dense, stable layer suitable for highways, pavements and access roads. We have the capacity to deliver project-scale volumes on schedule across Himachal Pradesh.", image: IMG.quarry },
            { title: "Government & Public Works", text: "We support government and public works projects with dependable material supply that meets grading and quality expectations. Our aggregates and road base material are used on infrastructure and road projects across the region. We understand the documentation and scheduling requirements of public projects and work closely with contractors to keep supply on track.", image: IMG.plantWide },
            { title: "Landscape & Decoration", text: "Our naturally rounded pebble stones are used by landscape architects, builders and homeowners for garden paths, decorative facades, drainage layers and water features. Available in sizes from 10mm to 60mm, they add a natural, durable finish to residential, commercial and public landscape projects across Solan, Shimla and nearby regions.", image: IMG.hopper },
          ].map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={s.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={flip ? "lg:order-2" : ""}>
                  <div className="gradient-border relative overflow-hidden rounded-3xl shadow-glass">
                    <img src={s.image} alt={`${s.title} material supply by Bajrang Stone Crusher`} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                </div>
                <div className={flip ? "lg:order-1" : ""}>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{s.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-300/85">{s.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service areas */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-3xl glass p-8 sm:p-12">
            <SectionHeading eyebrow="Supply Coverage" title={<>Delivering across <span className="text-gradient">Himachal Pradesh</span></>} subtitle="From our Kandaghat plant we supply material to the following regions:" />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span key={area} className="flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-slate-200">
                  <Check className="h-4 w-4 text-electric-300" /> {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection image={IMG.quarry} title={<>Supplying your <span className="text-gradient">industry</span> with quality material</>} subtitle="Whatever your project, we can supply the right grade and volume. Message us on WhatsApp." secondaryLabel="View Products" secondaryTo="/products" />
    </>
  );
}

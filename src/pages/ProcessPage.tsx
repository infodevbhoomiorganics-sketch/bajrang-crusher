import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Gauge } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { useReveal } from "@/lib/useReveal";
import { processSteps, IMG } from "@/lib/content";

export default function ProcessPage() {
  const r = useReveal<HTMLDivElement>();

  return (
    <>
      <SEOHead
        title="Manufacturing Process | Stone Crushing & Screening in Kandaghat, Himachal Pradesh"
        description="Learn how Bajrang Stone Crusher produces premium construction materials — from mining and crushing to screening, quality checks, loading and delivery across Kandaghat, Solan and Himachal Pradesh."
        canonical="/process"
      />
      <PageHero
        title={<>Our <span className="text-gradient">Process</span></>}
        subtitle="A controlled, inspected process that turns raw stone into graded, project-ready construction material at our Kandaghat plant."
        image={IMG.heroCrusher}
        crumbs={[{ label: "Process" }]}
      />

      {/* Intro */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <SectionHeading eyebrow="How We Produce" title={<>From raw stone to <span className="text-gradient">project-ready material</span></>} />
          <p className="mt-6 text-base leading-relaxed text-slate-300/85 sm:text-lg">
            Producing quality construction material is a multi-stage process that demands the right
            machinery, consistent grading and careful inspection. At Bajrang Stone Crusher we follow
            a six-step process — mining, crushing, screening, quality check, loading and delivery —
            to ensure every load that leaves our Kandaghat plant meets the specifications our
            customers rely on. Here is how each stage works.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div ref={r.ref} className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-royal-500/0 via-royal-500/40 to-electric-500/0 lg:block" />
            <div className="space-y-10 lg:space-y-0">
              {processSteps.map((step, i) => {
                const flip = i % 2 === 1;
                return (
                  <div key={step.title} className="relative lg:grid lg:grid-cols-2 lg:gap-12">
                    <div className={`reveal ${r.visible ? "is-visible" : ""} ${flip ? "lg:col-start-2" : ""}`} style={{ transitionDelay: `${i * 80}ms` }}>
                      <div className="group relative overflow-hidden rounded-2xl glass transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                        <div className="relative h-48 overflow-hidden">
                          <img src={step.image} alt={`${step.title} stage at Bajrang Stone Crusher Kandaghat`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                          <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-r from-royal-500 to-electric-500 text-sm font-bold text-white shadow-glow">{i + 1}</span>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3">
                            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200"><step.icon className="h-6 w-6" /></span>
                            <h3 className="font-display text-xl font-bold text-white">{step.title}</h3>
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.text}</p>
                        </div>
                      </div>
                    </div>
                    <span className="absolute left-1/2 top-10 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-royal-400 to-electric-400 ring-4 ring-slate-950 lg:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quality assurance */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl glass p-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200"><ShieldCheck className="h-6 w-6" /></span>
              <h3 className="mt-4 font-display text-xl font-bold text-white">Quality Assurance</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Every batch of material is inspected for grading, silt content and consistency before
                it is cleared for dispatch. This means the sand or aggregate that arrives on your site
                is the same grade you ordered — no surprises, no rejections, no wasted time.
              </p>
            </div>
            <div className="rounded-2xl glass p-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200"><Gauge className="h-6 w-6" /></span>
              <h3 className="mt-4 font-display text-xl font-bold text-white">Consistent Grading</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Our crushing and screening setup is calibrated to produce consistent particle sizes
                batch after batch. Contractors can design concrete mixes and road layers knowing the
                material will perform the same way every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection image={IMG.quarry} title={<>Need a <span className="text-gradient">specific grade</span> for your project?</>} subtitle="Tell us your specification on WhatsApp and we'll produce and deliver it." secondaryLabel="View Products" secondaryTo="/products" />
    </>
  );
}

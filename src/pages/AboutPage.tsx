import { Link } from "react-router-dom";
import { Target, Eye, Award, ShieldCheck, Truck, Users, ArrowRight, Check, MessageCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { useReveal } from "@/lib/useReveal";
import { useCountUp } from "@/lib/useCountUp";
import { stats, IMG, serviceAreas } from "@/lib/content";
import { openWhatsApp, defaultQuoteMessage } from "@/lib/whatsapp";

function StatCounter({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="text-center">
      <p className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">{count}<span className="text-royal-300">{suffix}</span></p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400 sm:text-sm">{label}</p>
    </div>
  );
}

export default function AboutPage() {
  const r1 = useReveal<HTMLDivElement>();
  const r2 = useReveal<HTMLDivElement>();
  const r3 = useReveal<HTMLDivElement>();

  const schema = {
    "@context": "https://schema.org", "@type": "AboutPage",
    name: "About Bajrang Stone Crusher", url: "https://bajrangcrusher.in/about",
  };

  return (
    <>
      <SEOHead
        title="About Us | Bajrang Stone Crusher & Bajrang Constructions, Kandaghat, Solan"
        description="Learn about Bajrang Stone Crusher & Bajrang Constructions — a trusted stone crusher and construction material supplier based in Kandaghat, Solan, Himachal Pradesh. Over a decade of supplying premium sand, aggregates and pebble stones to builders, contractors and infrastructure projects."
        canonical="/about"
        schema={schema}
      />
      <PageHero
        title={<>About <span className="text-gradient">Bajrang Stone Crusher</span></>}
        subtitle="A trusted stone crusher and construction material supplier based in Kandaghat, Solan, Himachal Pradesh."
        image={IMG.plantWide}
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div ref={r1.ref} className={`reveal-left ${r1.visible ? "is-visible" : ""} relative`}>
              <div className="gradient-border relative overflow-hidden rounded-3xl shadow-glass">
                <img src={IMG.heroCrusher} alt="Bajrang Stone Crusher plant operations in Kandaghat, Himachal Pradesh" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="absolute -bottom-5 -right-3 animate-float rounded-2xl glass-strong px-5 py-3 shadow-glow">
                <p className="text-xs uppercase tracking-widest text-royal-200/80">Established</p>
                <p className="font-display text-lg font-bold text-white">Kandaghat, HP</p>
              </div>
            </div>
            <div className={`reveal-right ${r1.visible ? "is-visible" : ""}`}>
              <SectionHeading align="left" eyebrow="Our Story" title={<>Trusted supply, built on <span className="text-gradient">local expertise</span></>} />
              <p className="mt-5 text-base leading-relaxed text-slate-300/85 sm:text-lg">
                Bajrang Stone Crusher & Bajrang Constructions is a trusted supplier of premium
                construction materials based in Kandaghat, Solan, Himachal Pradesh. The company
                specializes in high-quality construction sand, pebble stones, and crushed stone
                aggregates for residential, commercial, infrastructure, and road construction
                projects.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                With a strong focus on quality, timely delivery, and customer satisfaction, the
                company serves contractors, builders, and engineering projects across the region.
                Our Kandaghat location gives us deep familiarity with Himachal terrain, local
                project requirements and the logistics of supplying material across Solan, Shimla
                and the surrounding hills.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Over the years we have built a reputation for consistent grading, fair pricing and
                dependable delivery — the three things that matter most to a contractor on a
                tight schedule. Every batch that leaves our plant is screened and inspected so the
                material you receive on site is ready to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div ref={r2.ref} className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Our Mission", text: "To deliver consistent, high-grade construction materials on time, every time — so our customers can build with confidence and keep their projects on schedule." },
              { icon: Eye, title: "Our Vision", text: "To be the most trusted stone crusher and construction material supplier in Himachal Pradesh, known for quality, reliability and fair dealing." },
              { icon: Award, title: "Our Values", text: "Quality without compromise, honest pricing, dependable delivery and long-term relationships with every builder and contractor we serve." },
            ].map((item, i) => (
              <div key={item.title} className={`reveal ${r2.visible ? "is-visible" : ""} rounded-2xl glass p-6 transition-transform hover:-translate-y-1`} style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200"><item.icon className="h-6 w-6" /></span>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-3xl glass p-8 sm:p-12">
            <SectionHeading eyebrow="By the Numbers" title={<>A track record built on <span className="text-gradient">trust</span></>} />
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} start={r2.visible} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Why Choose Bajrang Stone Crusher" title={<>The advantages of a <span className="text-gradient">local, reliable supplier</span></>} />
          <div ref={r3.ref} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Consistent Quality", text: "Screened and graded material that meets construction specifications batch after batch." },
              { icon: Truck, title: "Dependable Delivery", text: "A fleet and logistics setup built for the hills — we deliver across Kandaghat, Solan and nearby regions on schedule." },
              { icon: Users, title: "Experienced Team", text: "A crew that understands Himachal terrain, construction requirements and contractor expectations." },
              { icon: Award, title: "Trusted by Professionals", text: "Preferred by civil contractors, builders and engineering projects across the region." },
              { icon: Target, title: "Fair, Transparent Pricing", text: "Direct-from-crusher rates with no hidden charges. You get honest quotes over WhatsApp." },
              { icon: Eye, title: "Local Expertise", text: "Based in Kandaghat, we understand regional material needs and delivery challenges better than distant suppliers." },
            ].map((c, i) => (
              <div key={c.title} className={`reveal ${r3.visible ? "is-visible" : ""} group rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow`} style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200 transition-transform group-hover:scale-110"><c.icon className="h-6 w-6" /></span>
                <h3 className="mt-4 text-base font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-3xl glass p-8 sm:p-12">
            <SectionHeading eyebrow="Service Areas" title={<>Supplying across <span className="text-gradient">Himachal Pradesh</span></>} subtitle="From our Kandaghat plant we deliver to the following regions:" />
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

      <CTASection image={IMG.quarry} title={<>Want to work with a <span className="text-gradient">dependable local supplier</span>?</>} subtitle="Message us on WhatsApp — we'll quote your requirement and arrange delivery." secondaryLabel="View Products" secondaryTo="/products" />
    </>
  );
}

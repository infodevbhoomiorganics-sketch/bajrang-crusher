import { Link } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft, ChevronRight, MessageCircle, Images, ArrowRight,
  Phone, MapPin, Clock, Star, Quote, Plus, Check, Mountain,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { useReveal } from "@/lib/useReveal";
import { useCountUp } from "@/lib/useCountUp";
import {
  heroSlides, whyCards, products, processSteps, industries,
  testimonials, faqs, stats, galleryImages, serviceAreas, IMG,
} from "@/lib/content";
import { openWhatsApp, defaultQuoteMessage, DISPLAY_PHONE, ADDRESS } from "@/lib/whatsapp";

const AUTOPLAY_MS = 6000;

function StatCounter({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="text-center">
      <p className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {count}<span className="text-royal-300">{suffix}</span>
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400 sm:text-sm">{label}</p>
    </div>
  );
}

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const timerRef = useRef<number | null>(null);
  const aboutReveal = useReveal<HTMLDivElement>();
  const whyReveal = useReveal<HTMLDivElement>();
  const productReveal = useReveal<HTMLDivElement>();
  const processReveal = useReveal<HTMLDivElement>();
  const indReveal = useReveal<HTMLDivElement>();
  const testReveal = useReveal<HTMLDivElement>();

  const next = useCallback(() => setIndex((i) => (i + 1) % heroSlides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(next, AUTOPLAY_MS);
    return () => { if (timerRef.current) window.clearInterval(timerRef.current); };
  }, [paused, next]);

  const schema = [
    {
      "@context": "https://schema.org", "@type": "LocalBusiness",
      name: "Bajrang Stone Crusher & Bajrang Constructions",
      description: "Trusted stone crusher and construction material supplier in Kandaghat, Solan, Himachal Pradesh.",
      telephone: "+919736000077",
      address: { "@type": "PostalAddress", streetAddress: "22MQ+GM3, Kandaghat", addressLocality: "Kandaghat", addressRegion: "Himachal Pradesh", postalCode: "173222", addressCountry: "IN" },
      geo: { "@type": "GeoCoordinates", latitude: 31.0335, longitude: 77.1167 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:00", closes: "19:00" }],
      priceRange: "₹₹",
    },
    { "@context": "https://schema.org", "@type": "WebSite", name: "Bajrang Stone Crusher", url: "https://bajrangcrusher.in/" },
  ];

  return (
    <>
      <SEOHead
        title="Bajrang Stone Crusher & Bajrang Constructions | Stone Crusher in Kandaghat, Solan, Himachal Pradesh"
        description="Premium stone crusher and construction material supplier in Kandaghat, Solan, Himachal Pradesh. Supplying construction sand, washed sand, crushed stone aggregates (10mm, 20mm, 40mm), pebble stones and road base material to builders, contractors and infrastructure projects. Get a quote on WhatsApp."
        canonical="/"
        schema={schema}
      />

      {/* ============ HERO ============ */}
      <section
        id="home"
        className="relative flex min-h-[100svh] items-center overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute inset-0 -z-10">
          {heroSlides.map((slide, i) => (
            <div key={slide.title} className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${i === index ? "opacity-100" : "opacity-0"}`}>
              <img src={slide.image} alt={slide.title} loading={i === 0 ? "eager" : "lazy"} className={`h-full w-full object-cover transition-transform duration-[8000ms] ease-out ${i === index ? "scale-110" : "scale-100"}`} />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/40" />
            </div>
          ))}
        </div>

        <div className="mx-auto w-full max-w-7xl px-5 pt-28 pb-20 sm:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-royal-200">
              <span className="h-2 w-2 rounded-full bg-royal-400 animate-pulse-glow" />
              Kandaghat · Solan · Himachal Pradesh
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] text-white sm:text-6xl md:text-7xl">
              <span className="text-gradient animate-gradient-pan">Premium Stone Crusher</span>
              <span className="mt-2 block text-2xl font-semibold text-slate-200/90 sm:text-3xl md:text-4xl">
                & Construction Material Supplier in Himachal Pradesh
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300/85 sm:text-lg">
              Bajrang Stone Crusher supplies premium construction sand, crushed stone aggregates
              and pebble stones to builders, contractors and infrastructure projects across
              Kandaghat, Solan and the wider Himachal Pradesh region.
            </p>

            <div className="mt-8 min-h-[3.5rem]">
              <p key={index} className="text-lg font-medium text-white">
                <span className="text-royal-300">{heroSlides[index].title}</span>
                <span className="mx-2 text-slate-500">·</span>
                <span className="text-slate-300/80">{heroSlides[index].subtitle}</span>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <button onClick={() => openWhatsApp(defaultQuoteMessage)} className="btn-glow group flex items-center gap-2 rounded-xl bg-gradient-to-r from-royal-500 to-electric-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.04] sm:text-base">
                <MessageCircle className="h-5 w-5" /> Request Quote
              </button>
              <Link to="/gallery" className="btn-glow group flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.04] sm:text-base">
                <Images className="h-5 w-5" /> Watch Gallery
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <button aria-label="Previous slide" onClick={prev} className="grid h-10 w-10 place-items-center rounded-full glass text-white transition-colors hover:bg-white/10">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button aria-label="Next slide" onClick={next} className="grid h-10 w-10 place-items-center rounded-full glass text-white transition-colors hover:bg-white/10">
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="flex flex-1 max-w-xs gap-1.5">
                {heroSlides.map((_, i) => (
                  <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
                    <span className={`block h-full bg-gradient-to-r from-royal-400 to-electric-400 transition-all duration-300 ${i === index ? "w-full" : "w-0"}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 xl:block">
          <div className="relative h-[28rem] w-[20rem]">
            <div className="absolute right-0 top-4 w-56 animate-float rounded-2xl glass-strong p-4 shadow-glass">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-royal-500/20 text-royal-300"><MessageCircle className="h-5 w-5" /></span>
                <div><p className="text-sm font-semibold text-white">24/7 Inquiry</p><p className="text-xs text-slate-400">WhatsApp ordering</p></div>
              </div>
            </div>
            <div className="absolute bottom-8 left-0 w-60 animate-float-slow rounded-2xl glass-strong p-4 shadow-glass [animation-delay:-3s]">
              <p className="text-xs uppercase tracking-widest text-royal-200/80">Bulk Supply</p>
              <p className="mt-1 text-lg font-bold text-white">500+ Projects</p>
              <p className="text-xs text-slate-400">delivered across Himachal</p>
            </div>
          </div>
        </div>

        <Link to="/about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition-colors hover:text-white sm:flex">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="flex h-9 w-5 justify-center rounded-full border border-white/20 p-1"><span className="h-2 w-1 rounded-full bg-white/70 animate-bounce" /></span>
        </Link>
      </section>

      {/* ============ INTRO + STATS ============ */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div ref={aboutReveal.ref} className={`reveal-left ${aboutReveal.visible ? "is-visible" : ""} relative`}>
              <div className="gradient-border relative overflow-hidden rounded-3xl shadow-glass">
                <img src={IMG.plantWide} alt="Bajrang Stone Crusher plant in Kandaghat, Himachal Pradesh" loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-4 animate-float rounded-2xl glass-strong p-5 shadow-glow sm:-right-8">
                <p className="font-display text-3xl font-bold text-gradient">12+</p>
                <p className="text-xs text-slate-300">Years of trusted supply</p>
              </div>
            </div>

            <div className={`reveal-right ${aboutReveal.visible ? "is-visible" : ""}`}>
              <SectionHeading align="left" eyebrow="About Bajrang Stone Crusher" title={<>Trusted stone crusher & <span className="text-gradient">construction material supplier</span> in Himachal Pradesh</>} />
              <p className="mt-5 text-base leading-relaxed text-slate-300/85 sm:text-lg">
                Bajrang Stone Crusher & Bajrang Constructions is a trusted supplier of premium
                construction materials based in Kandaghat, Solan, Himachal Pradesh. We specialize
                in high-quality construction sand, pebble stones, and crushed stone aggregates for
                residential, commercial, infrastructure, and road construction projects.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                With a strong focus on quality, timely delivery, and customer satisfaction, we
                serve contractors, builders, and engineering projects across Kandaghat, Solan,
                Shimla and the surrounding region.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 rounded-2xl glass p-6 sm:grid-cols-4">
                {stats.map((s) => <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} start={aboutReveal.visible} />)}
              </div>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">
                Read Our Full Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Why Choose Us" title={<>Built on <span className="text-gradient">strength, trust</span> and consistency</>} subtitle="Every load we deliver is graded, inspected and dispatched with care — so your project never waits." />
          <div ref={whyReveal.ref} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card, i) => (
              <div key={card.title} className={`reveal ${whyReveal.visible ? "is-visible" : ""} group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow`} style={{ transitionDelay: `${(i % 4) * 80}ms` }}>
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-royal-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <card.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{card.text}</p>
                <span className="mt-4 block h-px w-0 bg-gradient-to-r from-royal-400 to-electric-400 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Featured Products" title={<>Premium <span className="text-gradient">materials</span> for every build</>} subtitle="From fine construction sand to coarse 40mm aggregate and road base — graded, washed and ready to ship." />
          <div ref={productReveal.ref} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p, i) => (
              <article key={p.id} className={`reveal ${productReveal.visible ? "is-visible" : ""} group relative flex flex-col overflow-hidden rounded-2xl glass transition-all duration-500 hover:-translate-y-2 hover:shadow-glow`} style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
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
          <div className="mt-10 text-center">
            <Link to="/products" className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">
              View All Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Manufacturing Process" title={<>From <span className="text-gradient">rock to road</span> — step by step</>} subtitle="A controlled, inspected process that turns raw stone into graded, project-ready material at our Kandaghat plant." />
          <div ref={processReveal.ref} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <div key={step.title} className={`reveal ${processReveal.visible ? "is-visible" : ""} group relative overflow-hidden rounded-2xl glass transition-all duration-500 hover:-translate-y-2 hover:shadow-glow`} style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <div className="relative h-40 overflow-hidden">
                  <img src={step.image} alt={`${step.title} at Bajrang Stone Crusher Kandaghat`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-r from-royal-500 to-electric-500 text-sm font-bold text-white shadow-glow">{i + 1}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200"><step.icon className="h-5 w-5" /></span>
                    <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/process" className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">
              See Full Process <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Industries We Serve" title={<>Powering <span className="text-gradient">every kind</span> of build</>} subtitle="Our materials are trusted across residential, commercial, government and infrastructure projects in Himachal Pradesh." />
          <div ref={indReveal.ref} className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <div key={ind.name} className={`reveal ${indReveal.visible ? "is-visible" : ""} group relative overflow-hidden rounded-2xl glass p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-glow`} style={{ transitionDelay: `${(i % 4) * 70}ms` }}>
                <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200 transition-transform duration-500 group-hover:scale-110">
                  <ind.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-white">{ind.name}</h3>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/industries" className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">
              Explore Industries <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SERVICE AREAS ============ */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-3xl glass p-8 sm:p-12">
            <SectionHeading eyebrow="Delivery Areas" title={<>Serving <span className="text-gradient">Himachal Pradesh</span> and nearby regions</>} subtitle="Based in Kandaghat, we deliver construction materials across Solan and surrounding areas." />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span key={area} className="flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-slate-200">
                  <MapPin className="h-4 w-4 text-royal-300" /> {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Testimonials" title={<>Trusted by <span className="text-gradient">builders & contractors</span></>} />
          <div ref={testReveal.ref} className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`reveal ${testReveal.visible ? "is-visible" : ""} relative overflow-hidden rounded-2xl glass-strong p-6 shadow-glass sm:p-8`} style={{ transitionDelay: `${(i % 2) * 100}ms` }}>
                <Quote className="absolute -top-2 left-5 h-14 w-14 text-royal-500/15" />
                <div className="relative">
                  <div className="flex gap-1">{Array.from({ length: t.rating }).map((_, j) => (<Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />))}</div>
                  <p className="mt-4 text-base leading-relaxed text-slate-100">"{t.text}"</p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-royal-500 to-electric-500 font-display text-base font-bold text-white">{t.name.charAt(0)}</span>
                    <div><p className="font-semibold text-white">{t.name}</p><p className="text-sm text-slate-400">{t.role}</p></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY PREVIEW ============ */}
      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Gallery Preview" title={<>A look at our <span className="text-gradient">crusher & sites</span></>} />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {galleryImages.slice(0, 8).map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl glass">
                <img src={img.src} alt={img.alt} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                <span className="absolute left-3 top-3 rounded-full glass-strong px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-royal-200">{img.category}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/gallery" className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">
              View Full Gallery <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ PREVIEW ============ */}
      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading eyebrow="FAQ" title={<>Questions, <span className="text-gradient">answered</span></>} />
          <div className="mt-12 space-y-3">
            {faqs.slice(0, 4).map((faq, i) => {
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
          <div className="mt-8 text-center">
            <Link to="/faq" className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">
              See All FAQs <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTASection image={IMG.quarry} />

      {/* ============ CONTACT PREVIEW ============ */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 rounded-3xl glass p-8 sm:p-12 lg:grid-cols-3">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">Contact Us</h3>
              <p className="mt-2 text-sm text-slate-400">Reach us directly — we respond fast on WhatsApp.</p>
              <div className="mt-6 space-y-4">
                <a href={`tel:${DISPLAY_PHONE.replace(/\s/g, "")}`} className="group flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200"><Phone className="h-5 w-5" /></span>
                  <div><p className="text-xs uppercase tracking-wider text-slate-400">Phone</p><p className="text-sm font-semibold text-white">{DISPLAY_PHONE}</p></div>
                </a>
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200"><MapPin className="h-5 w-5" /></span>
                  <div><p className="text-xs uppercase tracking-wider text-slate-400">Address</p><p className="text-sm font-semibold text-white">{ADDRESS}</p></div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200"><Clock className="h-5 w-5" /></span>
                  <div><p className="text-xs uppercase tracking-wider text-slate-400">Hours</p><p className="text-sm font-semibold text-white">Mon – Sat · 8 AM – 7 PM</p></div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 overflow-hidden rounded-2xl gradient-border shadow-glow">
              <iframe title="Bajrang Stone Crusher location" src="https://www.google.com/maps?q=22MQ%2BGM3%20Kandaghat%20Himachal%20Pradesh%20173222&output=embed" width="100%" height="260" loading="lazy" style={{ border: 0, filter: "grayscale(0.4) invert(0.9) hue-rotate(180deg)" }} referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">
              Go to Contact Page <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

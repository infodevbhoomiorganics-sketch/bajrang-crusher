import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { useReveal } from "@/lib/useReveal";
import { galleryImages, galleryCategories, IMG } from "@/lib/content";

export default function GalleryPage() {
  const r = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <SEOHead
        title="Gallery | Stone Crusher Plant & Quarry Photos in Kandaghat, Himachal Pradesh"
        description="View photos of Bajrang Stone Crusher's plant, quarry operations, crushing machinery and construction material supply across Kandaghat, Solan and Himachal Pradesh. See our crusher site, aggregate production and project supply in action."
        canonical="/gallery"
      />
      <PageHero
        title={<>Our <span className="text-gradient">Gallery</span></>}
        subtitle="A visual look at our crusher plant, quarry operations, machinery and material supply across Kandaghat and the wider Himachal Pradesh region."
        image={IMG.quarry}
        crumbs={[{ label: "Gallery" }]}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Photos" title={<>Crusher plant, quarry & <span className="text-gradient">material supply</span></>} />

          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {galleryCategories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${filter === cat ? "bg-gradient-to-r from-royal-500 to-electric-500 text-white shadow-glow" : "glass text-slate-300 hover:text-white"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div ref={r.ref} className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {filtered.map((img, i) => (
              <button key={img.src + i} onClick={() => setLightbox(img.src)} className={`reveal-scale ${r.visible ? "is-visible" : ""} group relative block w-full overflow-hidden rounded-2xl glass`} style={{ transitionDelay: `${(i % 6) * 70}ms` }}>
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                <span className="absolute left-3 top-3 rounded-full glass-strong px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-royal-200">{img.category}</span>
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full glass-strong text-white opacity-0 transition-all duration-300 group-hover:opacity-100"><ZoomIn className="h-4 w-4" /></span>
                <p className="absolute bottom-3 left-3 right-3 text-left text-xs text-slate-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">{img.alt}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/90 p-4 backdrop-blur-md" onClick={() => setLightbox(null)}>
          <button aria-label="Close" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full glass-strong text-white transition-colors hover:bg-white/10" onClick={() => setLightbox(null)}>
            <X className="h-5 w-5" />
          </button>
          <img src={lightbox} alt="Gallery preview" className="max-h-[85vh] max-w-full rounded-2xl shadow-glow" />
        </div>
      )}

      <CTASection image={IMG.quarry} title={<>Want to see our <span className="text-gradient">crusher site</span> in person?</>} subtitle="Visit our Kandaghat plant — message us on WhatsApp to arrange a time." secondaryLabel="Contact Us" secondaryTo="/contact" />
    </>
  );
}

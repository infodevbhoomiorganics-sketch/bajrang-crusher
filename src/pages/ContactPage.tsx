import { useState } from "react";
import { Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { useReveal } from "@/lib/useReveal";
import { products, IMG } from "@/lib/content";
import { openWhatsApp, DISPLAY_PHONE, ADDRESS } from "@/lib/whatsapp";

export default function ContactPage() {
  const r = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", phone: "", material: products[0].name, quantity: "", location: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Bajrang Stone Crusher,

Name: ${form.name}
Phone: ${form.phone}
Material: ${form.material}
Quantity: ${form.quantity}
Delivery Location: ${form.location}

Please send quotation.`;
    openWhatsApp(msg);
  };

  const inputCls = "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-royal-400/60 focus:ring-2 focus:ring-royal-500/30";

  return (
    <>
      <SEOHead
        title="Contact Us | Bajrang Stone Crusher, Kandaghat, Solan, Himachal Pradesh"
        description="Contact Bajrang Stone Crusher & Bajrang Constructions for construction sand, aggregates, pebble stones and road base material in Kandaghat, Solan, Himachal Pradesh. Call +91 97360 00077 or send an inquiry on WhatsApp. Open Mon–Sat, 8 AM–7 PM."
        canonical="/contact"
      />
      <PageHero
        title={<>Contact <span className="text-gradient">Us</span></>}
        subtitle="Get a quotation on WhatsApp in minutes. Fill in your requirement and we'll open WhatsApp with your details ready to send."
        image={IMG.hopper}
        crumbs={[{ label: "Contact" }]}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div ref={r.ref} className="grid gap-6 lg:grid-cols-2">
            {/* Info */}
            <div className={`reveal-left ${r.visible ? "is-visible" : ""} space-y-4`}>
              <div className="rounded-2xl glass p-6">
                <h3 className="font-display text-xl font-bold text-white">Reach us directly</h3>
                <p className="mt-2 text-sm text-slate-400">We're based in Kandaghat, Solan, Himachal Pradesh and respond fast on WhatsApp.</p>
                <div className="mt-6 space-y-4">
                  <a href={`tel:${DISPLAY_PHONE.replace(/\s/g, "")}`} className="group flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200 transition-transform group-hover:scale-110"><Phone className="h-5 w-5" /></span>
                    <div><p className="text-xs uppercase tracking-wider text-slate-400">Phone / WhatsApp</p><p className="text-sm font-semibold text-white">{DISPLAY_PHONE}</p></div>
                  </a>
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200"><MapPin className="h-5 w-5" /></span>
                    <div><p className="text-xs uppercase tracking-wider text-slate-400">Address</p><p className="text-sm font-semibold text-white">{ADDRESS}</p></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-electric-500/20 text-royal-200"><Clock className="h-5 w-5" /></span>
                    <div><p className="text-xs uppercase tracking-wider text-slate-400">Working Hours</p><p className="text-sm font-semibold text-white">Mon – Sat · 8:00 AM – 7:00 PM</p></div>
                  </div>
                </div>
              </div>

              <div className="gradient-border overflow-hidden rounded-2xl shadow-glow">
                <iframe title="Bajrang Stone Crusher location map" src="https://www.google.com/maps?q=22MQ%2BGM3%20Kandaghat%20Himachal%20Pradesh%20173222&output=embed" width="100%" height="260" loading="lazy" style={{ border: 0, filter: "grayscale(0.4) invert(0.9) hue-rotate(180deg)" }} referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className={`reveal-right ${r.visible ? "is-visible" : ""} rounded-2xl glass-strong p-6 shadow-glass sm:p-8`}>
              <h3 className="font-display text-xl font-bold text-white">Send an inquiry</h3>
              <p className="mt-1 text-sm text-slate-400">We'll redirect you to WhatsApp with the message pre-filled. No data is stored.</p>

              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-300">Name</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-300">Phone</label>
                    <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone" className={inputCls} />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-300">Material</label>
                    <select value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })} className={inputCls}>
                      {products.map((p) => (<option key={p.id} value={p.name} className="bg-slate-900">{p.name}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-300">Quantity</label>
                    <input value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} placeholder="e.g. 50 tonne" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-300">Delivery Location</label>
                  <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="Site / town" className={inputCls} />
                </div>
                <button type="submit" className="btn-glow flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-royal-500 to-electric-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]">
                  <MessageCircle className="h-5 w-5" /> Send on WhatsApp <Send className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-slate-500">No data is stored — your details go straight to WhatsApp.</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

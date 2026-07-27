import { useEffect } from "react";

type Props = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: object | object[];
};

const BASE = "https://bajrangcrusher.in";
const DEFAULT_OG = "/hero-crusher.png";

export default function SEOHead({ title, description, canonical, ogImage, schema }: Props) {
  useEffect(() => {
    document.title = title;

    const set = (sel: string, attr: string, val: string) => {
      let el = document.querySelector<HTMLMetaElement>(sel);
      if (!el) {
        el = document.createElement("meta") as HTMLMetaElement;
        const attrName = attr.split("=")[0];
        const attrVal = attr.split("=")[1]?.replace(/"/g, "") || "";
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", val);
    };

    set('meta[name="description"]', 'name="description"', description);
    set('meta[property="og:title"]', 'property="og:title"', title);
    set('meta[property="og:description"]', 'property="og:description"', description);
    set('meta[property="og:image"]', 'property="og:image"', `${BASE}${ogImage || DEFAULT_OG}`);
    set('meta[property="og:url"]', 'property="og:url"', `${BASE}${canonical || ""}`);
    set('meta[name="twitter:title"]', 'name="twitter:title"', title);
    set('meta[name="twitter:description"]', 'name="twitter:description"', description);

    let canonEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonEl) {
      canonEl = document.createElement("link") as HTMLLinkElement;
      canonEl.rel = "canonical";
      document.head.appendChild(canonEl);
    }
    canonEl.href = `${BASE}${canonical || ""}`;

    const prev = document.getElementById("dynamic-schema");
    if (prev) prev.remove();
    if (schema) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = "dynamic-schema";
      s.text = JSON.stringify(Array.isArray(schema) ? schema : [schema]);
      document.head.appendChild(s);
    }
  }, [title, description, canonical, ogImage, schema]);

  return null;
}

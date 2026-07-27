import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; href?: string };

const BASE = "https://bajrangcrusher.in";

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  useEffect(() => {
    const itemList = [
      { name: "Home", url: `${BASE}/` },
      ...crumbs
        .filter((c) => c.href)
        .map((c) => ({ name: c.label, url: `${BASE}${c.href}` })),
    ];
    const last = crumbs[crumbs.length - 1];
    if (last && !last.href) {
      itemList.push({ name: last.label, url: `${BASE}/${window.location.pathname.split("/").filter(Boolean).join("/")}` });
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: itemList.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    };

    let el = document.getElementById("breadcrumb-schema");
    if (!el) {
      el = document.createElement("script");
      el.id = "breadcrumb-schema";
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
    return () => {
      document.getElementById("breadcrumb-schema")?.remove();
    };
  }, [crumbs]);

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
      <Link to="/" className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors">
        <Home className="h-3.5 w-3.5" />
        Home
      </Link>
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
          {crumb.href && i < crumbs.length - 1 ? (
            <Link to={crumb.href} className="text-slate-400 hover:text-white transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-royal-200">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

import type { Crumb } from "./Breadcrumb";
import Breadcrumb from "./Breadcrumb";

type Props = {
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  crumbs: Crumb[];
};

export default function PageHero({ title, subtitle, image, crumbs }: Props) {
  return (
    <section className="relative flex min-h-[42vh] items-end overflow-hidden pt-32 pb-12 sm:pt-36 sm:pb-16">
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Breadcrumb crumbs={crumbs} />
        <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-slate-300/85 sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        el.style.background = `radial-gradient(600px circle at ${x}% ${y}%, rgba(234,150,19,0.10), transparent 60%)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-30" />

      <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-royal-600/25 blur-[120px] animate-aurora" />
      <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-electric-500/20 blur-[120px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-[120px] animate-aurora [animation-delay:-12s]" />

      <div ref={glowRef} className="absolute inset-0 transition-[background] duration-300" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />
    </div>
  );
}

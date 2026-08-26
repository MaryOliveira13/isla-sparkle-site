import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { STATS } from "@/content/site";
import { Reveal } from "./Reveal";

function CountUp({ value, prefix, suffix }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setShown(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value]);

  return (
    <span ref={ref}>
      {prefix}
      {shown.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <div className="relative z-10 mx-auto -mt-24 w-full max-w-[1180px] px-5 sm:-mt-28 sm:px-8">
      <Reveal>
        <div className="glass-panel grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="px-7 py-8 text-center sm:px-8 sm:py-10 sm:text-left"
            >
              <p className="text-[clamp(1.75rem,3.2vw,2.6rem)] leading-none font-light tracking-tight text-ink">
                {"countUp" in stat && stat.countUp && "value" in stat ? (
                  <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                ) : (
                  <span className="text-[clamp(1.25rem,2.2vw,1.75rem)]">
                    {"display" in stat ? stat.display : null}
                  </span>
                )}
              </p>
              <p className="mt-3 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

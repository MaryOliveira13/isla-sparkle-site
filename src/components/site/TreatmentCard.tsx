import { ArrowRight } from "lucide-react";
import type { Treatment } from "@/content/site";

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-ink/8 bg-card transition-all duration-700 ease-out hover:border-ink/15 hover:shadow-[0_28px_60px_-40px_var(--petrol-deep)]">
      <div className="aspect-[16/10] overflow-hidden bg-mist">
        <img
          src={treatment.image}
          alt={treatment.alt}
          width={1200}
          height={800}
          loading="lazy"
          className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col px-7 pt-7 pb-6">
        <h3 className="text-xl font-normal text-ink">{treatment.title}</h3>
        <p className="mt-3 flex-1 text-[0.94rem] leading-relaxed text-muted-foreground">
          {treatment.description}
        </p>
        <a
          href="#assistente"
          className="mt-7 inline-flex items-center gap-2 self-start text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ink/70 transition-colors duration-300 hover:text-ink focus-visible:text-ink"
        >
          {treatment.cta}
          <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

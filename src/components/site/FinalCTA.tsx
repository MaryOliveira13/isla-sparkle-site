import { WHATSAPP_URL } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="cta-final-title"
      className="relative isolate overflow-hidden bg-petrol-deep px-5 py-28 sm:px-8 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_50%_35%,rgba(190,226,232,0.28),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 -z-10 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(150,205,205,0.22),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 -bottom-32 -z-10 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(226,236,240,0.18),transparent_70%)] blur-3xl"
      />

      <div className="mx-auto max-w-[44rem] text-center">
        <Reveal>
          <h2
            id="cta-final-title"
            className="text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.05] font-light text-white"
          >
            Prefere falar diretamente <span className="editorial">com a nossa equipe?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-[48ch] text-[1rem] leading-relaxed text-white/80">
            Converse pelo WhatsApp e tire suas dúvidas sobre tratamentos e atendimento.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-11 flex justify-center">
            <CtaLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="glass">
              Falar com a equipe no WhatsApp
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

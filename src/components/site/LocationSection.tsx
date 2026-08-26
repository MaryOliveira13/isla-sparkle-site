import { MAPS_EMBED_URL, MAPS_URL } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";

export function LocationSection() {
  return (
    <section
      id="localizacao"
      aria-labelledby="localizacao-title"
      className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-ink/8 bg-mist">
          <div className="aspect-[4/5] w-full sm:aspect-[16/9]">
            <iframe
              title="Mapa da localização do Instituto Isla em Boa Viagem, Recife"
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full border-0 grayscale-[35%]"
            />
          </div>

          <Reveal className="pointer-events-none absolute inset-x-4 bottom-4 sm:inset-x-auto sm:top-8 sm:bottom-8 sm:left-8 sm:max-w-[26rem]">
            <div className="glass-panel bg-white/95 pointer-events-auto flex h-full flex-col justify-center rounded-[1.75rem] p-7 sm:p-9">
              <p className="eyebrow">Onde estamos</p>
              <h2
                id="localizacao-title"
                className="mt-5 text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.08] font-light text-ink"
              >
                Estamos em Boa Viagem, <span className="editorial">perto de você.</span>
              </h2>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-ink/75">
                Encontre o Instituto Isla e veja a melhor rota para chegar até nós.
              </p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                Estamos na Galeria Santo Antônio, na Avenida Fernando Simões Barbosa.
              </p>
              <p className="mt-4 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-ink/60">
                Boa Viagem • Recife
              </p>
              <div className="mt-8">
                <CtaLink href={MAPS_URL} target="_blank" rel="noreferrer">
                  Abrir no Google Maps
                </CtaLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

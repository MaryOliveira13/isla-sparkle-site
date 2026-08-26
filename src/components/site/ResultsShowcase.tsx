import { CASES } from "@/content/site";
import { BeforeAfterCard } from "./BeforeAfterCard";
import { CtaButton } from "./CtaLink";
import { Reveal } from "./Reveal";
import { useAssistant } from "./assistant-context";

/** Placeholders da galeria editorial — substituir por fotografias reais. */
const GALLERY = [
  { id: "g1", tilt: "-1.6deg", scale: "1", width: "w-[62vw] sm:w-[24rem]" },
  { id: "g2", tilt: "1.2deg", scale: "0.94", width: "w-[52vw] sm:w-[19rem]" },
  { id: "g3", tilt: "-0.8deg", scale: "1", width: "w-[58vw] sm:w-[22rem]" },
  { id: "g4", tilt: "1.8deg", scale: "0.9", width: "w-[48vw] sm:w-[17rem]" },
  { id: "g5", tilt: "-1.2deg", scale: "0.97", width: "w-[56vw] sm:w-[21rem]" },
];

function GalleryStrip() {
  const items = [...GALLERY, ...GALLERY];
  return (
    <div aria-hidden="true" className="relative overflow-hidden py-10">
      <div className="marquee-track flex w-max gap-5 sm:gap-7">
        {items.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`${item.width} shrink-0`}
            style={{ transform: `rotate(${item.tilt}) scale(${item.scale})` }}
          >
            <div className="flex aspect-[4/5] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-mist via-pearl to-mist">
              <span className="px-4 text-center text-[0.66rem] font-medium tracking-[0.16em] text-muted-foreground">
                [IMAGEM DE RESULTADO]
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ResultsShowcase() {
  const { openAssistant } = useAssistant();

  return (
    <section
      id="resultados"
      aria-labelledby="resultados-title"
      className="relative scroll-mt-24 overflow-hidden pt-12 pb-24 lg:pb-32"
    >
      {/* Camada 1 — galeria editorial */}
      <div className="relative">
        <GalleryStrip />
        <div className="hidden sm:block">
          <GalleryStrip />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-b from-transparent via-background/85 to-background"
        />
      </div>

      {/* Título emergindo do gradiente */}
      <div className="relative mx-auto max-w-[52rem] px-5 pt-6 text-center sm:px-8 lg:pt-10">
        <Reveal>
          <p className="eyebrow">Resultados</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            id="resultados-title"
            className="mt-6 text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.05] font-light text-ink"
          >
            Resultados que valorizam <span className="editorial">sem apagar quem você é.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-[52ch] text-[1rem] leading-relaxed text-muted-foreground">
            Cada cuidado parte de uma necessidade diferente. Conheça alguns resultados reais
            construídos pelo Instituto Isla.
          </p>
        </Reveal>
      </div>

      {/* Camada 2 — antes e depois */}
      <div className="mx-auto mt-20 max-w-[1200px] px-5 sm:px-8 lg:mt-28">
        <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {CASES.map((item, index) => (
            <Reveal as="li" key={item.id} delay={(index % 2) * 0.08}>
              <BeforeAfterCard label={item.label} title={item.title} />
            </Reveal>
          ))}
        </ul>
      </div>

      {/* CTA final da seção */}
      <div className="mx-auto mt-24 max-w-[46rem] px-5 text-center sm:px-8 lg:mt-32">
        <Reveal>
          <h3 className="text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.08] font-light text-ink">
            O próximo resultado pode começar com <span className="editorial">uma conversa.</span>
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-[52ch] text-[1rem] leading-relaxed text-muted-foreground">
            Conte o que você deseja cuidar. Nosso assistente ajuda a entender qual área pode fazer
            mais sentido para o seu momento.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex justify-center">
            <CtaButton type="button" onClick={openAssistant}>
              Conversar sobre o meu caso
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";

const TAGS = ["Prótese Dentária", "Reabilitação Oral", "DTM"];

export function SpecialistSection() {
  return (
    <section
      id="especialista"
      aria-labelledby="especialista-title"
      className="scroll-mt-24 bg-pearl px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[45fr_55fr] lg:gap-20">
        {/* Retrato — placeholder preparado para fotografia real */}
        <Reveal y={32}>
          <figure className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2.5rem] rounded-br-[7rem] bg-gradient-to-br from-mist via-white to-mist">
            <figcaption className="px-6 text-center text-[0.68rem] font-medium tracking-[0.16em] text-muted-foreground">
              [FOTOGRAFIA DA PROFISSIONAL]
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Quem está por trás do cuidado</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="especialista-title"
              className="mt-6 text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] font-light text-ink"
            >
              Conheça quem <span className="editorial">vai cuidar de você.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <h3 className="mt-10 text-xl font-normal text-ink sm:text-2xl">
              Dra. Mariana Albuquerque
            </h3>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-[0.97rem] text-ink/75">
              Especialista em Prótese Dentária, Reabilitação Oral e DTM.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <p className="mt-7 max-w-[54ch] text-[1rem] leading-relaxed text-muted-foreground">
              Cada pessoa chega com uma necessidade diferente. Por isso, o cuidado começa entendendo
              o que incomoda, o que precisa ser recuperado e o resultado que se deseja alcançar.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
              {TAGS.map((tag, index) => (
                <li
                  key={tag}
                  className="flex items-center gap-3 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-ink/60"
                >
                  {tag}
                  {index < TAGS.length - 1 ? <span aria-hidden="true">•</span> : null}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

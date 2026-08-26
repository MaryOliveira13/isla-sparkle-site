import { TREATMENTS } from "@/content/site";
import { TreatmentCard } from "./TreatmentCard";
import { Reveal } from "./Reveal";

export function TreatmentsSection() {
  return (
    <section
      id="tratamentos"
      aria-labelledby="tratamentos-title"
      className="scroll-mt-28 px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[46rem] text-center">
          <Reveal>
            <h2
              id="tratamentos-title"
              className="text-[clamp(1.85rem,4vw,3.1rem)] leading-[1.06] font-light text-ink"
            >
              A transformação certa começa pelo que você{" "}
              <span className="editorial">quer sentir diferente.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-[54ch] text-[1rem] leading-relaxed text-muted-foreground">
              Escolha uma área para conhecer as possibilidades de tratamento. Se ainda não souber por
              onde começar, o Instituto Isla ajuda você a encontrar o caminho mais adequado.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {TREATMENTS.map((treatment, index) => (
            <Reveal as="li" key={treatment.id} delay={(index % 3) * 0.08} className="h-full">
              <TreatmentCard treatment={treatment} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

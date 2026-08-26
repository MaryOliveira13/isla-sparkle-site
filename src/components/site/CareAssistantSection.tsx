import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CareAssistant } from "./CareAssistant";
import { CtaButton } from "./CtaLink";
import { Reveal } from "./Reveal";
import { useAssistant } from "./assistant-context";

export function CareAssistantSection() {
  const { open, openAssistant, toggleAssistant } = useAssistant();
  const reduced = useReducedMotion();

  return (
    <section
      id="assistente"
      aria-labelledby="assistente-title"
      className="scroll-mt-24 bg-pearl px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[900px]">
        <div className="text-center">
          <Reveal>
            <h2
              id="assistente-title"
              className="text-[clamp(1.85rem,4vw,3rem)] leading-[1.06] font-light text-ink"
            >
              Não sabe <span className="editorial">por onde começar?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-[56ch] text-[1rem] leading-relaxed text-muted-foreground">
              Você não precisa conhecer o nome do procedimento. Conte o que deseja melhorar ou o que
              está incomodando, e nosso assistente ajudará você a encontrar o melhor caminho para
              começar.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex justify-center">
              <CtaButton
                type="button"
                aria-expanded={open}
                aria-controls="assistente-painel"
                onClick={() => (open ? toggleAssistant() : openAssistant())}
              >
                Encontrar o cuidado ideal
              </CtaButton>
            </div>
          </Reveal>
        </div>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              id="assistente-painel"
              key="painel"
              initial={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
              animate={reduced ? { opacity: 1 } : { opacity: 1, height: "auto" }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-12">
                <CareAssistant />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}

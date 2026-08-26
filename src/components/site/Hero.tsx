import { motion, useReducedMotion } from "framer-motion";
import heroMariana from "@/assets/hero-mariana.png.asset.json";
import { CtaLink } from "./CtaLink";

export function Hero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.05, delay, ease: [0.22, 0.61, 0.36, 1] as const },
  });

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-petrol-deep pt-36 pb-16 sm:min-h-[100svh] sm:items-center sm:pb-24 lg:pt-40"
    >
      {/* Imagem banner */}
      <img
        src={heroMariana.url}
        alt="Dra. Mariana, especialista do Instituto Isla, segurando um modelo de prótese dentária"
        fetchPriority="high"
        className="absolute inset-0 -z-30 size-full object-cover object-[76%_top] sm:object-right"
      />

      {/* Overlay: escurece a esquerda no desktop e a base no mobile */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-t from-petrol-deep/95 via-petrol-deep/45 to-petrol-deep/25 sm:bg-gradient-to-r sm:from-petrol-deep/95 sm:via-petrol-deep/55 sm:to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-b from-petrol-deep/70 via-transparent to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <div className="max-w-[34ch] sm:max-w-[30ch] lg:max-w-[38ch]">
          <motion.p
            {...rise(0.04)}
            className="text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-white/65"
          >
            Odontologia estética e funcional • Boa Viagem, Recife
          </motion.p>

          <motion.h1
            id="hero-title"
            {...rise(0.12)}
            className="mt-6 text-[clamp(2.3rem,6.6vw,4.6rem)] leading-[0.98] font-light text-white [text-shadow:0_2px_36px_rgba(3,22,30,0.5)]"
          >
            Sorria como quem{" "}
            <span className="editorial font-normal">voltou a se reconhecer.</span>
          </motion.h1>

          <motion.p
            {...rise(0.24)}
            className="mt-6 max-w-[46ch] text-[0.95rem] leading-relaxed text-white/85 sm:text-base"
          >
            No Instituto Isla, reabilitação oral, prótese dentária e estética se unem para recuperar
            a função, o conforto e a segurança de mostrar o seu sorriso.
          </motion.p>

          <motion.div {...rise(0.34)} className="mt-9">
            <CtaLink href="#tratamentos" variant="glass">
              Conhecer os tratamentos
            </CtaLink>
          </motion.div>
        </div>
      </div>

      {/* Transição para a seção seguinte */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[22svh] bg-gradient-to-b from-transparent via-petrol-deep/60 to-background"
      />
    </section>
  );
}

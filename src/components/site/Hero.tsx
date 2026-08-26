import { motion, useReducedMotion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Tooth3D } from "./Tooth3D";
import { CtaLink } from "./CtaLink";

export function Hero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1, delay, ease: [0.22, 0.61, 0.36, 1] as const },
  });

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-petrol-deep pt-32 pb-40 sm:pt-36 lg:pb-48"
    >
      {/* Background atmosférico */}
      <img
        src={heroBg}
        width={1920}
        height={1088}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 -z-30 size-full object-cover"
      />
      {/* Zonas de contraste para garantir legibilidade da tipografia */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_45%_at_50%_52%,rgba(4,26,34,0.74),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-petrol-deep/85 via-petrol-deep/25 to-petrol-deep/70"
      />

      <Tooth3D />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 text-center sm:px-8">
        <motion.h1
          id="hero-title"
          {...rise(0.05)}
          className="mx-auto max-w-[16ch] text-[clamp(2.5rem,8.4vw,6.5rem)] leading-[0.94] font-light text-white [text-shadow:0_2px_40px_rgba(3,22,30,0.55)] sm:max-w-[20ch]"
        >
          Sorria como quem{" "}
          <span className="editorial block font-normal text-white sm:inline">
            voltou a se reconhecer.
          </span>
        </motion.h1>

        <motion.p
          {...rise(0.2)}
          className="mx-auto mt-7 max-w-[56ch] text-[0.98rem] leading-relaxed text-white/85 [text-shadow:0_1px_18px_rgba(3,22,30,0.6)] sm:text-lg"
        >
          No Instituto Isla, reabilitação oral, prótese dentária e estética se unem para recuperar a
          função, o conforto e a segurança de mostrar o seu sorriso.
        </motion.p>

        <motion.div {...rise(0.34)} className="mt-10 flex justify-center">
          <CtaLink href="#tratamentos" variant="glass">
            Conhecer os tratamentos
          </CtaLink>
        </motion.div>
      </div>

      {/* Transição gradual da Hero para a seção seguinte */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[38svh] bg-gradient-to-b from-transparent via-pearl/45 to-background"
      />
    </section>
  );
}

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import institute from "@/assets/placeholder-institute.jpg";
import { Reveal } from "./Reveal";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["-6%", "6%"]);

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="px-5 py-24 sm:px-8 lg:py-36">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[57fr_43fr] lg:gap-20">
        {/* Fotografia institucional — placeholder substituível */}
        <Reveal className="order-1" y={32}>
          <div ref={ref} className="relative">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] rounded-tl-[7rem] bg-mist sm:aspect-[5/4] lg:aspect-[4/4.4]">
              <motion.img
                style={{ y }}
                src={institute}
                width={1200}
                height={1504}
                loading="lazy"
                alt="Placeholder de imagem institucional do Instituto Isla — substituir por fotografia real do espaço"
                className="size-full scale-110 object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-petrol-deep/12 via-transparent to-white/10"
              />
            </figure>
            <div
              aria-hidden="true"
              className="absolute -right-4 -bottom-8 hidden size-40 rounded-full bg-[radial-gradient(circle,rgba(198,228,232,0.6),transparent_70%)] blur-2xl lg:block"
            />
          </div>
        </Reveal>

        <div className="order-2">
          <Reveal>
            <p className="eyebrow">Sobre o Instituto Isla</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="sobre-title"
              className="mt-6 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.02] font-light text-ink"
            >
              Cuidar de você é <span className="editorial">olhar para o todo.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-[52ch] text-[1.02rem] leading-relaxed text-ink/80">
              O sorriso, a pele, os traços e a forma como você se sente não existem separadamente.
              Tudo faz parte da sua expressão.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-6 max-w-[52ch] text-[1.02rem] leading-relaxed text-muted-foreground">
              Por isso, no Instituto Isla, odontologia e estética se encontram em um cuidado mais
              completo — pensado para valorizar o que é seu, sem transformar você em outra pessoa.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

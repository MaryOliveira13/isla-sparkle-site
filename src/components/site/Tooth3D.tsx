import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import toothImage from "@/assets/tooth.png";

/**
 * Objeto central da Hero.
 *
 * Nesta primeira versão o objeto usa um render perolado de alta qualidade com
 * rotação controlada apenas no eixo Y (perspectiva CSS) — sem WebGL, portanto
 * nunca quebra.
 *
 * Para trocar por um modelo real: instale @react-three/fiber, adicione o
 * arquivo .glb em src/assets e substitua APENAS o conteúdo interno deste
 * componente, mantendo a mesma API (props e wrapper).
 */
export function Tooth3D({ modelUrl }: { modelUrl?: string }) {
  const reduced = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const target = useRef(0);
  const current = useRef(0);
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    setHasPointer(fine);

    let raf = 0;
    let idle = 0;

    const onMove = (event: PointerEvent) => {
      const ratio = event.clientX / window.innerWidth; // 0 -> 1
      target.current = (ratio - 0.5) * 2; // -1 -> 1
    };

    const tick = () => {
      if (!fine) {
        // Mobile / sem cursor: rotação lateral idle muito sutil.
        idle += 0.004;
        target.current = Math.sin(idle) * 0.55;
      }
      // Interpolação com inércia suave.
      current.current += (target.current - current.current) * 0.045;
      if (innerRef.current) {
        innerRef.current.style.transform = `rotateY(${current.current * 46}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };

    if (fine) window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      data-model-url={modelUrl}
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      style={{ perspective: "1400px" }}
    >
      <div
        className="relative -translate-y-[7%] w-[86vw] max-w-[620px] sm:w-[54vw] lg:w-[38vw]"
        style={reduced ? undefined : { animation: "isla-float 9s ease-in-out infinite" }}
      >
        <div
          ref={innerRef}
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          <img
            src={toothImage}
            width={1024}
            height={1024}
            alt=""
            className="h-auto w-full opacity-95 mix-blend-screen drop-shadow-[0_40px_80px_rgba(6,32,40,0.45)]"
          />
        </div>
        {/* Luz difusa por trás do objeto, garantindo separação do fundo. */}
        <div className="absolute inset-[-18%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(216,240,244,0.4),transparent_65%)] blur-3xl" />
      </div>
      {hasPointer ? null : null}
    </div>
  );
}

/**
 * Card de antes e depois.
 * As áreas de imagem são placeholders preparados para receber as fotografias
 * reais (troque o conteúdo interno de cada figure por <img />).
 */
export function BeforeAfterCard({ label, title }: { label: string; title: string }) {
  return (
    <article className="rounded-[2rem] border border-ink/8 bg-card p-5 sm:p-7">
      <div className="flex items-baseline gap-3">
        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-normal text-ink sm:text-xl">{title}</h3>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          { tag: "Antes", placeholder: "[IMAGEM DO ANTES]" },
          { tag: "Depois", placeholder: "[IMAGEM DO DEPOIS]" },
        ].map((side) => (
          <figure
            key={side.tag}
            className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-mist to-pearl"
          >
            <figcaption className="absolute top-4 left-4 rounded-full bg-white/80 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ink backdrop-blur-sm">
              {side.tag}
            </figcaption>
            <span className="px-4 text-center text-[0.72rem] font-medium tracking-[0.12em] text-muted-foreground">
              {side.placeholder}
            </span>
          </figure>
        ))}
      </div>
    </article>
  );
}

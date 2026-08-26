import { NAV_LINKS } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-background px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-ink">
            Instituto <span className="editorial text-base normal-case tracking-normal">Isla</span>
          </p>
          <p className="mt-3 text-[0.66rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Boa Viagem • Recife
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.66rem] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-300 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Espaço reservado para WhatsApp e redes sociais quando os links reais forem fornecidos. */}
        </nav>
      </div>
    </footer>
  );
}

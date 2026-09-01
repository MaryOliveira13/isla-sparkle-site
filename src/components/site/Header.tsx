import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, WHATSAPP_URL } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-colors duration-700",
          scrolled
            ? "border-white/10 bg-petrol-deep/85 backdrop-blur-xl"
            : "border-white/10 bg-transparent",
        )}
      >
        {/* Navbar */}
        <nav
          aria-label="Navegação principal"
          className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8 lg:py-4"
        >
          <a
            href="#top"
            className="min-w-0 text-sm font-semibold uppercase tracking-[0.3em] text-white"
          >
            Instituto <span className="editorial text-base normal-case tracking-normal">Isla</span>
          </a>

          <div className="flex items-center gap-6">
            <ul className="hidden items-center gap-7 lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden min-h-10 items-center rounded-full border border-white/30 px-5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-500 hover:bg-white/15 sm:inline-flex"
            >
              Agendar pelo WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="grid size-10 shrink-0 place-items-center rounded-full border border-white/25 text-white lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="border-b border-white/10 bg-petrol-deep/90 backdrop-blur-xl lg:hidden"
      >
        <ul className="mx-auto max-w-[1400px] px-5 py-4 sm:px-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 text-sm uppercase tracking-[0.14em] text-white/80"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3 pb-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/30 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white"
            >
              Agendar pelo WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/content/site";
import { Reveal } from "./Reveal";

export function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[38fr_62fr] lg:gap-24">
        <div>
          <Reveal>
            <p className="eyebrow">Perguntas frequentes</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="faq-title"
              className="mt-6 text-[clamp(1.8rem,3.6vw,2.75rem)] leading-[1.05] font-light text-ink"
            >
              Ficou com <span className="editorial">alguma dúvida?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-7 max-w-[42ch] text-[1rem] leading-relaxed text-muted-foreground">
              Reunimos algumas respostas para ajudar você a entender como começar seu cuidado no
              Instituto Isla.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full border-t border-ink/10">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={item.q} value={`faq-${index}`} className="border-ink/10">
                <AccordionTrigger className="py-6 text-left text-[1.02rem] font-normal text-ink hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="max-w-[62ch] pb-7 text-[0.96rem] leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

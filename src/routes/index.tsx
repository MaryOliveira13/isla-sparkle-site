import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { StatsBar } from "@/components/site/StatsBar";
import { AboutSection } from "@/components/site/AboutSection";
import { TreatmentsSection } from "@/components/site/TreatmentsSection";
import { CareAssistantSection } from "@/components/site/CareAssistantSection";
import { ResultsShowcase } from "@/components/site/ResultsShowcase";
import { SpecialistSection } from "@/components/site/SpecialistSection";
import { LocationSection } from "@/components/site/LocationSection";
import { FAQSection } from "@/components/site/FAQSection";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { AssistantProvider } from "@/components/site/assistant-context";

const title = "Instituto Isla — Odontologia estética e funcional em Boa Viagem";
const description =
  "Reabilitação oral, prótese dentária, DTM e estética no Instituto Isla, em Boa Viagem, Recife.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/**
 * Estrutura da página.
 * A intro de abertura (~3s) será adicionada posteriormente envolvendo este
 * conteúdo — nenhuma seção precisará ser reconstruída.
 */
function Index() {
  return (
    <AssistantProvider>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <AboutSection />
        <TreatmentsSection />
        <CareAssistantSection />
        <ResultsShowcase />
        <SpecialistSection />
        <LocationSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </AssistantProvider>
  );
}

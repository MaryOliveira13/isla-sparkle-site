/**
 * Conteúdo central do site do Instituto Isla.
 * Edite aqui textos, links e listas sem mexer na estrutura dos componentes.
 */

import tr1 from "@/assets/tr-1.jpg";
import tr2 from "@/assets/tr-2.jpg";
import tr3 from "@/assets/tr-3.jpg";
import tr4 from "@/assets/tr-4.jpg";
import tr5 from "@/assets/tr-5.jpg";
import tr6 from "@/assets/tr-6.jpg";

/** TODO: substituir pelo link real do WhatsApp quando for fornecido. */
export const WHATSAPP_URL = "#whatsapp";

/** Busca no Google Maps baseada apenas nas informações fornecidas. */
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Galeria Santo Antônio, Avenida Fernando Simões Barbosa, Boa Viagem, Recife");

export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Galeria Santo Antônio, Avenida Fernando Simões Barbosa, Boa Viagem, Recife") +
  "&output=embed";

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Especialista", href: "#especialista" },
  { label: "Localização", href: "#localizacao" },
  { label: "FAQ", href: "#faq" },
];

export const STATS = [
  { value: 1500, prefix: "+", suffix: "", label: "Pacientes atendidos", countUp: true },
  { value: 8, prefix: "+", suffix: " anos", label: "De experiência e cuidado", countUp: true },
  { display: "2 frentes integradas", label: "Odontologia e estética", countUp: false },
] as const;

export type Treatment = {
  id: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  alt: string;
};

export const TREATMENTS: Treatment[] = [
  {
    id: "reabilitacao-oral",
    title: "Reabilitação Oral",
    description:
      "Para recuperar a função, o conforto e a segurança de voltar a sorrir e mastigar.",
    cta: "CONHECER O TRATAMENTO",
    image: tr1,
    alt: "Imagem de apoio da área de Reabilitação Oral",
  },
  {
    id: "protese-dentaria",
    title: "Prótese Dentária",
    description: "Soluções para reconstruir dentes e recuperar a harmonia do sorriso.",
    cta: "CONHECER O TRATAMENTO",
    image: tr2,
    alt: "Imagem de apoio da área de Prótese Dentária",
  },
  {
    id: "dtm",
    title: "DTM",
    description:
      "Avaliação de dores, estalos, tensão e desconfortos relacionados à mandíbula.",
    cta: "CONHECER O TRATAMENTO",
    image: tr3,
    alt: "Imagem de apoio da área de DTM",
  },
  {
    id: "estetica-do-sorriso",
    title: "Estética do Sorriso",
    description:
      "Cuidados pensados para valorizar a forma, a aparência e a naturalidade do sorriso.",
    cta: "CONHECER O TRATAMENTO",
    image: tr4,
    alt: "Imagem de apoio da área de Estética do Sorriso",
  },
  {
    id: "estetica-facial",
    title: "Estética Facial",
    description: "Procedimentos que valorizam os traços e preservam a identidade de cada rosto.",
    cta: "CONHECER O TRATAMENTO",
    image: tr5,
    alt: "Imagem de apoio da área de Estética Facial",
  },
  {
    id: "cuidados-com-a-pele",
    title: "Cuidados com a Pele",
    description: "Tratamentos voltados à saúde, à textura e à aparência da pele.",
    cta: "CONHECER O TRATAMENTO",
    image: tr6,
    alt: "Imagem de apoio da área de Cuidados com a Pele",
  },
];

/** Primeira etapa aprovada do assistente. Novas etapas entram como novos steps. */
export type AssistantStep = {
  id: string;
  messages: string[];
  options: { id: string; label: string }[];
};

export const ASSISTANT_STEPS: AssistantStep[] = [
  {
    id: "motivo",
    messages: [
      "Olá, quero ajudar você a encontrar o cuidado mais adequado.",
      "O que motivou sua busca pelo Instituto Isla?",
    ],
    options: [
      { id: "sorriso", label: "Quero melhorar meu sorriso" },
      { id: "mastigar", label: "Tenho dificuldade ou desconforto para mastigar" },
      { id: "mandibula", label: "Sinto dores ou estalos na mandíbula" },
      { id: "rosto", label: "Quero cuidar da aparência do meu rosto" },
      { id: "pele", label: "Quero cuidar da minha pele" },
      { id: "indefinido", label: "Ainda não sei explicar" },
    ],
  },
];

/** Casos de antes e depois — placeholders reais, a preencher posteriormente. */
export const CASES = [
  { id: "01", label: "Caso 01", title: "[PROCEDIMENTO REAL 01]" },
  { id: "02", label: "Caso 02", title: "[PROCEDIMENTO REAL 02]" },
  { id: "03", label: "Caso 03", title: "[PROCEDIMENTO REAL 03]" },
  { id: "04", label: "Caso 04", title: "[PROCEDIMENTO REAL 04]" },
];

export const FAQ_ITEMS = [
  {
    q: "Não sei qual tratamento escolher. E agora?",
    a: "Você não precisa chegar sabendo o nome do procedimento. Conte o que deseja cuidar ou o que está incomodando, e nosso assistente ajudará a identificar a área de atendimento mais adequada para começar.",
  },
  {
    q: "Quais cuidados encontro no Instituto Isla?",
    a: "O Instituto Isla reúne tratamentos odontológicos e estéticos, incluindo Prótese Dentária, Reabilitação Oral, DTM, Estética do Sorriso, Estética Facial e cuidados com a pele.",
  },
  {
    q: "Preciso passar por uma avaliação antes do procedimento?",
    a: "A indicação depende das necessidades, características e objetivos de cada pessoa. A avaliação permite compreender seu caso e apresentar as possibilidades de cuidado.",
  },
  {
    q: "É possível saber o valor pelo site?",
    a: "Os valores podem variar conforme o tratamento e as necessidades identificadas. Depois de entender seu caso, a equipe poderá orientar você com mais clareza.",
  },
  {
    q: "Como posso agendar um atendimento?",
    a: "Você pode iniciar pelo assistente do site ou conversar diretamente com a equipe pelo WhatsApp.",
  },
  {
    q: "Onde fica o Instituto Isla?",
    a: "Estamos na Galeria Santo Antônio, em Boa Viagem, Recife. Na seção de localização, você encontra um botão para abrir a rota diretamente no Google Maps.",
  },
];

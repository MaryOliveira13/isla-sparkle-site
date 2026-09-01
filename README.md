# Isla Prime

# INSTITUTO ISLA — PRIMEIRA VERSÃO DO SITE

Crie a primeira versão completa, responsiva e visualmente refinada do site institucional do **Instituto Isla**, localizado em **Boa Viagem, Recife**.

O objetivo desta primeira geração é chegar o mais próximo possível de um site final de alto padrão, mas manter todos os componentes organizados e fáceis de editar para refinarmos posteriormente dobra por dobra.

## REGRA PRINCIPAL: NÃO ALTERE A COPY

Todo o texto fornecido neste prompt foi pensado estrategicamente e deve ser reproduzido **exatamente como está escrito**.

Não:

* reescreva títulos;
* resuma parágrafos;
* troque palavras;
* crie novas promessas;
* mude CTAs;
* acrescente números;
* invente credenciais;
* invente informações sobre tratamentos;
* altere o tom da comunicação apenas para encaixar melhor no layout.

O design deve se adaptar à copy, e não a copy ao design.

Microcopies estritamente funcionais de interface podem ser utilizadas quando indispensáveis, como navegação, fechar, voltar ou continuar, mas mantenha-as mínimas.

---

# DIREÇÃO GERAL DE DESIGN

O site deve transmitir simultaneamente:

**sofisticação + tecnologia + cuidado humano + naturalidade + confiança clínica.**

Evite completamente o visual tradicional de clínicas odontológicas baseado em:

* azul hospitalar genérico;
* sorrisos de banco de imagens espalhados pela página;
* excesso de ícones médicos;
* cards genéricos de SaaS;
* degradês roxos chamativos;
* visual excessivamente corporativo;
* interfaces com aparência de template pronto.

A experiência deve parecer **autoral, editorial, premium e contemporânea**.

Use as imagens de referência anexadas como **referência de composição, atmosfera, tipografia e hierarquia**, jamais copie logos, textos, marcas ou conteúdo das referências.

---

# IDENTIDADE VISUAL BASE

Construa uma identidade sofisticada inspirada principalmente na referência da Hero.

Use uma base de:

* branco / off-white;
* tons muito claros perolados;
* cinza suave;
* carvão/preto para tipografia;
* azul-petróleo / verde-petróleo profundo nas áreas escuras;
* reflexos frios azulados e esverdeados muito sutis;
* brilho perolado/iridescente apenas em elementos especiais.

Nada deve parecer neon.

A interface deve ter:

* bastante espaço negativo;
* grids amplos;
* bordas suaves;
* sombras muito discretas;
* glassmorphism apenas onde fizer sentido;
* grandes áreas respirando;
* transições entre seções cuidadosamente trabalhadas.

---

# TIPOGRAFIA

Use duas famílias tipográficas complementares.

## Fonte principal

Uma sans-serif contemporânea de excelente leitura, semelhante a:

* Manrope;
* Inter Tight;
* Helvetica Neue / Suisse / Neue Montreal como referência estética.

Use-a em:

* títulos grandes;
* navegação;
* botões;
* textos;
* números;
* labels.

## Fonte editorial

Utilize uma serifada sofisticada em itálico em momentos pontuais, semelhante a:

* Cormorant Garamond Italic;
* ou outra serif editorial elegante.

Ela não deve dominar o site.

Utilize-a para criar contraste editorial dentro de alguns títulos, especialmente na Hero, sem alterar nenhuma palavra da copy.

---

# ANIMAÇÕES

O site deve ter movimento, mas nunca parecer uma página criada apenas para demonstrar animações.

Priorize:

* fade suave;
* pequenos deslocamentos verticais;
* stagger discreto;
* parallax leve;
* movimentos ligados ao scroll;
* hover premium;
* transições com easing natural.

Evite:

* bounce;
* movimentos rápidos;
* animações exageradas;
* zoom agressivo;
* elementos voando pela tela.

Use Framer Motion quando necessário.

Respeite `prefers-reduced-motion`.

---

# INTRO DO SITE

**NÃO CRIE A INTRO NESTE MOMENTO.**

Haverá posteriormente uma intro de aproximadamente 3 segundos antes da abertura do site, mas ela será desenvolvida em outro prompt.

A página atual deve carregar diretamente na Hero.

Deixe a arquitetura preparada para que essa intro possa ser adicionada posteriormente sem reconstruir a página.

---

# HEADER

O topo deve conversar diretamente com a referência da Hero.

Crie duas camadas.

## Faixa superior

Exibir exatamente:

**ODONTOLOGIA ESTÉTICA E FUNCIONAL • BOA VIAGEM, RECIFE**

Deve ser extremamente discreta e elegante.

## Navbar

Navbar minimalista, refinada e integrada visualmente à Hero.

Sugestão de navegação:

Sobre
Tratamentos
Resultados
Especialista
Localização
FAQ

E um CTA para contato/agendamento via WhatsApp.

No desktop, manter tudo em uma linha.

No mobile, utilizar menu compacto/hambúrguer de alto padrão.

A navbar pode ganhar fundo levemente translúcido e blur conforme o usuário começa a rolar a página.

---

# DOBRA 1 — HERO

Use a **referência visual da Lumex anexada** como principal referência desta seção.

A composição deve ser muito próxima em espírito:

* experiência cinematográfica;
* objeto 3D central;
* conteúdo centralizado;
* tipografia grande sobreposta ao objeto;
* iluminação difusa;
* atmosfera perolada;
* profundidade;
* aparência de campanha premium.

A Hero deve ocupar aproximadamente `100svh` no desktop, descontando apenas o necessário para o header.

## Background

Crie um ambiente abstrato sofisticado utilizando:

* azul-petróleo profundo;
* verde frio;
* branco perolado;
* blur;
* reflexos suaves;
* áreas luminosas difusas;
* pequenos detalhes/partículas extremamente discretos.

O background precisa oferecer **contraste impecável para todos os textos**.

Nunca permita que título ou subtítulo desapareçam sobre áreas claras.

Utilize overlays, radial gradients ou zonas de contraste quando necessário.

---

## DENTE 3D

No centro da Hero haverá um **dente tridimensional sofisticado**, posicionado atrás da tipografia.

A aparência deve lembrar:

* porcelana;
* vidro perolado;
* metal iridescente muito suave;
* superfície premium;
* odontologia moderna.

O objeto deve parecer independente do background.

### Interação do dente

O dente responde à posição horizontal do cursor.

A única rotação permitida é ao redor do **eixo vertical Y**.

Movendo o cursor da esquerda para a direita, o objeto acompanha gradualmente essa posição lateral.

É permitido mapear o movimento horizontal para uma rotação extensa ao redor do eixo Y, inclusive criando sensação de visualização em 360°, desde que:

* não haja rotação em X;
* não haja rotação em Z;
* não haja tombamento aleatório;
* não haja giro automático rápido;
* não pareça um brinquedo 3D.

A resposta ao mouse deve ter interpolação e easing, criando inércia suave.

Sem interação, adicionar apenas uma flutuação vertical praticamente imperceptível.

No mobile, onde não existe cursor, utilizar uma animação idle muito sutil de rotação lateral.

### Implementação

Prefira `Three.js` / `@react-three/fiber` para esse componente caso exista um asset 3D adequado.

Se nenhum modelo 3D estiver disponível nesta primeira geração, crie a estrutura do componente preparada para receber posteriormente um arquivo `.glb`, e utilize temporariamente o melhor fallback visual possível sem comprometer o layout.

O site não pode quebrar caso WebGL não esteja disponível.

---

## COPY DA HERO

Não alterar nenhuma palavra.

### H1

**Sorria como quem voltou a se reconhecer.**

Trabalhe a frase tipograficamente, podendo diferenciar trechos com a serifada editorial, sem modificar o conteúdo.

O título deve ser grande e protagonista.

### H2

**No Instituto Isla, reabilitação oral, prótese dentária e estética se unem para recuperar a função, o conforto e a segurança de mostrar o seu sorriso.**

Manter excelente largura de leitura e contraste.

### CTA

**CONHECER OS TRATAMENTOS**

O botão deve levar suavemente até a seção de tratamentos.

---

# TRANSIÇÃO ENTRE DOBRA 1 E DOBRA 2

Não faça uma quebra seca entre as seções.

A Hero deve gradualmente clarear em direção à seção seguinte.

Sobre a divisão das duas áreas haverá um componente flutuante de números de grandeza inspirado na segunda referência anexada.

Use os três dados reais fornecidos:

### +1.500

Pacientes atendidos

### +8 anos

De experiência e cuidado

### 2 frentes integradas

Odontologia e estética

No desktop, exibir em uma faixa horizontal sofisticada.

No mobile, transformar em grid compacto.

Aplicar animação discreta de count-up apenas aos números quando fizer sentido.

Não faça contagem artificial sobre o texto “2 frentes integradas”.

---

# DOBRA 2 — SOBRE O INSTITUTO ISLA

Usar a segunda referência anexada como base de **composição**, não de identidade visual.

Criar uma seção editorial em duas colunas.

A fotografia institucional deve ocupar aproximadamente 55% a 60% da composição no desktop.

Ela pode mostrar:

* fachada;
* recepção;
* interior;
* estrutura do Instituto.

Nesta primeira versão, se nenhuma imagem real tiver sido enviada, use um placeholder visual premium claramente substituível posteriormente.

Não invente uma fachada específica do Instituto Isla.

A fotografia não deve parecer simplesmente um retângulo jogado ao lado do texto.

Utilize:

* recorte elegante;
* grandes raios;
* pequenas assimetrias;
* profundidade;
* possibilidade de leve parallax interno.

Na outra coluna, inserir exatamente:

**SOBRE O INSTITUTO ISLA**

# Cuidar de você é olhar para o todo.

**O sorriso, a pele, os traços e a forma como você se sente não existem separadamente. Tudo faz parte da sua expressão.**

**Por isso, no Instituto Isla, odontologia e estética se encontram em um cuidado mais completo — pensado para valorizar o que é seu, sem transformar você em outra pessoa.**

Os números de grandeza já estarão visualmente associados a esta área através da faixa entre Hero e Dobra 2. Evite repeti-los desnecessariamente no conteúdo.

A seção deve ser clara, leve, humana e sofisticada.

---

# DOBRA 3 — TRATAMENTOS

Esta dobra deve ser claramente mais simples que a Hero.

Título e introdução centralizados ou em um grid editorial muito limpo.

Exibir exatamente:

# A transformação certa começa pelo que você quer sentir diferente.

**Escolha uma área para conhecer as possibilidades de tratamento. Se ainda não souber por onde começar, o Instituto Isla ajuda você a encontrar o caminho mais adequado.**

---

## CARDS DE TRATAMENTOS

Usar a referência de cards médicos anexada como inspiração estrutural.

Não copiar o visual hospitalar da referência.

Criar uma versão:

* mais limpa;
* mais premium;
* com menos elementos;
* com mais espaço;
* mais fácil de escanear.

No desktop:

**3 cards por linha / 2 linhas.**

Tablet:

**2 cards por linha.**

Mobile:

**1 card por linha.**

Cada card deve possuir:

1. imagem horizontal na parte superior;
2. nome do tratamento;
3. descrição;
4. CTA;
5. hover extremamente discreto.

Não sobrecarregar com ícones ou metadados.

### CARD 1

## Reabilitação Oral

**Para recuperar a função, o conforto e a segurança de voltar a sorrir e mastigar.**

**CONHECER O TRATAMENTO**

### CARD 2

## Prótese Dentária

**Soluções para reconstruir dentes e recuperar a harmonia do sorriso.**

**CONHECER O TRATAMENTO**

### CARD 3

## DTM

**Avaliação de dores, estalos, tensão e desconfortos relacionados à mandíbula.**

**CONHECER O TRATAMENTO**

### CARD 4

## Estética do Sorriso

**Cuidados pensados para valorizar a forma, a aparência e a naturalidade do sorriso.**

**CONHECER O TRATAMENTO**

### CARD 5

## Estética Facial

**Procedimentos que valorizam os traços e preservam a identidade de cada rosto.**

**CONHECER O TRATAMENTO**

### CARD 6

## Cuidados com a Pele

**Tratamentos voltados à saúde, à textura e à aparência da pele.**

**CONHECER O TRATAMENTO**

Os CTAs devem possuir estados de hover e foco.

Nesta primeira versão, podem apontar para a seção do assistente ou utilizar anchors preparados para futuras páginas/detalhes.

---

# DOBRA 4 — ASSISTENTE DE ESCOLHA

Esta seção precisa quebrar o ritmo dos cards e parecer uma experiência interativa, não simplesmente outra caixa de texto.

Utilize uma composição limpa com bastante espaço em branco e um módulo de conversa sofisticado.

Pode haver uma leve mudança de background para um tom perolado/frio.

Exibir exatamente:

# Não sabe por onde começar?

**Você não precisa conhecer o nome do procedimento. Conte o que deseja melhorar ou o que está incomodando, e nosso assistente ajudará você a encontrar o melhor caminho para começar.**

CTA:

**ENCONTRAR O CUIDADO IDEAL**

Ao clicar, revelar ou abrir suavemente o assistente.

Evite modal genérico se for possível criar uma expansão elegante dentro da própria página.

---

# ASSISTENTE — PRIMEIRA ETAPA

A primeira mensagem deve ser exatamente:

**Olá, quero ajudar você a encontrar o cuidado mais adequado.**

**O que motivou sua busca pelo Instituto Isla?**

Apresentar seis opções clicáveis:

* Quero melhorar meu sorriso
* Tenho dificuldade ou desconforto para mastigar
* Sinto dores ou estalos na mandíbula
* Quero cuidar da aparência do meu rosto
* Quero cuidar da minha pele
* Ainda não sei explicar

Os itens devem parecer respostas de conversa, não cards promocionais.

Crie estado selecionado, acessibilidade por teclado e estrutura de dados preparada para um fluxo de múltiplas etapas.

### IMPORTANTE

Nesta primeira versão, implemente **somente esta primeira pergunta como fluxo aprovado**.

Não invente diagnóstico, recomendação médica, promessa de tratamento ou novas etapas textuais.

Prepare a arquitetura para adicionarmos posteriormente as próximas perguntas e caminhos através de novos prompts.

---

# DOBRA 5 — RESULTADOS

Utilizar fortemente as referências de resultados anexadas.

Esta seção possuirá **duas camadas visuais**.

## CAMADA 1 — GALERIA EDITORIAL DE “DEPOIS”

Na parte superior, criar uma composição de fotografias finais de resultados.

Esta área **não representa formalmente antes/depois**.

É uma galeria puramente estética para criar impacto visual.

Características:

* imagens de resultados finais;
* sorrisos em destaque;
* cards/fotografias com pequenas diferenças de escala;
* algumas inclinações muito discretas;
* composição editorial;
* movimento horizontal lento e contínuo;
* sensação premium.

No mobile, reduzir drasticamente a quantidade de elementos simultâneos.

No final da galeria, aplicar um **grande gradiente branco**, fazendo as imagens desaparecerem suavemente em direção à área do título.

O título deve parecer emergir desse gradiente.

---

## TÍTULO

Centralizar:

**RESULTADOS**

# Resultados que valorizam sem apagar quem você é.

**Cada cuidado parte de uma necessidade diferente. Conheça alguns resultados reais construídos pelo Instituto Isla.**

Muito espaço negativo ao redor.

---

## CAMADA 2 — ANTES E DEPOIS

Abaixo, criar uma grade refinada com quatro casos.

Não criar uma galeria apertada.

Priorizar imagens grandes e leitura clara.

### Caso 01

## [PROCEDIMENTO REAL 01]

**[IMAGEM DO ANTES] → [IMAGEM DO DEPOIS]**

### Caso 02

## [PROCEDIMENTO REAL 02]

**[IMAGEM DO ANTES] → [IMAGEM DO DEPOIS]**

### Caso 03

## [PROCEDIMENTO REAL 03]

**[IMAGEM DO ANTES] → [IMAGEM DO DEPOIS]**

### Caso 04

## [PROCEDIMENTO REAL 04]

**[IMAGEM DO ANTES] → [IMAGEM DO DEPOIS]**

Esses conteúdos entre colchetes são **placeholders reais** e não devem ser substituídos por procedimentos inventados.

Crie componentes fáceis de editar posteriormente.

Os cards devem distinguir claramente:

**Antes**
e
**Depois**

No desktop, utilizar 2 colunas ou outra distribuição que permita imagens grandes.

No mobile, uma composição por vez.

Não use layouts minúsculos com dezenas de resultados.

---

## CTA FINAL DA SEÇÃO

Exibir:

# O próximo resultado pode começar com uma conversa.

**Conte o que você deseja cuidar. Nosso assistente ajuda a entender qual área pode fazer mais sentido para o seu momento.**

CTA:

**CONVERSAR SOBRE O MEU CASO**

Esse botão deve levar ao assistente da Dobra 4 e abri-lo caso esteja fechado.

---

# DOBRA 6 — PROFISSIONAL

Criar uma seção editorial extremamente humana e sofisticada.

Nada de card de equipe corporativo genérico.

Utilize grande retrato da profissional em uma das laterais e conteúdo na outra.

Se nenhuma fotografia real tiver sido fornecida, utilize um placeholder neutro claramente preparado para substituição.

Não invente aparência física.

Exibir exatamente:

**QUEM ESTÁ POR TRÁS DO CUIDADO**

# Conheça quem vai cuidar de você.

## Dra. Mariana Albuquerque

**Especialista em Prótese Dentária, Reabilitação Oral e DTM.**

**Cada pessoa chega com uma necessidade diferente. Por isso, o cuidado começa entendendo o que incomoda, o que precisa ser recuperado e o resultado que se deseja alcançar.**

**PRÓTESE DENTÁRIA • REABILITAÇÃO ORAL • DTM**

Use os três campos finais como pequenos labels/tags sofisticados, sem aparência de botões.

Essa dobra deve transmitir:

* proximidade;
* competência;
* cuidado;
* autoridade;
* humanidade.

---

# DOBRA 7 — LOCALIZAÇÃO

Criar uma composição moderna integrando mapa e conteúdo.

Exibir:

**ONDE ESTAMOS**

# Estamos em Boa Viagem, perto de você.

**Encontre o Instituto Isla e veja a melhor rota para chegar até nós.**

**Estamos na Galeria Santo Antônio, na Avenida Fernando Simões Barbosa.**

**Boa Viagem • Recife**

CTA:

**ABRIR NO GOOGLE MAPS**

O botão deve abrir uma busca/rota no Google Maps baseada nas informações de localização fornecidas.

Não inventar número de endereço.

Se utilizar mapa incorporado, baseá-lo no nome/localização fornecida e deixar a implementação simples de atualizar posteriormente.

A composição pode ter:

* mapa grande;
* card sobreposto;
* cantos arredondados;
* detalhes de vidro muito suaves.

---

# DOBRA 8 — FAQ

Área clara e muito limpa.

Evitar vários cards separados.

Preferir uma grande composição editorial com accordion.

Exibir:

**PERGUNTAS FREQUENTES**

# Ficou com alguma dúvida?

**Reunimos algumas respostas para ajudar você a entender como começar seu cuidado no Instituto Isla.**

### Não sei qual tratamento escolher. E agora?

**Você não precisa chegar sabendo o nome do procedimento. Conte o que deseja cuidar ou o que está incomodando, e nosso assistente ajudará a identificar a área de atendimento mais adequada para começar.**

### Quais cuidados encontro no Instituto Isla?

**O Instituto Isla reúne tratamentos odontológicos e estéticos, incluindo Prótese Dentária, Reabilitação Oral, DTM, Estética do Sorriso, Estética Facial e cuidados com a pele.**

### Preciso passar por uma avaliação antes do procedimento?

**A indicação depende das necessidades, características e objetivos de cada pessoa. A avaliação permite compreender seu caso e apresentar as possibilidades de cuidado.**

### É possível saber o valor pelo site?

**Os valores podem variar conforme o tratamento e as necessidades identificadas. Depois de entender seu caso, a equipe poderá orientar você com mais clareza.**

### Como posso agendar um atendimento?

**Você pode iniciar pelo assistente do site ou conversar diretamente com a equipe pelo WhatsApp.**

### Onde fica o Instituto Isla?

**Estamos na Galeria Santo Antônio, em Boa Viagem, Recife. Na seção de localização, você encontra um botão para abrir a rota diretamente no Google Maps.**

O accordion deve ter:

* abertura suave;
* ícone minimalista;
* uma pergunta aberta por vez ou suporte consistente a múltiplas;
* acessibilidade;
* foco por teclado;
* bom contraste.

---

# DOBRA 9 — CTA FINAL

A última grande dobra deve funcionar como uma conclusão visual forte.

Ela pode recuperar discretamente a atmosfera escura/perolada da Hero, fechando o ciclo visual da página.

Não repetir o dente 3D completo.

Pode utilizar apenas:

* reflexos perolados;
* luz suave;
* blur;
* formas abstratas.

Centralizar:

# Prefere falar diretamente com a nossa equipe?

**Converse pelo WhatsApp e tire suas dúvidas sobre tratamentos e atendimento.**

CTA:

**FALAR COM A EQUIPE NO WHATSAPP**

O botão deve abrir o WhatsApp em nova aba.

Deixe o número/link configurado de forma fácil de substituir caso ainda não tenha sido fornecido.

Não inventar telefone.

---

# FOOTER

Criar footer extremamente simples.

Pode conter apenas informações já presentes no projeto:

**Instituto Isla**
**Boa Viagem • Recife**

Links âncora para as principais seções.

Local reservado para WhatsApp e redes sociais quando os links reais forem fornecidos.

Não inventar:

* telefone;
* Instagram;
* CRO;
* CNPJ;
* horário;
* e-mail;
* endereço completo;
* outras informações.

---

# RESPONSIVIDADE

Não crie primeiro desktop para depois simplesmente empilhar tudo no celular.

Trate mobile como uma composição própria.

## Desktop

Use grandes áreas visuais, tipografia expressiva e muito respiro.

## Tablet

Reduza escala sem destruir a composição editorial.

## Mobile

Priorize:

* leitura;
* respiro;
* imagens grandes;
* títulos com quebras intencionais;
* botões confortáveis;
* cards de largura total;
* scroll fluido;
* nenhuma rolagem horizontal acidental.

O dente da Hero deve continuar visualmente presente sem impedir leitura.

Os CTAs devem possuir área de toque adequada.

---

# CONTRASTE E ACESSIBILIDADE

Prioridade absoluta para legibilidade.

Especialmente na Hero:

* não permita texto branco sobre branco;
* não permita texto escuro sobre regiões escuras;
* ajuste dinamicamente overlays/background quando necessário;
* preserve contraste dos botões.

Utilizar estrutura semântica correta:

* `header`
* `nav`
* `main`
* `section`
* `footer`

Um único H1 na página.

Os títulos das demais dobras seguem hierarquia semântica adequada.

Fornecer:

* estados de foco;
* navegação por teclado;
* labels acessíveis;
* alt text preparado para imagens reais;
* suporte a reduced motion.

---

# PERFORMANCE

O site deve permanecer rápido mesmo tendo aparência sofisticada.

Aplicar:

* lazy loading em imagens abaixo da dobra;
* formatos modernos de imagem;
* dimensionamento correto;
* animações usando transform/opacity quando possível;
* carregamento otimizado do componente 3D;
* fallback do WebGL;
* nenhuma biblioteca pesada sem necessidade;
* evitar partículas excessivas.

Não sacrifique a experiência mobile pelo elemento 3D.

---

# ORGANIZAÇÃO DO CÓDIGO

Criar componentes separados e reutilizáveis.

Sugestão estrutural:

* Header
* Hero
* Tooth3D
* StatsBar
* AboutSection
* TreatmentsSection
* TreatmentCard
* CareAssistantSection
* CareAssistant
* ResultsShowcase
* BeforeAfterCard
* SpecialistSection
* LocationSection
* FAQSection
* FinalCTA
* Footer

Centralize conteúdo repetível em arrays/objetos quando fizer sentido.

Os tratamentos, resultados, FAQ e números devem ser fáceis de editar sem alterar a estrutura inteira.

---

# COMPORTAMENTOS FUNCIONAIS OBRIGATÓRIOS

O site não deve ser apenas uma apresentação estática.

Nesta primeira versão, implemente:

1. navegação por anchors;
2. scroll suave;
3. navbar responsiva;
4. Hero responsiva;
5. interação lateral do dente;
6. animações de entrada sutis;
7. CTA “Conhecer os Tratamentos” levando à Dobra 3;
8. assistant abrindo pela Dobra 4;
9. seleção funcional da primeira pergunta do assistant;
10. CTA de Resultados abrindo/levando ao assistant;
11. accordion funcional do FAQ;
12. CTA de localização preparado para Google Maps;
13. CTA do WhatsApp preparado para receber o número real;
14. estados hover/focus;
15. responsividade completa.

---

# NÃO FAÇA

Não:

* invente informações;
* altere a copy;
* crie depoimentos falsos;
* crie números extras;
* invente resultados;
* invente nome de procedimentos nos placeholders;
* invente endereço;
* invente WhatsApp;
* invente redes sociais;
* use logos das referências;
* copie textos das referências;
* crie visual hospitalar genérico;
* use excesso de azul;
* utilize ícones de dentes em todo lugar;
* transforme cada seção em um card;
* faça todas as seções parecerem iguais;
* aplique animações apenas porque são possíveis;
* utilize efeitos que prejudiquem contraste;
* coloque elementos decorativos sobre rostos;
* use imagens aleatórias de tratamentos como se fossem resultados reais.

---

# RESULTADO ESPERADO

Ao terminar, quero olhar para a primeira versão e perceber uma experiência contínua:

**impacto visual → apresentação do Instituto → descoberta dos tratamentos → assistência → prova visual → profissional → localização → esclarecimento de dúvidas → contato.**

A página deve parecer um projeto de design customizado para o Instituto Isla, não um template odontológico.

Priorize primeiro:

**hierarquia visual, contraste, espaçamento, composição, tipografia e experiência.**

Depois:

**animações e detalhes.**

Não simplifique a página nem transforme as referências em uma versão genérica.

Crie a versão completa agora.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://isla-sparkle-site.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/02d866bf-259e-4035-b007-c0236a8635f9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

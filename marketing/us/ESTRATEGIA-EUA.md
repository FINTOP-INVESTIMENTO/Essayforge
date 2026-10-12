# EssayForge EUA — estratégia para conseguir os primeiros alunos

_12/10/2026 · só EUA · baseado no app do Base44 (superfície `/us`) e em pesquisa de concorrentes_

## 1. Por que ainda não veio nenhum aluno (diagnóstico)

1. **Ninguém está vendo.** A conta [@essayforge1](https://instagram.com/essayforge1) é nova. Sem seguidores e sem anúncio pago, os posts no feed chegam a quase ninguém. Por isso posts bonitos sozinhos não trazem aluno.
2. **O formato não é o que funciona com estudante americano.** No TikTok de admissões, o que viraliza é **gente falando para a câmera**: estudante lendo a própria redação, "como entrei em Harvard", alguém corrigindo uma redação ao vivo. Carrossel de marca com logo vende pouco nesse público.
3. **O link de destino não passa confiança.** O app é aberto em `essay-forge-flow.base44.app`. Um domínio próprio, como `essayforge.com` ou `.app`, apontando para `/us`, aumenta muito a taxa de clique e de cadastro.
4. **Ainda não dá para pagar em dólar.** Em `src/lib/precos.js`, a moeda dos EUA está com `stripePronto: false`. Isso não impede o cadastro grátis, mas impede o faturamento. Ative antes de investir em anúncio pago.

## 2. O que os concorrentes fazem

| Quem | O que faz | O que copiamos |
|---|---|---|
| **Grammarly** | Nos anos 2016–2018, ficou gigante com **anúncios no YouTube**: problema → produto corrigindo na tela → "é grátis". Depois fez a campanha de volta às aulas *"Future You Thanks You"*, com humor da Geração Z, e passou de 150 milhões de views. | Vídeo curto de "antes → depois" com a correção aparecendo na tela, e a frase "free" no fim. |
| **CollegeVine** | **Lives grátis de revisão de redação**: o fundador lê redações enviadas e comenta parágrafo por parágrafo, como faria um avaliador. | "Reading your essays": todo dia, um parágrafo enviado por um seguidor é corrigido na tela. |
| **Criadores de admissão** (Abigail Mack, Gohar Khan, Admitium e outros) | Abigail Mack viralizou lendo a própria redação aceita em Harvard. Gohar Khan dá dicas de redação e de prova. Admitium tem mais de 427 mil seguidores. | Parcerias pagas com **micro-criadores** (10 a 100 mil seguidores) do nicho #collegetok. |
| **Ferramentas de IA** (Ink to Ivy, Essai, Prompt) | Prometem "feedback personalizado" e usam a palavra "AI" no centro da mensagem. | **Não** copiar isso. A nossa diferença é ser a "leitura do avaliador", sem escrever pelo aluno, e o **State vs. State**. |

## 3. A essência do EssayForge EUA (o que já está no app)

- "**Your voice, sharpened.**": a gente não escreve pelo aluno, mostra o que custa pontos.
- A **pasta do avaliador** e o **lápis vermelho** riscando a frase feita.
- O limite de **650 palavras** do Common App.
- O **State vs. State**: um campeonato semanal de redação entre os 50 estados, com visual de broadside de 1776 (pergaminho, letra gótica, selo de cera, 13 estrelas). O placar zera toda segunda-feira.
- **Teste sem conta**: o aluno cola um parágrafo e vê em segundos o que está custando pontos.
- **Prazos**: a ED week vai de 25/10 a 1º/11, com leitura extra no app. Depois vêm a UC (30/11) e o Regular Decision (1º/1).

> Sobre a "guerra de estado contra estado": usei o **State vs. State do app** e a estética da **Independência de 1776**. Evitei de propósito imagens da Guerra Civil (bandeiras e uniformes da Confederação). Elas são politicamente sensíveis nos EUA e podem queimar a marca com pais e escolas.

## 4. Estilo "propaganda 2016–2018" + 1776

A gramática dos anúncios sociais daquela época:
- **Faixa de legenda grossa** em cima, com uma promessa só, em caixa alta, e emoji ("👇 TAG A FRIEND…").
- Formato **quadrado 1:1 e 4:5** no feed, com texto grande e legível sem som.
- **"Tag a friend who…"**, "Wait for it", "POV:".
- **Problema → solução → grátis**, no estilo Grammarly.

Com isso, misturei o kit de 1776 que já existe no app (`src/components/estadoVsEstado/Colonial.jsx`: pergaminho `#F2E6C9`, tinta `#2B1D10`, lacre `#8E1B1B`, gótica UnifrakturMaguntia, IM Fell English e Pinyon Script).

## 5. O plano (em ordem de impacto)

### A. Rosto e voz: 1 vídeo por dia no TikTok/Reels (o mais importante)
Grave com o celular, com o rosto ou só a mão e a folha, em 20 a 40 segundos:
1. **"Rating your first lines"**: leia 3 primeiras frases (enviadas por seguidores ou inventadas) e risque de vermelho. Termine com "Comment ESSAY and I'll read yours."
2. **"POV: you're the admissions reader"**: use a capa do anúncio 3 e passe o dedo nas frases.
3. **"Which state writes the best essays?"**: mostre o placar do State vs. State e diga "This week's champion is ___. Defend your state."
4. **"651 words"**: um texto passando do limite e a caixa cortando.

### B. Reddit (onde o veterano americano pede ajuda)
Em r/ApplyingToCollege e r/CollegeEssays, **ajude de verdade** em vez de fazer propaganda. Comente redações com o "olhar do avaliador" e só mencione o EssayForge quando alguém pedir uma ferramenta. Cada comentário útil é visto por milhares de pessoas.

### C. Micro-criadores (US$ 50 a 300 por vídeo)
Procure 5 a 10 criadores de #collegetok, #classof2027 e #collegeessay com 10 a 100 mil seguidores. Proposta: "Read your followers' essays using EssayForge, and your state is in the State vs. State."

### D. Orientadores (counselors) de high school
Mande um e-mail curto para orientadores com o link do State vs. State. Um orientador traz uma turma inteira, e o placar por estado dá a eles um motivo para compartilhar.

### E. Anúncio pago (só depois do Stripe em USD e do domínio próprio)
Comece com US$ 10 a 20 por dia em Instagram e TikTok, mirando 16 a 18 anos nos EUA, com os anúncios 1 e 2 e o link direto para o teste sem conta (`/us#experimente`).

## 6. Calendário até o prazo de 1º/11

| Data | Post no feed (IG) | Vídeo (TikTok/Reels) |
|---|---|---|
| 12/10 | Carrossel "Show, don't tell" (Canva) | "Rating your first lines" #1 |
| 13/10 | **Anúncio 1: State vs. State** | Capa do anúncio 3: "We, the Readers…" |
| 14/10 | — | "Which state writes the best essays?" |
| 15/10 | **Anúncio 2: Hear ye! (Nov 1)** | "Rating your first lines" #2 |
| 16 a 24/10 | 1 post a cada 2 dias | 1 vídeo por dia (repetir os formatos que mais funcionarem) |
| 25/10 a 1/11 | **ED week**: contagem regressiva diária | "X days to Nov 1. Paste your opening, I'll read it." |

## 7. Anúncios prontos (PNG)

Estão em `marketing/us/ads/2026-10-12/`:
- `1-state-vs-state-1080x1080.png`: feed, campeonato e "Tag a friend from your state".
- `2-hear-ye-nov1-1080x1350.png`: feed, prazo de 1º/11 e teste grátis sem conta.
- `3-tiktok-we-the-readers-1080x1920.png`: capa ou imagem de TikTok/Reels/Stories.

O código-fonte está em `marketing/us/ads/src/ads.html`. Para gerar de novo: `node marketing/us/ads/src/render.mjs <pasta>`.

### Legendas

**Anúncio 1 (State vs. State)**
> Your state is in an essay championship. 🏛️ All 50 of them — most don't know it yet.
> Write any college essay, your best score of the week counts for your state, and the board resets every Monday.
> 👇 Tag a friend from your state. Defend it.
> #collegeessay #commonapp #classof2027 #collegetok #applyingtocollege #statevsstate

**Anúncio 2 (Hear ye!)**
> Hear ye, Class of 2027 📜 Early Decision is Nov 1.
> Most essays lose the reader in the first sentence. Paste your opening and see what's costing you, in seconds and free, no account needed. Link in bio.
> #earlydecision #earlyaction #collegeessay #personalstatement #commonapp #classof2027

**Anúncio 3 (TikTok, "We, the Readers…")**
> We, the Readers, hold these truths to be self-evident 📜 Comment ESSAY and I'll read your first line.
> #collegetok #collegeessay #commonapp #classof2027 #fyp

## Fontes
- [Grammarly — case study (Think with Google)](https://thinkwithgoogle.com/marketing-strategies/automation/grammarly-case-study)
- [Grammarly's display ad strategy (Adbeat)](https://blog.adbeat.com/how-grammarlys-210m-display-ad-strategy-helped-it-become-a-13-billion-app/)
- [CollegeVine — live essay review](https://www.collegevine.com/livestreams/153/live-essay-review)
- [Social media is the new admissions ambassador (Cambridge Day)](https://www.cambridgeday.com/?p=110308)
- [Harvard's Social Media Influencers (Harvard Magazine)](https://www.harvardmagazine.com/2022/04/features-harvard-social-media-influencers)
- [TikTok college admissions essay trends (Shift podcast)](https://shiftcollegeadmissions.podbean.com/e/tiktok-college-admissions-essay-trends-what-you-should-and-shouldn-t-take-away-from-them)
- [Top AI edtech admissions tools (Empowerly)](https://empowerly.com/blog/top-ai-edtech-admissions-tools)
- [Digital marketing to college students 2026 (Anyroad)](https://blog.anyroad.com/post/digital-marketing-college-students-2026)

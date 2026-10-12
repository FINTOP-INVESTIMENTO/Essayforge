# Pacote "jovens EUA": imagens e legendas

Baseado em `marketing/us/PESQUISA-JOVENS-EUA.md`. Cada peça usa um gatilho da pesquisa:
- **formato nativo e caseiro** (bloco de notas, iMessage, folha riscada), que gera mais confiança que anúncio polido;
- **gancho na primeira linha**;
- **autonomia** ("we never write it");
- **pertencimento** (State vs. State);
- **prazo real** (1º/11).

Fontes e código: `marketing/us/ads/src/teens.html` e `countdown.html`.
Para gerar de novo: `node marketing/us/ads/src/render-all.mjs <arquivo.html> <pasta>`.

| # | Arquivo | Formato | Gatilho |
|---|---|---|---|
| 1 | `01-notes-app-cliches` | Feed 4:5 | Nativo + identificação ("which one is in yours?") |
| 2 | `02-imessage-groupchat` | Story/TikTok 9:16 | Prova social de amigos + "não escreve por você" |
| 3 | `03-red-pen-essay` | Feed 4:5 | Gancho "readers skim this" + demonstração do produto |
| 4 | `04-we-dont-write-it` | Feed 4:5 | Autonomia: tira a culpa de usar IA |
| 5 | `05-650-word-box` | Feed 4:5 | Humor + utilidade (limite do Common App) |
| 6 | `06-state-vs-state-story` | Story 9:16 | Pertencimento + "tag someone" |
| 7 | `07-countdown-nov1-story` | Story 9:16 | Urgência real (a série diária está em `../countdown/`) |
| 8 | `08-parents-coach-cost` | Feed 4:5 | Para os pais (quem paga) |

**Ordem sugerida:** 3 → 1 → 2 → 4 → 6 → 5 → 8, e a contagem regressiva nos Stories todos os dias.

---

### 1 · Notes app
> openings admissions readers are SO tired of 😭 which one is in yours? 👀
> Comment your first line and we'll tell you if it's on the list.
> Paste your full opening free → link in bio
> #collegeessay #commonapp #classof2027 #collegetok #applyingtocollege

### 2 · iMessage
> send this to the group chat 📲
> It's still YOUR essay, just sharper. Free first read, link in bio.
> #collegeapps #commonapp #classof2027 #collegetok #senioryear

### 3 · Red pen
> Admissions readers skim essays that start like this 👇
> Start in the moment instead. Want us to mark yours? Paste your opening, free, no account. Link in bio.
> #collegeessay #personalstatement #commonapp #essaytips #classof2027

### 4 · We don't write it
> Real talk: we will never write your essay. ✋
> You write it. We mark exactly what's costing you, and why. Your voice, sharpened.
> #collegeessay #commonapp #aiessay #classof2027 #collegetok

### 5 · 650 box
> fun fact: word 651 never arrives 💀 The Common App box just stops.
> Find what to cut before it cuts you → link in bio
> #commonapp #collegeessay #personalstatement #seniorszn #classof2027

### 6 · State vs. State
> Your state is in an essay championship. 🏛️ Write any college essay, and your best score of the week counts for your state. Resets every Monday.
> Tag someone from your state 👇
> #statevsstate #collegeessay #classof2027 #collegetok

### 7 · Contagem regressiva (Story; use o arquivo do dia em `../countdown/`)
> X days to Nov 1. Today's 5-minute task: paste your first paragraph → fix one thing.
> Link sticker → /us#experimente

### 8 · Pais (Facebook/Instagram; anúncio pago só depois do Stripe em USD)
> Your kid's essay deserves a reader before the admissions office. EssayForge marks what costs points in seconds, and never writes it for them. First full read free, no card.

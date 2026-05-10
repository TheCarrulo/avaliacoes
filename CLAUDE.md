# Avaliações — Agrupamento Afonso Paiva

Site: https://avaliacoes.carrulo.pt
Repositório: https://github.com/TheCarrulo/avaliacoes

## Estrutura

- `index.html` — página principal com as avaliações futuras/atuais
- `arquivo.html` — página com o histórico de avaliações realizadas
- `404.html` — redireciona URLs desconhecidos para index.html
- `CNAME` — domínio personalizado (`avaliacoes.carrulo.pt`)
- `.github/workflows/deploy-pages.yml` — deploy automático para GitHub Pages ao fazer push para `main`

## Funcionamento

### index.html
- Lista de avaliações futuras ordenadas por data
- Destaque visual por proximidade:
  - **Vermelho** (`urgent`) — 0 a 2 dias
  - **Azul** (`soon`) — 3 a 7 dias
  - Cinzento — mais de 7 dias ou já realizadas
- Botão "Arquivo de avaliações →" abaixo da lista, leva para `arquivo.html`
- Rodapé com data de última atualização (calculada dinamicamente)

### arquivo.html
- Lista todas as avaliações com data passada, ordenadas da mais recente para a mais antiga
- Badge dinâmico por tipo (`t.tipo`): "Teste", "Apresentação Oral", etc.
- Botão "← Avaliações atuais" leva de volta para `index.html`

## Avaliações registadas

### Em index.html (futuras)
| Data | Dia | Disciplina | Tipo |
|------|-----|------------|------|
| 12/05/2026 | Terça-feira | Português | Teste |
| 15/05/2026 | Sexta-feira | Inglês | Teste |
| 21/05/2026 | Quinta-feira | História | Teste |
| 27/05/2026 | Quarta-feira | Ciências | Teste |

### Em arquivo.html (realizadas)
| Data | Dia | Disciplina | Tipo |
|------|-----|------------|------|
| 29/04/2026 | Quarta-feira | História e Geografia de Portugal | Teste |
| 28/04/2026 | Terça-feira | Português | Apresentação Oral |
| 22/04/2026 | Quarta-feira | Ciências | Teste |
| 19/04/2026 | Domingo | Matemática | Teste |
| 18/04/2026 | Sábado | Ciências | Teste |

## Google Analytics
- ID: `G-8BE45TC82J`
- Integrado em `index.html` e `arquivo.html`

## Convenções
- Para adicionar uma avaliação em `index.html`, editar o array `testes` no `<script>` com os campos: `dia`, `mes`, `mesNum` (0=jan…11=dez), `ano`, `semana`, `disciplina`
- Para mover uma avaliação para o arquivo, adicioná-la ao array `testes` em `arquivo.html` com o campo `tipo`
- As datas passadas aparecem automaticamente no arquivo (filtro por `data < hoje`)
- O deploy é automático — basta fazer merge para `main`

## Git
- Branch de trabalho: `claude/document-work-summary-caxRd`
- Workflow: editar → commit → push → PR para `main` → merge (squash)

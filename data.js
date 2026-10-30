// Shared test list for index.html and arquivo.html.
// Month name and weekday are derived in pt-PT; do not store them here.
// ATUALIZADO is replaced at deploy from `git log -1` (see deploy-pages.yml).
const ATUALIZADO = "2026-10-30";

const TESTES = [
  { data: "2026-04-18", disciplina: "Ciências", tipo: "Teste" },
  { data: "2026-04-19", disciplina: "Matemática", tipo: "Teste" },
  { data: "2026-04-22", disciplina: "Ciências", tipo: "Teste" },
  { data: "2026-04-28", disciplina: "Português", tipo: "Apresentação Oral" },
  { data: "2026-04-29", disciplina: "História e Geografia de Portugal", tipo: "Teste" },
  { data: "2026-05-12", disciplina: "Português", tipo: "Teste" },
  { data: "2026-05-21", disciplina: "Inglês", tipo: "Teste" },
  { data: "2026-05-22", disciplina: "História", tipo: "Teste" },
  { data: "2026-05-27", disciplina: "Ciências", tipo: "Teste" },
  { data: "2026-05-28", disciplina: "Matemática", tipo: "Teste" },
  { data: "2026-10-20", disciplina: "Ciências", tipo: "Teste" },
  { data: "2026-10-21", disciplina: "Matemática", tipo: "Teste" },
  { data: "2026-11-03", disciplina: "História", tipo: "Teste" },
  { data: "2026-11-18", disciplina: "Português", tipo: "Teste" },
  { data: "2026-11-19", disciplina: "Inglês", tipo: "Teste" },
  { data: "2026-11-23", disciplina: "História", tipo: "Teste" },
  { data: "2026-11-25", disciplina: "Matemática", tipo: "Teste" },
  { data: "2026-11-27", disciplina: "Ciências", tipo: "Teste" },
];

function parseData(iso) {
  const [ano, mes, dia] = iso.split("-").map(Number);
  return new Date(ano, mes - 1, dia);
}

function partesData(iso) {
  const date = parseData(iso);
  return {
    date,
    dia: date.getDate(),
    mes: date.toLocaleDateString("pt-PT", { month: "long" }),
    semana: date.toLocaleDateString("pt-PT", { weekday: "long" }),
  };
}

function textoAtualizado() {
  return parseData(ATUALIZADO).toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

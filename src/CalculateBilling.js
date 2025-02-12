const fs = require("fs");
const path = require("path");

// Caminho do arquivo JSON
const filePath = path.join(__dirname, "..", "data", "faturamento.json");
console.log(filePath);
// Função para carregar o faturamento do JSON
function carregarFaturamento() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao carregar o arquivo de faturamento:", error.message);
    return [];
  }
}

// Função para calcular os resultados
function calcularFaturamento(faturamentoDiario) {
  if (!Array.isArray(faturamentoDiario) || faturamentoDiario.length === 0) {
    console.error("Nenhum dado de faturamento disponível.");
    return null;
  }

  const diasComFaturamento = faturamentoDiario.filter((dia) => dia.valor > 0);

  if (diasComFaturamento.length === 0) {
    console.error("Nenhum dia com faturamento positivo encontrado.");
    return null;
  }

  const valores = diasComFaturamento.map((dia) => dia.valor);

  const menorFaturamento = Math.min(...valores);
  const maiorFaturamento = Math.max(...valores);
  const somaFaturamento = valores.reduce((acc, valor) => acc + valor, 0);
  const mediaMensal = somaFaturamento / valores.length;
  const diasAcimaDaMedia = valores.filter(
    (valor) => valor > mediaMensal
  ).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia,
  };
}

// Executa a função
const faturamentoDiario = carregarFaturamento();
const resultados = calcularFaturamento(faturamentoDiario);

if (resultados) {
  console.log("Menor valor de faturamento:", resultados.menorFaturamento);
  console.log("Maior valor de faturamento:", resultados.maiorFaturamento);
  console.log(
    "Número de dias com faturamento acima da média:",
    resultados.diasAcimaDaMedia
  );
}

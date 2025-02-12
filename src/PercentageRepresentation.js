// Dados de faturamento por estado
const faturamentoPorEstado = new Map([
  ["SP", 67836.43],
  ["RJ", 36678.66],
  ["MG", 29229.88],
  ["ES", 27165.48],
  ["Outros", 19849.53],
]);

// Função para calcular percentuais
function calcularPercentualRepresentacao(faturamentoMap) {
  const faturamentoTotal = [...faturamentoMap.values()].reduce(
    (acc, valor) => acc + valor,
    0
  );

  return new Map(
    [...faturamentoMap.entries()].map(([estado, valor]) => [
      estado,
      ((valor / faturamentoTotal) * 100).toFixed(2),
    ])
  );
}

// Executa a função e exibe os resultados
const percentuais = calcularPercentualRepresentacao(faturamentoPorEstado);
percentuais.forEach((percentual, estado) =>
  console.log(`${estado}: ${percentual}%`)
);

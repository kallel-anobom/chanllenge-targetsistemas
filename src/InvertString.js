const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para inverter a string
function inverterString(str) {
  return str.split("").reverse().join("");
}

// Captura a entrada do usuário
rl.question("Digite uma string para inverter: ", (stringOriginal) => {
  // Inverte a string
  const stringInvertida = inverterString(stringOriginal);

  // Exibe o resultado
  console.log(`String original: ${stringOriginal}`);
  console.log(`String invertida: ${stringInvertida}`);

  // Fecha o readline
  rl.close();
});

const readline = require("readline");

function isFibonacci(num) {
  if (num < 0) return false; // Fibonacci não tem números negativos

  let [a, b] = [0, 1];
  while (b < num) {
    [a, b] = [b, a + b];
  }
  return b === num || num === 0;
}

function checkFibonacci() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Informe um número para verificar se pertence à sequência de Fibonacci: ",
    (input) => {
      const numero = parseInt(input.trim(), 10);

      if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
      } else {
        console.log(
          isFibonacci(numero)
            ? `${numero} pertence à sequência de Fibonacci.`
            : `${numero} não pertence à sequência de Fibonacci.`
        );
      }

      rl.close();
    }
  );
}

// Executar o programa
checkFibonacci();

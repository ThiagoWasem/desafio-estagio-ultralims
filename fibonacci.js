function gerarFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let sequencia = [0, 1];
  for (let i = 2; i < n; i++) {
    let proximoNumero = sequencia[i - 1] + sequencia[i - 2];
    sequencia.push(proximoNumero);
  }

  return sequencia;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function solicitarEntrada() {
  rl.question("\nDigite um número inteiro para gerar a sequência de Fibonacci (ou 0 para sair): ", (entrada) => {
    let n = parseInt(entrada);

    if (isNaN(n) || n < 0) {
      console.log("Por favor digite um número inteiro válido.");
    } else if (n === 0) {
      console.log("Encerrando o programa...");
      return rl.close();
    } else {
      console.log("Sequência de Fibonacci:", gerarFibonacci(n));
    }

    solicitarEntrada();
  });
}

solicitarEntrada();

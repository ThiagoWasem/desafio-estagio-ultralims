function ehNumeroPerfeito(n) {
  if (n <= 1) return false;

  let somaDivisores = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      somaDivisores += i;
    }
  }

  return somaDivisores === n;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function solicitarNumero() {
  rl.question("Digite um número inteiro para testar se é perfeito (ou 0 para sair): ", (entrada) => {
    let n = parseInt(entrada);

    if (n === 0) {
      console.log("Encerrando programa...");
      rl.close();
      return;
    }

    console.log(ehNumeroPerfeito(n) ? "Verdadeiro" : "Falso");
    solicitarNumero();
  });
}

solicitarNumero();

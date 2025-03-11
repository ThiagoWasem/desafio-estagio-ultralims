function encontrarSubstringPalindromicaMaisLonga(s) {
  if (!s || s.length === 0) return "";

  let inicio = 0;
  let maxComprimento = 0;

  function expandirCentro(esquerda, direita) {
    while (esquerda >= 0 && direita < s.length && s[esquerda] === s[direita]) {
      esquerda--;
      direita++;
    }
    return [esquerda + 1, direita - 1];
  }

  for (let i = 0; i < s.length; i++) {
    let [inicio1, fim1] = expandirCentro(i, i);
    let [inicio2, fim2] = expandirCentro(i, i + 1);

    let comprimento1 = fim1 - inicio1 + 1;
    let comprimento2 = fim2 - inicio2 + 1;

    if (comprimento1 > maxComprimento) {
      inicio = inicio1;
      maxComprimento = comprimento1;
    }

    if (comprimento2 > maxComprimento) {
      inicio = inicio2;
      maxComprimento = comprimento2;
    }
  }

  return s.substring(inicio, inicio + maxComprimento);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function solicitarString() {
  rl.question("Digite uma string para encontrar a maior substring palindrômica (ou 'sair' para encerrar): ", (entrada) => {
    if (entrada.toLowerCase() === "sair") {
      console.log("Encerrando programa...");
      rl.close();
      return;
    }

    console.log(`Maior substring palindrômica: "${encontrarSubstringPalindromicaMaisLonga(entrada)}"`);
    solicitarString();
  });
}

solicitarString();

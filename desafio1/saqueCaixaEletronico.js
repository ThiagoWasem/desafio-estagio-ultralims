function simularSaque(valor) {
  const notasEMoedas = [100, 50, 20, 10, 5, 2, 1];
  let resultado = [];

  for (let i = 0; i < notasEMoedas.length; i++) {
    const notaOuMoeda = notasEMoedas[i];
    const quantidade = Math.floor(valor / notaOuMoeda);

    if (quantidade > 0) {
      resultado.push(`${quantidade} nota(s) de ${notaOuMoeda}`);
      valor -= quantidade * notaOuMoeda;
    }
  }

  return resultado;
}

const valor = 130;
const saque = simularSaque(valor);

console.log(`Para o valor de ${valor}, o saque seria:`);
saque.forEach(item => console.log(item));

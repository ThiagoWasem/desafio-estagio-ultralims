function buscaBinaria(lista, alvo) {
  let esquerda = 0;
  let direita = lista.length - 1;
  let resultado = -1;

  while (esquerda <= direita) {
    let meio = Math.floor((esquerda + direita) / 2);

    if (lista[meio] === alvo) {
      resultado = meio;
      direita = meio - 1;
    } else if (lista[meio] < alvo) {
      esquerda = meio + 1;
    } else {
      direita = meio - 1;
    }
  }

  return resultado;
}

const listaOrdenada = [5, 12, 18, 23, 45, 70, 89];
const alvo = 23;
console.log(`Índice do alvo: ${buscaBinaria(listaOrdenada, alvo)}`);

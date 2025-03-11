const axios = require("axios");

async function buscarCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const resposta = await axios.get(url);

  if (resposta.data.erro) throw new Error("CEP não encontrado");

  return {
    cep: resposta.data.cep,
    logradouro: resposta.data.logradouro,
    bairro: resposta.data.bairro,
    cidade: resposta.data.localidade,
    estado: resposta.data.uf
  };
}

module.exports = { buscarCep };

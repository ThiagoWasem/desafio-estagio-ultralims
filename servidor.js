const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const apiViaCep = require("./apiViaCep");

const app = express();
const PORT = 3000;
const dbPath = path.join(__dirname, "database.json");

app.use(cors());
app.use(express.json());

function lerBancoDados() {
  if (!fs.existsSync(dbPath)) return [];
  return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
}

function salvarBancoDados(dados) {
  fs.writeFileSync(dbPath, JSON.stringify(dados, null, 2));
}

app.get("/enderecos", (req, res) => {
  const { ordenarPor, ordem } = req.query;
  let enderecos = lerBancoDados();

  if (ordenarPor) {
    enderecos.sort((a, b) => {
      if (ordem === "desc") return b[ordenarPor].localeCompare(a[ordenarPor]);
      return a[ordenarPor].localeCompare(b[ordenarPor]);
    });
  }

  res.json(enderecos);
});

app.post("/buscarCep", async (req, res) => {
  const { cep } = req.body;

  if (!cep || cep.length !== 8) {
    return res.status(400).json({ erro: "CEP inválido!" });
  }

  try {
    const endereco = await apiViaCep.buscarCep(cep);
    let enderecos = lerBancoDados();

    if (!enderecos.find(e => e.cep === endereco.cep)) {
      enderecos.push(endereco);
      salvarBancoDados(enderecos);
    }

    res.json(endereco);
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao buscar o CEP" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

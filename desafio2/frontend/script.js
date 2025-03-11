let ordem = "asc";

function buscarEndereco() {
    const cep = document.getElementById("cepInput").value.trim();
    const mensagemErro = document.getElementById("mensagemErro");
    mensagemErro.textContent = "";

    if (cep.length !== 8 || isNaN(cep)) {
        mensagemErro.textContent = "CEP inválido! Insira um CEP válido.";
        return;
    }

    fetch("http://localhost:3000/buscarCep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cep })
    })
    .then(res => res.json())
    .then(data => {
        if (data.erro) {
            mensagemErro.textContent = data.erro;
        } else {
            carregarEnderecos();
        }
    })
    .catch(() => {
        mensagemErro.textContent = "Erro ao buscar o CEP.";
    });
}

function carregarEnderecos() {
    const ordenarPor = document.getElementById("ordenarPor").value;

    fetch(`http://localhost:3000/enderecos?ordenarPor=${ordenarPor}&ordem=${ordem}`)
    .then(res => res.json())
    .then(data => {
        const tabela = document.getElementById("tabelaEnderecos");
        tabela.innerHTML = "";

        data.forEach(endereco => {
            const linha = `
                <tr>
                    <td>${endereco.cep}</td>
                    <td>${endereco.logradouro}</td>
                    <td>${endereco.bairro}</td>
                    <td>${endereco.cidade}</td>
                    <td>${endereco.estado}</td>
                </tr>
            `;
            tabela.innerHTML += linha;
        });
    })
    .catch(() => {
        document.getElementById("mensagemErro").textContent = "Erro ao carregar os endereços.";
    });
}

function alternarOrdem() {
    ordem = ordem === "asc" ? "desc" : "asc";
    carregarEnderecos();
}

document.addEventListener("DOMContentLoaded", carregarEnderecos);

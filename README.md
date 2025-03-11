# 📌 Sistema Web para Consulta e Armazenamento de Endereços

Este projeto permite consultar um endereço pelo CEP, armazenar os registros e exibi-los com opções de ordenação.

---

## 🚀 Tecnologias Utilizadas
- **Backend:** Node.js, Express, Axios, SQLite3
- **Frontend:** HTML, CSS, JavaScript
- **API Utilizada:** ViaCEP

---

## 📂 Estrutura de Pastas
```
│── /desafio1
│   ├── fibonacci.js
│   ├── buscaBinaria.js
│   ├── numeroPerfeito.js
│   ├── substringPalindromica.js
│   ├── saqueCaixaEletronico.js
│── /desafio2
│── /backend
│   ├── servidor.js       # Servidor backend com Express
│   ├── database.json     # Configuração do banco de dados SQLite
│   ├── apiViaCep.js    # Módulo para buscar endereço na API ViaCEP
│── /frontend
│   ├── index.html      # Interface do usuário
│   ├── styles.css      # Estilos visuais
│   ├── script.js       # Lógica do frontend
│── README.md          # Documentação
```

---

## 🛠️ Como Configurar e Executar

### 1️⃣ **Instalar o Node.js**  
Se ainda não tem, baixe em: [https://nodejs.org/](https://nodejs.org/)

Verifique a instalação com:
```sh
node -v
npm -v
```

### 2️⃣ **Instalar Dependências**  
Abra o terminal na pasta `/backend` e execute:
```sh
cd backend
npm install express cors axios sqlite3
```

### 3️⃣ **Rodar o Servidor**  
Ainda na pasta `/backend`, inicie o servidor:
```sh
node server.js
```
Se tudo der certo, a API estará rodando na porta **3000**.

### 4️⃣ **Abrir o Frontend**  
Agora, basta abrir `index.html` no navegador.

---

## 📌 Como Usar
1. Digite um CEP no campo de busca e clique em "Buscar".
2. O sistema consultará o endereço na API ViaCEP.
3. Os dados serão armazenados e exibidos na lista de endereços.
4. É possível ordenar a lista por cidade, bairro ou estado.

---

## 🔠 Desafio 1: Lógica de Programação

Este desafio consiste em resolver cinco problemas de lógica utilizando qualquer linguagem de programação.

### ✨ Desafios:
- **Sequência de Fibonacci:** Gerar os `n` primeiros números.
- **Busca Binária:** Encontrar o índice de um número em uma lista ordenada.
- **Números Perfeitos:** Identificar se um número é perfeito.
- **Substring Palindrômica Mais Longa:** Encontrar a maior substring palindrômica em uma string.
- **Saque em Caixa Eletrônico:** Calcular o menor número de notas necessárias para um saque.

Os códigos referentes a esses desafios estão localizados na pasta `/desafio1`.

---



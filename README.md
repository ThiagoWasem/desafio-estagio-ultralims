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
/desafio2
│── /backend
│   ├── server.js       # Servidor backend com Express
│   ├── database.js     # Configuração do banco de dados SQLite
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

## 🔄 Como Subir para o GitHub

### 1️⃣ **Criar um Repositório**  
- Acesse [GitHub](https://github.com/) e crie um repositório chamado `desafio-estagio-ultralims`.

### 2️⃣ **Enviar os Arquivos**  
No terminal, na pasta raiz do projeto, execute:
```sh
git init
git add .
git commit -m "feat: adiciona solução do desafio 2"
git branch -M main
git remote add origin https://github.com/seu-usuario/desafio-estagio-ultralims.git
git push -u origin main
```

### 3️⃣ **Compartilhar o Link**  
Envie o link do repositório no e-mail para `th@ultralims.com.br` com o assunto:
📩 **[Vaga Estágio Desenvolvimento - Seu Nome]**

---

### ✨ Bom desafio e boa sorte! 🚀


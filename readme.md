# Projeto Livraria

# 📄 - Descrição

Esse projeto consiste num CRUD referente há livros dentro de uma livraria, com o intuito de estudar NODEJS com o Banco de Dados MongoDB. 

# 💡 - Tecnologias Utilizadas

- NODEJS
    - 
- EXPRESS
- MONGODB - ATLAS
- MONGOOSE
- NODEMON

# 🟢 - Iniciando o Projeto

**Os passos necessários para início do projeto são:** 

1 - Baixar o repositório no Git

2 - Ao abrir o projeto em qualquer editor, utilizar o comando “**npm i**” para realizar a instalação de todas as dependências necessárias

3 - Com o comando npm start é possível realizar a execução da aplicação

4 - Dentro da pasta existe um arquivo do insomnia com as rotas utilizadas divididas entre livros e autores.

# 🗺️ - Mapeamento de Rotas

A aplicação é composta de 2 Rotas principais e suas sub-rotas, São elas :

## 📕 Livros

**Rota:** “/livros”

**Método: Get**

**Exemplo:** **http://localhost:3000/livros**

**Função: Listar todos os livros cadastrados na base de dados**

![Untitled](Projeto%20Livraria%2041e12405566a40cfb54f408e76f22005/Untitled.png)

**Rota:** “/livros/:id”

**Método: Get**

**Exemplo:** **http://localhost:3000/livros/63504b9602618e44c22e8b96**

**Função: Buscar um livro específico baseado em seu ID**

![Untitled](Projeto%20Livraria%2041e12405566a40cfb54f408e76f22005/Untitled%201.png)

**Rota:** “/livros”

**Método: post**

**Exemplo:** **http://localhost:3000/livros**

**Função: Cadastrar um novo livro na base de dados**

**Body:**

![Untitled](Projeto%20Livraria%2041e12405566a40cfb54f408e76f22005/Untitled%202.png)

**Rota:** “/livros/:id”

**Método: put**

**Exemplo:** **http://localhost:3000/livros/63503aef3b5bf83f9633a1af**

**Função: Atualizar um livro na base de dados**

**Body:**

                                ****

![Untitled](Projeto%20Livraria%2041e12405566a40cfb54f408e76f22005/Untitled%203.png)

**Rota:** “/livros/:id”

**Método: delete**

**Exemplo:** **http://localhost:3000/livros/6350567491e3225d923f2950**

**Função: Exclui um livro na base de dados**

![Untitled](Projeto%20Livraria%2041e12405566a40cfb54f408e76f22005/Untitled%204.png)

## ✍🏾 - Autores

**Rota:** “/autores”

**Método: Get**

**Exemplo:** **http://localhost:3000/autores**

**Função: Listar todos os autores cadastrados na base de dados**

![Untitled](Projeto%20Livraria%2041e12405566a40cfb54f408e76f22005/Untitled%205.png)

**Rota:** “/autores/:id”

**Método: Get**

**Exemplo:** **http://localhost:3000/autores/6351462b68a9fe0db8c99aef**

**Função: Buscar um autor específico baseado em seu ID**

![Untitled](Projeto%20Livraria%2041e12405566a40cfb54f408e76f22005/Untitled%206.png)

**Rota:** “/autores”

**Método: post**

**Exemplo:** **http://localhost:3000/autores**

**Função: Cadastrar um novo autor na base de dados**

**Body:**

![Untitled](Projeto%20Livraria%2041e12405566a40cfb54f408e76f22005/Untitled%207.png)

**Rota:** “/autores/:id”

**Método: put**

**Exemplo:** **http://localhost:3000/autores/6350b9c756d80e821933efb4**

**Função: Atualizar um autor na base de dados**

**Body:**

![Untitled](Projeto%20Livraria%2041e12405566a40cfb54f408e76f22005/Untitled%208.png)

/

**Rota:** “/autores/:id”

**Método: delete**

**Exemplo:** **http://localhost:3000/autores/6350b9c756d80e821933efb4**

**Função: Exclui um autor na base de dados**

![Untitled](Projeto%20Livraria%2041e12405566a40cfb54f408e76f22005/Untitled%209.png)

## 🏁 - Finalizada em: 19/10/2022

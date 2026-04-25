# 📦 MVC Ciclo de Vida - Node.js

Projeto desenvolvido para estudo da arquitetura **MVC (Model-View-Controller)** utilizando Node.js e Express.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* Nodemon

---

## 📂 Estrutura do projeto

```
📁 app
 ├── 📁 controllers
 ├── 📁 models
 ├── 📁 routes
📄 server.js
```

---

## ⚙️ Como executar o projeto

### 1. Clonar o repositório

```
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
```

### 2. Instalar dependências

```
npm install
```

### 3. Rodar o projeto

```
npm run dev
```

---

## 📌 Funcionalidades

* Estrutura MVC básica
* Criação de rotas
* Separação de responsabilidades (controller, model, route)

---

## 📖 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de demonstrar, na prática, o funcionamento da arquitetura **MVC (Model-View-Controller)** no desenvolvimento backend com Node.js.

A aplicação simula o ciclo de vida de uma requisição HTTP, desde o momento em que o cliente realiza uma chamada até a resposta final enviada pelo servidor. Durante esse processo, cada camada do padrão MVC exerce um papel específico:

* **Model:** responsável pela lógica de negócio e manipulação dos dados.
* **Controller:** recebe as requisições, processa as informações e define qual resposta será enviada.
* **Routes:** define os endpoints da aplicação e direciona cada requisição para o controller correspondente.

Esse padrão foi utilizado para garantir uma melhor organização do código, facilitando a manutenção, escalabilidade e reutilização dos componentes.

Além disso, o projeto utiliza o **Express** para gerenciamento das rotas e middlewares, permitindo estruturar uma API de forma simples e eficiente.

---

## 🔄 Ciclo de vida da requisição

1. O cliente faz uma requisição HTTP (GET, POST, etc.)
2. A rota correspondente é identificada
3. O controller é acionado
4. O controller interage com o model (quando necessário)
5. Uma resposta é retornada ao cliente

Esse fluxo representa o funcionamento básico de aplicações backend modernas.

---

## 🎯 Objetivo de aprendizagem

* Compreender a separação de responsabilidades no padrão MVC
* Entender o fluxo de uma requisição HTTP no Node.js
* Praticar a organização de projetos backend
* Aplicar boas práticas de desenvolvimento

---

## 📌 Considerações

Este projeto tem caráter educacional e foi desenvolvido como parte dos estudos em desenvolvimento backend, servindo como base para aplicações mais complexas no futuro.



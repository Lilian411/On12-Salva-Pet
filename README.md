![Salva-Petz](https://image.freepik.com/vector-gratis/personaje-dibujos-animados-lindo-gato-perro_52569-1058.jpg)


---
<a align href = "#Apresentação"> Apresentação </a> │
<a align href = "#Objetivo"> Objetivo </a> │
<a align href = "#Tecnologias usadas"> Tecnologias usadas </a> │
<a align href = "#Arquitetura MVC"> Arquitetura MVC </a> │
<a align href = "#Contribuição"> Contribuição </a> │
<a align href = "#Autora"> Autora </a> │
</p>
---


### APRESENTAÇÃO : 

#### Ola,seja bem vindo (a) ao projeto de conclusão do bootcamp de Back-End {reprograma}. Essa API tem como objetivo ajudar a encontrar doadores de sangue para cães e gatos e reunir informações sobre locais onde possam levar seus animaizinhos para fazer a doação.
------------------------------------------------------------------------------------------------
### OBJETIVO:

#### A ideia é que ela possa ser aproveitada para criação de um app,assim podendo facilitar o encontro de doador e recptor. ampliar o nivel de doações, e concientizar a população do quão importante é para os animais a doação de sangue quanto para os humanos e suas vantagens.
-----------------------------------------------------------------------------------------------
## Tecnologias utilizadas:
  Ferramentas   |	      Descrição
:--------------:|:----------------------------------------------------------------------------:
 __javascript__ |	Linguagem de programação
 __nodejs__:	  | Ambiente de execução do javascript
 __express__:	  | Framework NodeJS
 __dotenv__:	  | Dependência para proteger dados sensíveis do projeto
 __mongoose__: 	| Dependência que interage com o MongoDB para conexão de banco de dados, criação do modelo e das coleções
 __nodemon__:	  | Dependência que observa como atualizações atualizadas nos documentos para rodar o servidor automaticamente
 __npm__:       | Gerenciador de pacotes
 __MongoDb__:	  |Banco de dado não relacional orientado a documentos 
 __Postman__:	  |Interface gráfica para realizar os testes
 __Heroku__:    |Hospedagem na nuvem, com integração ao GitHub.
---------------------------------------------------------------------------------------------

ARQUITETURA MVC :
`` `
 📁 projetoFinal
   |
   |-  📁 src
   | |
   | |- 📁 data
   | |- 📄 database.js
   |
   | |- 📁 controllers
   | |- 📄 bancoController.js
   | |- 📄 doadorController.js
   | |- 📄 receptorController.js
   |
   | |- 📁 models
   | |- 📄 banco.js
   | |- 📄 doador.js
   | |- 📄 receptor.js
   |
   | |- 📁 routes
   | |- 📄 banco.routes.js 
   | |- 📄 doador.routes.js
   | |- 📄 receptor.routes.js
   | 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 procfile
   |- 📄 server.js
   `` `
  ----------------------------------------------------------------------------------------------
  ###  Contribuição

* Faça um `fork` do projeto;

*Copie uma url do **fork** realizado e, no **prompt de comando** da sua máquina, realize o clone do projeto através do `git clone <link_do_fork_do_repositorio>` ;

* Crie uma **branch** para realizar suas contribuições `git checkout -b feature / <sua_branch>` ;

* Instale como dependências à execução da API através do comando `npm install` ;

* Não RAIZ DO PROJETO, renomeie `.env.example` para ` .env` e adicione OS Valores das Variáveis `PORT` (porta sugerida ` 8888` ), `MONGODB_URL` (string de Conexão com o Banco de Dados)

* Para executar uma API, utilize o comando `npm start` no seu terminal 

* Após suas contribuições no projeto, realizar o **commit** com o comando `git commit -m 'sua mensagem'` 

* Para subir o projeto no seu GitHub, basta executar o comando `git push origin / <sua_branch>` 

* E finalizar criando um novo **Pull Request** com as contribuições para o projeto original.

--------------------------------------------------------------------------------------------
_Autora:_ [Lilian Guedes](http://linkedin.com/in/lilian-guedes-09601320b)
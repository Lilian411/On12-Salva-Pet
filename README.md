![Salva-Petz](C:\Users\Lilian\OneDrive\Imagens)



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
 📁 projetoFinal
   |
   |:-  📁 src
   |    |
   |    |:-: 📁 data
   |         |:-: 📄 database.js
   |
   |    |- 📁 controllers
   |         |:-: 📄 bancoController.js
   |         |:-: 📄 doadorController.js
   |         |:-: 📄 receptorController.js
   |
   |    |:- 📁 models
   |         |:-: 📄 banco.js
   |         |:-: 📄 doador.js
   |         |:-: 📄 receptor.js
   |
   |    |:- 📁 routes
   |         |:-: 📄 banco.routes.js 
   |         |:-: 📄 doador.routes.js
   |         |:-: 📄 receptor.routes.js
   | 
   |
   |
   |:- 📄 .env
   |:- 📄 .env.example
   |:- 📄 .gitignore
   |:- 📄 package-lock.json
   |:- 📄 package.json
   |:- 📄 procfile
   |:- 📄 server.js

  ----------------------------------------------------------------------------------------------
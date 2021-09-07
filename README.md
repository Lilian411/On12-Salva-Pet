APRESENTAÇÃO : 

Ola,seja bem vindo (a) ao projeto de conclusão do bootcamp de Back-End {reprograma}. Essa API tem como objetivo ajudar a encontrar doadores de sangue para cães e gatos e reunir informações sobre locais onde possam levar seus animaizinhos para fazer a doação.
------------------------------------------------------------------------------------------------
OBJETIVO:

A ideia é que ela possa ser aproveitada para criação de um app,assim podendo facilitar o encontro de doador e recptor. ampliar o nivel de doações, e concientizar a população do quão importante é para os animais a doação de sangue quanto para os humanos e suas vantagens.
-----------------------------------------------------------------------------------------------

TECNOLOGIAS UTILIZADAS NO PROJETO:
Ferramentas e descrições

JavaScript: Linguagem de programação.
Nó JS: Ambiente de execução do JavaScript.
Expresso: Framework Node JS.
Mongoose: Dependência que interage com o MongoDB para conexão de banco de dados, criação do modelo e das coleções.
Nodemon: Dependência que observa as atualizações realizadas nos documentos para rodar ou servidor automaticamente.
Cors: Dependência que facilita a permissão de acesso à API.
Dotenv: Dependência que ajuda a proteger dados sensíveis.
npm: Gerenciador de pacotes.
MongoDb: Banco de dados não relacional orientado a documentos.
Robo 3T: Interface gráfica para verificar se os dados foram persistidos no banco de dados.
Postman: Interface gráfica para realizar os testes.
Git / GitHub: Versão de código.

-----------------------------------------------------------------------------------------------

ARQUITETURA MVC :
 📁 projetoFinal
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 bancoController.js
   |         |- 📄 doadorController.js
   |         |- 📄 recptorController.js
   |
   |    |- 📁 models
   |         |- 📄 banco.js
   |         |- 📄 doador.js
   |         |- 📄 recptor.js
   |
   |    |- 📁 routes
   |         |- 📄 banco.routes.js 
   |         |- 📄 doador.routes.js
   |         |- 📄 recptor.routes.js
   |
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

  ----------------------------------------------------------------------------------------------
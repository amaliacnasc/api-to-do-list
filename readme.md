
<body>
  <h1>Back Todo</h1>

  <h2>Descrição</h2>
  <p>Este é o backend do projeto <strong>Back Todo</strong>, um sistema de gerenciamento de tarefas. Este backend foi desenvolvido utilizando Node.js e Prisma, com autenticação JWT, gerenciamento de arquivos via Cloudinary, e suporte a CORS.</p>

  <h2>Informações do Projeto</h2>
  <ul>
    <li><strong>Nome:</strong> back-todo</li>
    <li><strong>Versão:</strong> 1.0.0</li>
    <li><strong>Licença:</strong> ISC</li>
  </ul>

  <h2>Instalação</h2>
  <p>Para começar a usar o projeto, siga os seguintes passos:</p>
  <ol>
    <li>Clone o repositório: <code>git clone <url-do-repositorio></code></li>
    <li>Entre na pasta do projeto: <code>cd back-todo</code></li>
    <li>Instale as dependências: <code>npm install</code></li>
    <li>Crie um arquivo .env e adicione as variáveis de ambiente necessárias.</li>
    <li>Execute o projeto: <code>npm start</code></li>
  </ol>

  <h2>Dependências</h2>
  <p>Este projeto utiliza as seguintes dependências:</p>
  <ul>
    <li><strong>@prisma/client</strong>: ORM para acessar o banco de dados.</li>
    <li><strong>bcryptjs</strong>: Biblioteca para criptografar senhas.</li>
    <li><strong>body-parser</strong>: Middleware para fazer parsing do corpo das requisições HTTP.</li>
    <li><strong>cloudinary</strong>: Biblioteca para upload e gerenciamento de imagens.</li>
    <li><strong>cors</strong>: Middleware para permitir requisições de diferentes origens.</li>
    <li><strong>dotenv</strong>: Carregar variáveis de ambiente a partir de arquivos .env.</li>
    <li><strong>express</strong>: Framework web para Node.js.</li>
    <li><strong>jsonwebtoken</strong>: Biblioteca para criar e verificar tokens JWT.</li>
    <li><strong>router</strong>: Implementação de roteamento para o Express.</li>
    <li><strong>uuid</strong>: Biblioteca para gerar identificadores únicos universais (UUID).</li>
  </ul>

  <h2>Dependências de Desenvolvimento</h2>
  <ul>
    <li><strong>prisma</strong>: Ferramenta para migração e gerenciamento do banco de dados.</li>
  </ul>

  <h2>Scripts</h2>
  <p>Este projeto contém os seguintes scripts:</p>
  <ul>
    <li><strong>start</strong>: Inicia o servidor <code>node app.js</code>.</li>
    <li><strong>test</strong>: Exibe um erro padrão de teste <code>echo "Error: no test specified" && exit 1</code>.</li>
  </ul>

  <h2>Autor</h2>
  <p>Nome do Autor: Amália Nascimento</p>

  <h2>Licença</h2>
  <p>Licenciado sob a licença ISC.</p>
</body>
</html>

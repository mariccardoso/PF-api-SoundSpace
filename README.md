<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/SENAI_S%C3%A3o_Paulo_logo.png/1200px-SENAI_S%C3%A3o_Paulo_logo.png" height="30px">
<h1>🎮 GameStream API 🎮 </h1>
</div>


## 🎲 Introdução
**Desafio Proposto:** A empresa "GameStream" está desenvolvendo uma plataforma de streaming de jogos que permite aos usuários transmitir suas partidas ao vivo, compartilhar vídeos de momentos de destaque e interagir com outros jogadores. Você foi contratado como desenvolvedor back-end para criar uma API que gerenciará o cadastro de jogos, canais e transmissões.


## ⚒ Tecnologias Utilizadas


<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js Badge" /> | <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma Badge" /> | <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js Badge" />  | <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite Badge" /> | <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" />

## ⚙ Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |

## ✅❌ Respostas

| Código | Descrição |
|---|---|
| `201` | Criado com sucesso (created).|
| `200` | Requisição executada com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `401` | Dados de acesso inválidos.|
| `404` | Registro pesquisado não encontrado (Not found).|


## 🔐 Autenticação
O projeto implementa autenticação JWT com endpoints para:
| Método HTTP | Endpoint         | Descrição                         |
|-------------|------------------|-----------------------------------|
| `POST`         | /auth/register      | Cria um novo usuário      |
| `POST`         | /auth/login      | Faz o login do usuário    |

## 🔁 API Endpoints

## 🎮 Jogos 
| Método HTTP | Endpoint         | Descrição                         |
|-------------|------------------|-----------------------------------|
| `GET`       | /games           | Retorna todos os Jogos            |
| `POST`      | /games           | Cria um novo jogo                 |

## 📡 Channels
| Método HTTP | Endpoint         | Descrição                         |
|-------------|------------------|-----------------------------------|
| `GET`       | /channels        | Retorna todos os canais           |
| `POST`      | /channels        | Cria um novo canal                |

## 🎥 Streams
| Método HTTP | Endpoint         | Descrição                         |
|-------------|------------------|-----------------------------------|
| `GET`       | /streams         | Retorna todas as transmissões     |
| `POST`      | /streams         | Cria uma nova transmissão         |


## 🎯 Listar
As ações de `listar` permitem o envio dos seguintes parâmetros:

| Parâmetro | Descrição |
|---|---|
| `filtro` | Filtra dados pelo valor informado. |
| `page` | Informa qual página deve ser retornada. |

## 🚀 Como Executar
1. Instale as dependências do projeto:

```bash
npm install
```

2. Crie o arquivo `.env` com a variável `DATABASE_URL` apontando para o banco de dados desejado.

```
JWT_SECRET_KEY=
PORT=
DATABASE_URL="file:./banco_relacionamento.db"
```

3. Execute as migrações:

```bash
npx prisma migrate dev
```

4. Inicie o servidor:

```bash
npm run dev
```

## 📂 Estrutura de Diretórios
```
pgsql
📁 src
├── 📁 controllers      → Lógica de negócio
├── 📁 models           → Definição das entidades
├── 📁 routes           → Definição das rotas da API
├── 📁 database         → Arquivos de configuração do Prisma
├── 📁 middlewares      → Autenticação e tratamento de erros
└── 📄 server.js        → Ponto de entrada da aplicação
```

## 🧠 Arquitetura e Boas Práticas
Neste projeto, seguimos algumas boas práticas de desenvolvimento:

### 🧱 Arquitetura MVC (Model - Controller)
- Models: Lógica de acesso e manipulação de dados.
- Controllers: Lógica de negócio e controle de fluxo.
- (Não utilizamos Views por ser uma API REST).

### 🗂 Estrutura de Pastas
- Organização modular e reutilizável.
- Separação clara entre responsabilidades.
- Facilidade de manutenção e escalabilidade.

### ⚙️ Armazenamento Temporário
- Simulação com arrays em memória.
- Uso de async/await para futura integração com banco real.
- Identificadores únicos gerenciados manualmente.

### 🛡 Tratamento de Erros
- try/catch aplicado em todas as rotas críticas.
- Retorno de mensagens de erro claras e padronizadas.

### 🧪 Validação de Dados
- Validações básicas implementadas nos Controllers.

## 🤝 Contribuições
Contribuições são super bem-vindas! Siga os passos:

1. Faça um fork do repositório.
2. Crie sua branch: git checkout -b feature/NovaFuncionalidade
3. Commit: git commit -m 'feat: adiciona nova funcionalidade'
4. Push: git push origin feature/NovaFuncionalidade
5. Crie um Pull Request 🚀

# Feito com ❤ por Mariana Dev



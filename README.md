![SoundSpace Logo](./assets/imgs/SoundSpace.png)

# SoundSpace API 🎧

##  Introdução

A *SoundSpace* nasce como uma plataforma musical inspirada nos grandes players globais, oferecendo uma experiência imersiva baseada em artistas, músicas e descobertas sonoras.

Sua missão como desenvolvedora back-end: **entregar uma API limpa, escalável e pronta para o futuro**, responsável por gerenciar cantores, músicas e seus relacionamentos — tudo no estilo de um mini-Spotify.

---

## ⚒ Tecnologias Utilizadas

Node.js Badge | Prisma Badge | Express.js Badge | SQLite Badge | JavaScript Badge

---

## ⚙ Métodos HTTP

A API segue o padrão REST:

| Método     | Descrição                      |
| ---------- | ------------------------------ |
| **GET**    | Consulta um ou mais registros. |
| **POST**   | Cria novos registros.          |
| **PUT**    | Atualiza registros existentes. |
| **DELETE** | Remove registros do sistema.   |

---

## ✅❌ Respostas

| Código  | Descrição                              |
| ------- | -------------------------------------- |
| **201** | Registro criado com sucesso.           |
| **200** | Operação executada com êxito.          |
| **400** | Erro de validação ou dados incorretos. |
| **401** | Falha na autenticação.                 |
| **404** | Registro não encontrado.               |

---

# 🔁 API Endpoints

Abaixo estão todos os endpoints disponíveis — simples, completos e prontos para escala.

---

## 🎤 Cantores (CRUD completo)

| Método     | Endpoint       | Descrição                   |
| ---------- | -------------- | --------------------------- |
| **GET**    | `/singers`     | Lista todos os cantores     |
| **GET**    | `/singers/:id` | Busca um cantor por ID      |
| **POST**   | `/singers`     | Cria um novo cantor         |
| **PUT**    | `/singers/:id` | Atualiza dados de um cantor |
| **DELETE** | `/singers/:id` | Remove um cantor            |

---

## 🎵 Músicas (CRUD completo)

| Método     | Endpoint      | Descrição                    |
| ---------- | ------------- | ---------------------------- |
| **GET**    | `/musics`     | Lista todas as músicas       |
| **GET**    | `/musics/:id` | Busca uma música por ID      |
| **POST**   | `/musics`     | Cria uma nova música         |
| **PUT**    | `/musics/:id` | Atualiza dados de uma música |
| **DELETE** | `/musics/:id` | Remove uma música            |

---

## 🎧 Relacionamentos úteis

| Método  | Endpoint              | Descrição                             |
| ------- | --------------------- | ------------------------------------- |
| **GET** | `/singers/:id/musics` | Lista músicas de um cantor específico |

---

## 🎯 Listagem com filtros

Alguns endpoints aceitam:

| Parâmetro  | Descrição                                                     |
| ---------- | ------------------------------------------------------------- |
| **filtro** | Busca texto em nome do cantor, gênero, título da música, etc. |
| **page**   | Paginação para grandes volumes de dados.                      |

---

# 🚀 Como Executar

### 1. Instalar dependências

```bash
npm install
```

### 2. Criar o arquivo `.env`

```env
JWT_SECRET_KEY=
PORT=
DATABASE_URL="file:./soundspace.db"
```

### 3. Rodar migrações

```bash
npx prisma migrate dev
```

### 4. Executar a seed (opcional)

```bash
npx prisma db seed
```

### 5. Iniciar o servidor

```bash
npm run dev
```

---

# 📂 Estrutura de Diretórios

```
📁 src
├── 📁 controllers      → Regras de negócio (Singers e Musics)
├── 📁 routes           → Rotas da API
├── 📁 database         → Prisma e configuração do banco
├── 📁 middlewares      → Autenticação e validação
└── 📄 server.js        → Entry point da aplicação
```

---

# 🧠 Arquitetura e Boas Práticas

### 🧱 Padrão MVC

* **Models:** estruturas do Prisma.
* **Controllers:** validações + regras de negócio.
* **Routes:** endpoints organizados e escaláveis.

### 🛡 Tratamento de erros

Implementado com mensagens claras e consistentes.

### ✅ Validação

Aplicada diretamente nos controllers antes de qualquer operação crítica.

### 🌱 Seed

Inclui cantores e músicas reais para simulação de um mini streaming.

---

# 🤝 Contribuições

Contribuições são super bem-vindas!

1. Faça o **fork**
2. Crie sua branch

   ```bash
   git checkout -b feature/NovaFuncionalidade
   ```
3. Commit

   ```bash
   git commit -m 'feat: adiciona nova funcionalidade'
   ```
4. Push

   ```bash
   git push origin feature/NovaFuncionalidade
   ```
5. Abra seu Pull Request 🚀

---

**Feito com 🎧💙 por Mariana Dev**
*Arquitetando experiências sonoras que realmente conectam.*

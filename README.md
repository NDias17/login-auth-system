# Login Auth System

Sistema fullstack de autenticação de usuários desenvolvido com foco em aprendizagem prática de integração entre frontend e backend.

---

## 📌 Visão Geral

Este projeto implementa um fluxo completo de autenticação, incluindo:

* Cadastro de usuários
* Login com geração de token JWT
* Comunicação entre frontend e backend via HTTP
* Persistência de dados em banco relacional

---

## 🧱 Tecnologias Utilizadas

### Backend

* Java
* Spring Boot
* Spring Security
* JWT (JSON Web Token)
* MySQL
* Maven

### Frontend

* HTML
* CSS
* JavaScript (Vanilla)

---

## 📁 Estrutura do Projeto

```
auth-system/
│
├── backend/
│   └── API Spring Boot
│
├── frontend/
│   └── Interface (login, cadastro, dashboard)
│
└── README.md
```

---

## ⚙️ Como Executar o Projeto

### 1. Clonar o repositório

```
git clone https://github.com/NDias17/login-auth-system
cd login-auth-system
```

---

### 2. Configurar o Backend

#### Criar banco de dados MySQL

```sql
CREATE DATABASE login_auth_api_db;
```

#### Configurar variáveis de ambiente

Criar arquivo `.env` dentro da pasta `backend/`:

```
MYSQL_DB_USER=seu_usuario
MYSQL_DB_PASSWORD=sua_senha
```

---

### 3. Executar o Backend

Dentro da pasta `backend/`:

```
./mvnw spring-boot:run
```

ou:

```
mvn spring-boot:run
```

A API estará disponível em:

```
http://localhost:8080
```

---

### 4. Executar o Frontend

Abra o arquivo:

```
frontend/index.html
```

diretamente no navegador.

---

## 🔐 Funcionalidades

* Registro de novos usuários
* Login com autenticação JWT
* Armazenamento de token no navegador
* Comunicação com API REST
* Redirecionamento após autenticação

---

## 📡 Endpoints da API

### Registro

```
POST /auth/register
```

Body:

```json
{
  "name": "Nome",
  "email": "email@email.com",
  "password": "123456"
}
```

---

### Login

```
POST /auth/login
```

Body:

```json
{
  "email": "email@email.com",
  "password": "123456"
}
```

---

## 🧠 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

* Compreender a integração entre frontend e backend
* Trabalhar com autenticação baseada em token
* Praticar consumo de APIs REST
* Consolidar fundamentos de desenvolvimento web

---

## 👨‍💻 Autor

Desenvolvido por Neil Dias (Front-End) e Marcílio Domingos (Back-End e DB  como parte do processo de aprendizagem em desenvolvimento web.

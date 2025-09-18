/*
Função do Express: O Express é o framework responsável por:
    Criar o servidor HTTP da API.
    Definir e gerenciar rotas (ex: /aluno, /auth).
    Processar requisições e respostas (JSON, parâmetros, etc).
    Integrar middlewares (autenticação, tratamento de erros, etc).
    Servir a documentação interativa do Swagger (/api-docs).
Resumindo: o Express é o núcleo que permite que sua API receba, processe e responda às requisições HTTP de forma organizada e escalável.

*/

import express from "express";
import swaggerUi from "swagger-ui-express";

import {swaggerSpec} from './config/swagger';
import alunoRouter from "./routes/alunoRoute";
import authRouter from "./routes/authRoute";

import sequelize from "./config/database";

// Testar conexão com o banco de dados
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
});

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/aluno", alunoRouter);
app.use("/auth", authRouter);

app.listen(3000, () => {
    console.log("API Server rodando");
});


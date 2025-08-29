import express from "express";
import swaggerUi from "swagger-ui-express";

import {swaggerSpec} from './config/swagger';
import alunoRouter from "./routes/alunoRoute";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/aluno", alunoRouter);

app.listen(3000, () => {
    console.log("API Server rodando");
});


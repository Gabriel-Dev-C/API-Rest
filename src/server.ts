import express from "express";
import alunoRouter from "./routes/alunoRoute";

const app = express();
app.use(express.json());

app.use("/aluno", alunoRouter);

app.listen(3000, () => {
    console.log("API Server rodando");
});


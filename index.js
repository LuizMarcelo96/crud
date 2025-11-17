import express from "express";
import cadastroRouters from "./src/routes/cadastro.routes.js";
import cadastroRouters from "./src/routes/cadastro.routes.js";

const app = express();

app.use(express.json());
app.use(cadastroRoutersRouters);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
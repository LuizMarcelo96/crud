import { Router } from "express";
import cadastroRepository from "../repositories/cadastro.repository.js";
import cadastroRepository from "../repositories/cadastro.repository.js";

const cadastroRouters = Router();

cadastroRouters.post("/cadastro", async (req, res) => {
    try {
        const novoCadastro = await cadastroRepository.createCadastroRepository(req.body);
        res.status(201).json(novoCadastro);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default cadastroRouters;
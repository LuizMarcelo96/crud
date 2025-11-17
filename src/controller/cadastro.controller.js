import { response } from "express";
import cadastroService from "../services/cadastro.services.js";

async function createCadastroController(request, response) {
    const novoCadastro = request.body;

    try {
        const cadastro = await cadastroService.createCadastroService(novoCadastro);
        response.status(201).send({cadastro});
    } catch(error) {
        response.status(400).send(error.message);
    }
}

async function findAllCadastroController(request, response) {
    try {
        const cadastro = await cadastroService.findAllcadastroService();
        response.status(200).send({cadastro});
    } catch(error) {
        response.status(404).send(error.message);
    }
}

async function findCadastroByIdController(request, response) {

    const {id} = request.params;

    try {
        const cadastro = await cadastroService.findCadastroByIdService(id);
        response.status(200).send({cadastro});
    } catch(error) {
        response.status(404).send(error.message);
    }
}

async function updateCadastroController(request, response) {
    
    const {id} = request.params;
    const novoCadastro = request.body;

    try {
        const cadastro = await cadastroService.updateCadastroService(id, novoCadastro);
        response.status(201).send({cadastro});
    } catch(error) {
        response.status(400).send(error.message);
    }

}

export default {
    createCadastroController,
    findAllCadastroController,
    findCadastroByIdController,
    updateCadastroController
}
import cadastroService from "../services/cadastro.services.js";

async function createCadastroController(req, res) {
    const novoCadastro = req.body;
    try {
        const cadastro = await cadastroService.createCadastroService(novoCadastro);
        res.status(201).send({ cadastro });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

async function findAllCadastroController(req, res) {
    try {
        const cadastros = await cadastroService.findAllCadastroService();
        res.status(200).send({ cadastros });
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
}

async function findCadastroByIdController(req, res) {
    const { id } = req.params;
    try {
        const cadastro = await cadastroService.findCadastroByIdService(id);
        res.status(200).send({ cadastro });
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
}

async function updateCadastroController(req, res) {
    const { id } = req.params;
    const novoCadastro = req.body;
    try {
        const cadastro = await cadastroService.updateCadastroService(id, novoCadastro);
        res.status(200).send({ cadastro });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

export default {
    createCadastroController,
    findAllCadastroController,
    findCadastroByIdController,
    updateCadastroController
};

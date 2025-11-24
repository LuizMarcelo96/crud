import cadastroRepository from "../repositories/cadastro.repository.js";

async function createCadastroService(novoCadastro) {
    const cadastro = await cadastroRepository.createCadastroRepository(novoCadastro);
    if (!cadastro) throw new Error("Erro ao criar novo cadastro!");
    return cadastro;
}

async function findAllCadastroService() {
    return await cadastroRepository.findAllCadastroRepository();
}

async function findCadastroByIdService(id) {
    const cadastro = await cadastroRepository.findCadastroByIdRepository(id);
    if (!cadastro) throw new Error("Cadastro não encontrado!");
    return cadastro;
}

async function updateCadastroService(id, novoCadastro) {
    const cadastroExistente = await cadastroRepository.findCadastroByIdRepository(id);
    if (!cadastroExistente) throw new Error("Cadastro não encontrado!");

    const cadastroAtualizado = await cadastroRepository.updateCadastroRepository(id, novoCadastro);
    if (!cadastroAtualizado) throw new Error("Erro ao atualizar cadastro!");

    return cadastroAtualizado;
}

export default {
    createCadastroService,
    findAllCadastroService,
    findCadastroByIdService,
    updateCadastroService
};

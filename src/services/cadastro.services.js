import CadastroRepository from "../repositories/cadastro.repository.js";
async function createCadastroService(novoCadastro) {
    const cadastro = await cadastroRepository.createCadastroRepository(novoCadastro);
}

export default { 
    createCadastroService 
};

async function findAllcadastroService() {
    const cadastro = await cadastroRepository.findAllCadastroRepository();
    return cadastro;
}
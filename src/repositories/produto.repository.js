import db from "../config/database.js";

db.run(`
    create table if not exists produto (
    id NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT,
    login NOT NULL UNIQUE,
    nome TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL UNIQUE,
    foto TEXT 
    )
    `)

function createProdutoRepository(novoProduto) {
    return new Promise((resolve, reject) => {
        const {
            nome,
            valor,
            tipo
        } = novoProduto;
        db.run(
            `INSERT INTO produto (nome,email,senha)
            VALUES (?, ?, ?)`,
            [nome, valor, tipo],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({novoProduto});
                }
            }
        );
    });
}
export default{createProdutoRepository}

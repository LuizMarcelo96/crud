import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS produto (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        valor REAL,
        tipo TEXT,
        foto TEXT
    )
`);

function createProdutoRepository(novoProduto) {
    return new Promise((resolve, reject) => {
        const { nome, valor, tipo, foto } = novoProduto;
        db.run(
            `INSERT INTO produto (nome, valor, tipo, foto) VALUES (?, ?, ?, ?)`,
            [nome, valor, tipo, foto],
            function (error) {
                if (error) {
                    reject(error);
                } else {
                    resolve({ id: this.lastID, ...novoProduto });
                }
            }
        );
    });
}

export default { createProdutoRepository }

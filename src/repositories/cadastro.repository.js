import db from "../config/database.js";

function createCadastroRepository(novoCadastro) {
    return new Promise((resolve, reject) => {
        const { login, email, senha, foto } = novoCadastro;

        const sql = `
            INSERT INTO cadastro (login, email, senha, foto)
            VALUES (?, ?, ?, ?)
        `;

        db.run(sql, [login, email, senha, foto], function (error) {
            if (error) reject(error);
            else resolve({ id: this.lastID, ...novoCadastro });
        });
    });
}

function findAllCadastroRepository() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM cadastro`, [], (error, rows) => {
            if (error) reject(error);
            else resolve(rows);
        });
    });
}

function findCadastroByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM cadastro WHERE id = ?`, [id], (error, row) => {
            if (error) reject(error);
            else resolve(row);
        });
    });
}

function updateCadastroRepository(id, cadastro) {
    return new Promise((resolve, reject) => {
        const { login, email, senha, foto } = cadastro;

        const sql = `
            UPDATE cadastro
            SET login = ?, email = ?, senha = ?, foto = ?
            WHERE id = ?
        `;

        db.run(sql, [login, email, senha, foto, id], function (error) {
            if (error) reject(error);
            else resolve({ id, ...cadastro });
        });
    });
}

export default {
    createCadastroRepository,
    findAllCadastroRepository,
    findCadastroByIdRepository,
    updateCadastroRepository
};

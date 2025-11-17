import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS cadastro (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        login TEXT NOT NULL,
        email REAL,
        senha TEXT,
        foto TEXT
    )
`);

function createCadastroRepository(novoCadastro) {
    return new Promise((resolve, reject) => {

        const {
            nome,      
            valor,
            tipo       
        } = novoCadastro;

        db.run(
            `INSERT INTO cadastro(id,login,email, senha, foto)
            VALUES(?,?,?,?)`,
            [nome,valor,tipo],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        id: this.lastID,
                        novoCadastro
                    });
                }
            }
        );

    });

}

function findAllCadastroRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM cadastro`,
            [],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

function findCadastroByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT 
                * 
            FROM cadastro
            WHERE id = ?`,
            [id],
            (error, row) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(row);
                }
            }
        );
    });
}

function updateCadastroRepository(id, cadastro) {
    return new Promise((resolve, reject) => {

        const {
            id,
            login,
            senha,
            email,
            foto
        } = cadastro;

        db.run(
            `UPDATE cadastro
            SET id = ?,      
                login = ?,
                senha = ?,
                email = ?,
                foto = ?
            WHERE id = ?`,
            [login, senha, email,foto, id],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        id,
                        ...cadastro
                    });
                }
            }
        )
    });
}

export default {
    createCadastroRepository,
    findAllCadastroRepository,
    findCadastroByIdRepository,
    updateCadastroRepository
}
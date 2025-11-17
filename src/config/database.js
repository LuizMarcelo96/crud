import sqlite3 from 'sqlite3';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, '..', '..', 'database.sqlite');

const db = new sqlite3.Database(dbPath, (error) => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados:', error.message);
    } else {
        console.log('Conectado ao banco de dados com sucesso.');
        
       db.run(
                `CREATE TABLE IF NOT EXISTS cadastro (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nome TEXT NOT NULL,
                    valor REAL,
                    email REAL,
                    senha TEXT,
                    foto TEXT
      )
        `);
    }
});

export default db;
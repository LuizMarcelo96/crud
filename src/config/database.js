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
        
        // Criar tabela se não existir
        db.run(`
            CREATE TABLE IF NOT EXISTS produto (
                id NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT,
                login NOT NULL UNIQUE,
                nome TEXT NOT NULL UNIQUE,
                email TEXT NOT NULL UNIQUE,
                senha TEXT NOT NULL UNIQUE,
                foto TEXT 
            )
        `);
    }
});

export default db;
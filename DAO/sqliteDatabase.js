const sqlite3 = require('sqlite3').verbose();
const DatabaseInterface = require('./databaseInterface');

class SqliteDatabase extends DatabaseInterface {
  constructor(databaseFile) {
    super();
    this.databaseFile = databaseFile;
    this.db = null;
  }

  connect() {
    this.db = new sqlite3.Database(this.databaseFile);
  }

  disconnect() {
    this.db.close();
  }

  create(collection, data) {
    // Implementar a lógica para criar um registro no banco de dados SQLite
  }

  read(collection, query) {
    // Implementar a lógica para ler registros do banco de dados SQLite
  }

  update(collection, query, data) {
    // Implementar a lógica para atualizar registros no banco de dados SQLite
  }

  delete(collection, query) {
    // Implementar a lógica para deletar registros do banco de dados SQLite
  }
}

module.exports = SqliteDatabase;

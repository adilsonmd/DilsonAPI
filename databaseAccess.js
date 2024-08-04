const SqliteDatabase = require('./DAO/sqliteDatabase');
const MongoDatabase = require('./DAO/mongoDatabase');

// Use SqliteDatabase ou MongoDatabase conforme necessário
const db = new SqliteDatabase('./mydatabase.db');
// const db = new MongoDatabase('mongodb://localhost:27017/mydatabase');

db.connect();

// Exemplo de uso genérico
(async () => {
  await db.create('users', { name: 'John Doe' });
  const users = await db.read('users', {});
  console.log(users);

  await db.update('users', { name: 'John Doe' }, { name: 'Jane Doe' });
  await db.delete('users', { name: 'Jane Doe' });

  db.disconnect();
})();

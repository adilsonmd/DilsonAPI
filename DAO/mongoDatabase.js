const mongoose = require('mongoose');
const DatabaseInterface = require('./databaseInterface');

class MongoDatabase extends DatabaseInterface {
  constructor(connectionString) {
    super();
    this.connectionString = connectionString;
  }

  async connect() {
    await mongoose.connect(this.connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  async disconnect() {
    await mongoose.disconnect();
  }

  async create(collection, data) {
    const Model = mongoose.model(collection, new mongoose.Schema({}, { strict: false }));
    const doc = new Model(data);
    await doc.save();
  }

  async read(collection, query) {
    const Model = mongoose.model(collection, new mongoose.Schema({}, { strict: false }));
    return await Model.find(query);
  }

  async update(collection, query, data) {
    const Model = mongoose.model(collection, new mongoose.Schema({}, { strict: false }));
    return await Model.updateMany(query, data);
  }

  async delete(collection, query) {
    const Model = mongoose.model(collection, new mongoose.Schema({}, { strict: false }));
    return await Model.deleteMany(query);
  }
}

module.exports = MongoDatabase;

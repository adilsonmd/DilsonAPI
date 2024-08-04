class DatabaseInterface {
    connect() {
      throw new Error('Method not implemented');
    }
  
    disconnect() {
      throw new Error('Method not implemented');
    }
  
    create(collection, data) {
      throw new Error('Method not implemented');
    }
  
    read(collection, query) {
      throw new Error('Method not implemented');
    }
  
    update(collection, query, data) {
      throw new Error('Method not implemented');
    }
  
    delete(collection, query) {
      throw new Error('Method not implemented');
    }
  }
  
  module.exports = DatabaseInterface;
  
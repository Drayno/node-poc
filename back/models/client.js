const db = require('../utils/database');

module.exports = class Client {
  constructor(id,code = null, name = null, address = null, phone = null, status) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.status = status;
  }

  save() {
    return db.execute(
      'INSERT INTO CLIENTES (CODIGO, NOME, ENDERECO, TELEFONE, STATUS) VALUES (?, ?, ?, ?, ?)',
      [this.code, this.name, this.address, this.phone, '1']
    );
  }

  fetchAll() {
   return db.execute('SELECT Id as id, CODIGO as code, NOME as name, ENDERECO as address, TELEFONE as phone, status  FROM CLIENTES');
 }

  edit() { 
    return db.execute(
      'UPDATE CLIENTES SET CODIGO = ?, NOME = ?, ENDERECO = ?, TELEFONE = ?, STATUS = ? WHERE id = ?',
      [this.code, this.name, this.address, this.phone, this.status, this.id]
      );
  }

  static findById(id) {
    return db.execute('SELECT * FROM CLIENTES WHERE CLIENTES.id = ?', [id]);
  }
};

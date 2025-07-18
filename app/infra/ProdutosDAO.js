function UsuariosDAO(connection){
    this._connection = connection;
}

UsuariosDAO.prototype.lista = function(callback){
    this._connection.query('select * from usuarios', callback);
}

UsuariosDAO.prototype.salva = function(produto, callback){
    this._connection.query('insert into usuarios set ?', produto, callback);
}

UsuariosDAO.prototype.apagar = function(id, callback){
    this._connection.query('delete from usuarios where id = ?', id, callback);
}

UsuariosDAO.prototype.buscar = function(id, callback){
    this._connection.query('select * from usuarios where id = ?', id, callback);
}

UsuariosDAO.prototype.salvaalt = function(produto, callback){
    this._connection.query('update usuarios set ? where id = ?', 
        [usuarios, usuarios.id], callback);
}

module.exports = function(){
    return UsuariosDAO;
}
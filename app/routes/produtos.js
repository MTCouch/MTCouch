module.exports = function(app){
    var listaProdutos = function(request, response){

        var connection =  app.infra.connectionFactory();
        var usuariosDAO = new app.infra.UsuariosDAO(connection);

        usuariosDAO.lista(function(err, results){
            response.render('produtos/lista.ejs',{lista:results});
        });
        connection.end();
    }

    app.get('/produtos', listaProdutos);

    app.get('/produtos/form', function(request, response){
        response.render('produtos/form.ejs', {errosValidacao: {}, produto: {}});
    });

    app.post('/produtos', function(request, response){
        var produto = request.body;

        request.assert('titulo', 'Título é obrigatório!').notEmpty();
        request.assert('senha', 'senha é obrigatória!').notEmpty();

        var erros = request.validationErrors();
        if(erros){
            response.render('produtos/form.ejs', {errosValidacao: erros, produto: produto});
            return;
        }

        var connection = app.infra.connectionFactory();
        var usuariosDAO = new app.infra.UsuariosDAO(connection);
        usuariosDAO.salva(produto, function(err, results){
            response.redirect('/produtos');
        });
    });

    app.get('/delete/:id', function(request, response){
        var id = request.params.id;

        var connection = app.infra.connectionFactory();
        var usuariosDAO = new app.infra.UsuariosDAO(connection);
        usuariosDAO.apagar(id, function(err, results){
            response.redirect('/produtos');
        });
    });

    app.get('/editar/:id', function(request, response){
        var id = request.params.id;

        var connection = app.infra.connectionFactory();
        var usuariosDAO = new app.infra.UsuariosDAO(connection);
        usuariosDAO.buscar(id, function(err, results){
            response.render('produtos/formalt.ejs', {errosValidacao: {}, produto: results});
        });
    });

    app.post('/alteracao', function(request, response){
        var produto = request.body;

        request.assert('titulo', 'Título é obrigatório!').notEmpty();
        request.assert('senha', 'Senha é obrigatória!').notEmpty();

        var erros = request.validationErrors();
        if(erros){
            response.render('produtos/formalt.ejs', {errosValidacao: erros, produto: produto});
            return;
        }

        var connection = app.infra.connectionFactory();
        var usuariosDAO = new app.infra.UsuariosDAO(connection);
        usuariosDAO.salvaalt(produto, function(err, results){
            response.redirect('/produtos');
        });
    });


    // LOGIN
    app.get('/produtos/login', function(request, response){
    response.render('produtos/login.ejs', {errosValidacao: {}, produto: {}});
    });

    // MENU
    app.get('/produtos/menu', function(request, response){
    response.render('produtos/menu.ejs', {errosValidacao: {}, produto: {}});
    });

    // LISTA BANCO USUARIOS
    app.get('/produtos/lista', function(request, response){
    response.render('produtos/lista.ejs', {errosValidacao: {}, produto: {}});
    });

}

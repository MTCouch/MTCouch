module.exports = function(app){
    app.get('/', function(request, response){
        response.render('home/cadastro.ejs');
    });
}
var app = require('./config/express.js')();
var rotasProdutos = require('./app/routes/produtos.js')(app);

app.listen(3000, function(){
    console.log('Servidor Rodando!');
    console.log('http://localhost:3000');
});
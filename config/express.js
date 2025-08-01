var express = require('express');
var app = express();
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

app.set('view engine', 'ejs');
app.set('views','./app/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

load('routes',{cwd: 'app'}).then('infra').into(app);

//servir arquivos estáticos
app.use('/static', express.static('./static'));

module.exports = function(){
    return app;
}
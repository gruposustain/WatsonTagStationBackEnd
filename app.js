var app = require('./config');

var rotaConsulta = require('./routes/rotaConsulta')(app);
var rotaInicial = require('./routes/rotaInicial')(app);

app.listen(3000, function(){
    console.log('servidor está rodando');
});

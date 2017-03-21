var config = require('express')(); //essa é outra forma de chamar a função do express

config.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin','*'); 
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST, PUT, DELETE'); 
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

module.exports = config;
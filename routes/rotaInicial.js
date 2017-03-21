module.exports = function(app){
    app.get('/', function(req, res){
        res.send('<html><body><h1>Página inicial</h1></body></html>')
    });
}
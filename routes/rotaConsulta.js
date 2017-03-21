module.exports = function(app){
    app.get('/consultaWatson', function(req, res){
        var watson = require('watson-developer-cloud');
        var fs = require('fs');

        var visual_recognition = watson.visual_recognition({
        api_key: '3ffaccfd128ddffb1933738f93021fdf543d7517',
        version: 'v3',
        version_date: '2016-05-20'
        });

        var params = {
        images_file: fs.createReadStream('./images/car.png')
        };

        visual_recognition.classify(params, function(err, result) {
        if (err)
            console.log(err);
        else
            //console.log(JSON.stringify(res, null, 2));
            res.send(result);
        });

        //res.send('<html><body><h1>Rota de Consulta ao serviço watson</h1></body></html>')
       //res.send('<html><body><h1>retorno do watson</h1><br /><p>' + a + '</p></body></html>');
    });

}
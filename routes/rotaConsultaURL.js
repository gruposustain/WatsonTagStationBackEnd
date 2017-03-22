module.exports = function(app){
    app.get('/consultaWatsonURL', function(req, res){
        var watson = require('watson-developer-cloud');

        var visual_recognition = watson.visual_recognition({
        api_key: '3ffaccfd128ddffb1933738f93021fdf543d7517',
        version: 'v3',
        version_date: '2016-05-20'
        });

        var url = req.param('url');

        var params = {
            url: url
        }

        visual_recognition.classify(params, function(err, result) {
        if (err)
            res.send(err);
        else
            res.send(result);
        });
    });
}
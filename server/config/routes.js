var example = require('../controllers/examples.js');
var path = require('path');

module.exports = function(app) {


    app.post('/api/example/create', function(req, res) {
        example.create(req, res);
        console.log('example.add route hit');
    });

   app.get('/api/example/read', function(req, res) {
        example.read(req, res);
        console.log('example.read route hit');
    });

   app.post('/api/example/update', function(req, res) {
        example.update(req, res);
        console.log('example.update route hit')
    })

   app.post('/api/example/destroy', function(req, res) {
        example.destroy(req, res);
        console.log('example.delete route hit');
    })



   app.all('*', function(req, res) {
        console.log('app.all hit - in routes.js')
        res.sendFile(path.resolve('./public/dist/index.html'));
    });
  
};
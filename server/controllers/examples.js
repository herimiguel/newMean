var mongoose = require('mongoose'); 
var Example = mongoose.model('Example');

module.exports = {
    create: function(req, res) {
        example = new Example({
            
            name : req.body.name,
            email : req.body.email
        

       });

       example.save(function(err) {
            
           if(err) {
                res.json(err);
            } else {
                res.json('success!');
            }
        });
    },

   read: function(req, res) {
        Example.find({}, function(err, example) {
            if (err) {
                console.log(err);
            } else {
                res.json(example);
            }
        });
    },

   destroy: function(req, res) {
        Example.findOne({ _id: req.params.id }).remove(function(err, cancelled) {
            if (err) {
                console.log(err);
            } else {
                res.json(cancelled);
            }
        });
    }
};
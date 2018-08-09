var mongoose = require('mongoose');
var ExampleSchema = new mongoose.Schema({
    
   name: {
        type: String,
        required: false,
        minLength: 2
    },

    email: {
        type: String,
        unique: true,
        required: false,
        minLength: 2
    },

//    complaint: {
//         type: String,
//         required: false,
//         minLength: 10
//     },

//    date: {
//         type: Date,
//         // min: Date('08-17-2017'),
//         required: false
//     },

//    time: {
//         type: String,
//         required: false
//     }
    
}, {timestamps: true });
mongoose.model('Example', ExampleSchema);
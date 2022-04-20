const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({

    feedbackID:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    yourfeedback:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Feedbacks',feedbackSchema);
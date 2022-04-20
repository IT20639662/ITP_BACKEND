const mongoose = require('mongoose');

const machinerySchema = new mongoose.Schema({

    contractID:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    employeeID:{
        type:String,
        required:true
    },
    employeeName:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Machineries',machinerySchema);
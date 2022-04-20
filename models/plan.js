const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({

    contractID:{
        type:String,
        required:true
    },
    employeeID:{
        type:String,
        required:true
    },
    description:{
        type:String,
        // required:true
    },
    
    category:{
        type:String,
        required:true
    },
    
    modifiedDate:{
        type:String,
        // required:true
    },
   
   


});

const Architecture = mongoose.model("Architecture",planSchema );

module.exports = Architecture;

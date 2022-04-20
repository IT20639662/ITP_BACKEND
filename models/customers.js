const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    customerID:{
        type:String,
        required:true
    },
    customerName:{
        type:String,
        required:true
    },
    customerEmail:{
        type:String,
        required:true
    },
    customerPhone:{
        type:String,
        required:true
    },
    customerUsername:{
        type:String,
        required:true
    },
    customerPassword:{
        type:String,
        required:true
    },
    customerConfirmPassword:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Customers',customerSchema);
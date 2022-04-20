const mongoose = require('mongoose');
const addcontractsSchema = new mongoose.Schema({
    contractID: {
        type: String,
        required: true
    },
    customerID: {
        type: String,
        required: true
    },
    contractCategory: {
        type: String,
        required: true
    },
    cusReqFormlinks: {
        type: String,
        required: true
    },
    suggestedBluePrintlinks: {
        type: String,
        required: true
    },
    estimatedCost:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('AddContracts',addcontractsSchema);
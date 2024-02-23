const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {type : String, required : true},
    holdings: { type : String, required : true },
});

module.exports = mongoose.model('companyData', companySchema);
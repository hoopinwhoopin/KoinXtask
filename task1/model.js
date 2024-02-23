const mongoose = require('mongoose');

const Task1Schema = new mongoose.Schema({
    coingeko_id: { type : String, required : true },
    name: { type : String, required : true },
});

module.exports = mongoose.model('Task1', Task1Schema);
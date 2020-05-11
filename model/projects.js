var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    photoname : String,
    descriptions : String,
    links : String
})

module.exports = mongoose.model('Project', projectSchema);
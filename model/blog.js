var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    title : String,
    image: String,
    author : String,
    tag : String,
    created : {type: Date, default: Date.now},
    discription: String
});

module.exports = mongoose.model("Blog", blogSchema);
const mongoose = require('mongoose');

let studentNews = new mongoose.Schema({
    title: String,
    body: String
});

module.exports = mongoose.model('studentNews', studentSchema);
const mongoose = require('mongoose');

let markSchema = new mongoose.Schema({
    studentid: String,
    subject: String,
    marks: []
});

module.exports = mongoose.model('marks', markSchema);
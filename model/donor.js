const mongoose = require('mongoose');

let donorSchema = new mongoose.Schema({
    id: String,
    name: String,
    age: Number,
    gender: String,
    address: String,
    city: String,
    pin: Number,
    phone: String,
    organisation: String,
    email: String,
    password: String,
    adoptionCount: Number
});

module.exports = mongoose.model('donor', donorSchema);
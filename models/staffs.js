const mongoose = require('mongoose')

const staff = new mongoose.Schema({
	name: {type: String, default:''},
	city: {type: String, default:''},
	designation: {type: String, default:''}




})

module.exports = mongoose.model('staff', staff)
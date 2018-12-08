const mongoose = require('mongoose')

const student = new mongoose.Schema({
	firstname: {type: String, default:''},
	lastname: {type: String, default:''},
	roll: {type: Number, default:'0'},
	age: {type: Number, default:'0'},
	dept: {type: String, default:''}




})

module.exports = mongoose.model('student', student)
const students = require('../models/students')

module.exports = {
	get: (params) => {
		return new Promise((resolve, reject)  => {
		students.find(params)
		.then(data => {
			resolve(data)	
		})
		
		.catch(err => {
			reject(err)
		})
		

		})
	}
}
const Staff = require('../models/staffs')

module.exports = {
	get: (params) => {
		return new Promise((resolve, reject)  => {
		Staff.find(params)
		.then(data => {
			resolve(data)	
		})
		
		.catch(err => {
			reject(err)
		})
		

		})
	}
}

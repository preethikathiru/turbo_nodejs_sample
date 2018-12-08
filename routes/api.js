// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const Controllers = require('../Controllers')

 const student = require('../models/students')
 const staff = require('../models/staffs')
//const students =[
//{firstname:"preethika", lastname:"thirunavukkarasu", roll:17, age:20, dept:"cs"},
//{firstname:"ramya", lastname:"kange", roll:76, age:19, dept:"it"},
//{firstname:"thiru", lastname:"thamizh", roll:4, age:21, dept:"mech"}
//]

//const staffs =[
//{name:"ksb", city:"chennai", designation:"tf"},
//{name:"kannan", city:"chennai", designation:"pro"},
//{name:"kamal", city:"mkm", designation:"tf"}
//]

router.get('/:resource', (req,res) => {
	const resource= req.params.resource
	const Controller = Controllers[resource]

	if (Controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource'
		})
		return
	}

	Controller.get()
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})


module.exports = router


//const db ={
//	student: students,
//	staff: staffs
//}

/* router.get('/student', (req,res) => {
	student.find(null)
	.then(data => {
		res.json({
			confirmation: 'Successs',
			data: data
		})
	})
	.catch(err => {
		res.json({

		confirmation: 'failure',
		message: err.message	
		})
		 
	})
})



router.get('/staff', (req,res) => {
	staff.find(null)
	.then(data => {
		res.json({

			confirmation: 'Successs',
			data: data
		})
	})
	.catch(err => {
		res.json(
		{
		confirmation: 'failure',
		message: err.message	
		})
		 
	})
}) */



//router.get('/:resource', (req,res) => {
//	const resource = req.params.resource
//	 const data = db[resource]
	 
//	 if (data == null){
//	 	res.json({
//		confirmation: 'failure',
//		message: 'Invalid request. resource undefined'
//	})
//	 	return
//	 }
//	 res.json({
//	 	confirmation: 'success',
//	 	data: data
//	 })


	//if (resource == 'student') {
	//	res.json({
	//		confirmation: 'success',
	//		data: students
	//	})
	//	return
	//}
	//if (resource == 'staff') {
	//	res.json({
	//		confirmation: 'success',
	//		data: staffs
	//	})
	//	return
	//}




//	res.json({
//		confirmation: 'success',
//	 	data: students
//	})
//})


//router.get('/staff',  (req, res) => {
//	res.json({
//		confirmation: 'success',
//	 	data: staffs
//	})
//})


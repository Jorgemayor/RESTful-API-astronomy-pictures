const pictureServices = require("../services/pictures")

const createPicture = async (req, res) => {
	const { body } = req

	if (!body.explanation || !body.hdurl || !body.title || !body.url) {
		res.status(400).json({
			status: "400 Bad request",
			message: "At least one of the parameters was not provided or is empty.",
		})
		return
	}

	try {
		const result = await pictureServices.createPicture(body)
		res.status(201).json({
			status: "201 Created",
			createdPicture: {
				id: result._id,
				title: result.title,
				explanation: result.explanation,
				url: result.url,
				hdurl: result.hdurl,
			},
		})
	} catch (error) {
		res.status(error?.status || 500).json({
			status: error?.status || 500,
			error: error,
		})
	}
}

const getPicture = async (req, res) => {
	const pictureId = req.params.pictureId

	if (!pictureId) {
		res.status(400).json({
			status: "400 Bad request",
			message: "The picture ID wad not provided.",
		})
		return
	}

	try {
		const result = await pictureServices.getPicture(pictureId)
		if (!result) {
			res.status(404).json({
				status: 404,
				error: "No valid entry found for provided ID",
			})
			return
		}

		res.status(200).json({
			id: result._id,
			title: result.title,
			explanation: result.explanation,
			url: result.url,
			hdurl: result.hdurl,
		})
	} catch (error) {
		res.status(error?.status || 500).json({
			status: error?.status || 500,
			error: error,
		})
	}
}

const getAllPictures = async (req, res, next) => {
	let {limit, page, ...filters } = req.query
	limit = parseInt(limit, 10) || 10
	page = parseInt(page, 10) || 1
	filters.title = {$regex: new RegExp(filters.title, 'i')}
	filters.explanation = {$regex: new RegExp(filters.explanation, 'i')}
	
	try {
		const result = await pictureServices.getAllPictures(filters, {limit, page})
		res.status(200).json(result)
	} catch (error) {
		res.status(error?.status || 500).json({
			status: error?.status || 500,
			error: error,
		})
	}
}

const updatePicture = (req, res, next) => {
	res.status(200).json({
		message: "Picture updated",
		id: req.params.pictureId,
	})
}

const deletePicture = (req, res, next) => {
	res.status(200).json({
		message: "Picture deleted",
		id: req.params.pictureId,
	})
}

module.exports = {
	createPicture,
	getPicture,
	getAllPictures,
	updatePicture,
	deletePicture,
}

const pictureServices = require("../services/pictures")

const createPicture = async (req, res, next) => {
	const { body } = req
	
	if(!body.explanation || !body.hdurl || !body.title || !body.url) {
		res.status(400).json({
			status: "400 Bad request",
			message: "At least one of the parameters was not provided or is empty."
		})
		return
	}
	
	try {
		const response = await pictureServices.createPicture(body)
		res.status(201).json({
			status: "201 Created"
		})
	} catch (error) {
		res.status(error?.status || 500).json({
			status: error?.status || 500,
			error: error?.message || "Internal server error"
		})
	}
}

const getPicture = (req, res, next) => {
	const id = req.params.pictureId
	res.status(200).json({
		message: "Handling GET request to /pictures",
		id: id,
	})
}

const getAllPictures = (req, res, next) => {
	res.status(200).json({
		message: "Handling GET request to /pictures",
	})
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

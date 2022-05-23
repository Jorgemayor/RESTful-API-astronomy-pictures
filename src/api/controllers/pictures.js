const mongoose = require("mongoose")
const Picture = require("../models/Picture")

const createPicture = (req, res, next) => {
	const picture = new Picture({
		explanation: req.body.explanation,
		hdurl: req.body.hdurl,
		title: req.body.title,
		url: req.body.url,
	})
	res.status(201).json({
		message: "Handling POST request to /pictures",
	})
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

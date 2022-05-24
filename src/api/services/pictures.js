const Picture = require("../models/Picture")

const createPicture = async body => {
	return await new Picture(body).save().catch(error => {
		throw error
	})
}

const getPicture = async pictureId => {
	return await Picture.findById(pictureId).catch(error => {
		throw error
	})
}

const getAllPictures = async (filters, params) => {
	return await Picture.paginate(filters, params)
		.catch(error => {
			throw error
		})
}

const updatePicture = (pictureId, body) => {
	try {
		console.log("Pictured updated: ", pictureId)
	} catch (error) {
		throw error
	}
}

const deletePicture = pictureId => {
	try {
		console.log("Pictured deleted: ", pictureId)
	} catch (error) {
		throw error
	}
}

module.exports = {
	createPicture,
	getPicture,
	getAllPictures,
	updatePicture,
	deletePicture,
}

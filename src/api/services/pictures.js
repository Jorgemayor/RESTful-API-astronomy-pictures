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
	return await Picture.paginate(filters, params).catch(error => {
		throw error
	})
}

const updatePicture = async (pictureId, body) => {
	return await Picture.findByIdAndUpdate(pictureId, body, {}).catch(error => {
		throw error
	})
}

const deletePicture = async pictureId => {
	return await Picture.findByIdAndRemove(pictureId).catch(error => {
		throw error
	})
}

module.exports = {
	createPicture,
	getPicture,
	getAllPictures,
	updatePicture,
	deletePicture,
}

const Picture = require("../database/database")

const createPicture = async body => {
	return await Picture.createPicture(body)
}

const getPicture = async pictureId => {
	return await Picture.getPicture(pictureId)
}

const getAllPictures = async (filters, params) => {
	return await Picture.getAllPictures(filters, params)
}

const updatePicture = async (pictureId, body) => {
	return await Picture.updatePicture(pictureId, body)
}

const deletePicture = async pictureId => {
	return await Picture.deletePicture(pictureId)
}

module.exports = {
	createPicture,
	getPicture,
	getAllPictures,
	updatePicture,
	deletePicture,
}

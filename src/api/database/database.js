const mongoose = require("mongoose")
const Picture = require("../models/Picture")
const nasaAPI = require("../services/nasaApi")

try {
	mongoose.connect(process.env.MONGO_ATLAS_URI).then(() => {
		console.log("Connected to database")
	})
} catch (error) {
	console.log("Could not connect to the database\n", error)
}

let db = mongoose.connection

db.on("error", console.error.bind(console, "connection error: "))

db.once("open", async () => {
	if ((await Picture.countDocuments().exec()) > 0) {
		console.log("Database already populated")
		return
	}

	console.log("Populating database...")
	const nasaPictures = await nasaAPI.getNasaPictures()

	await Picture.insertMany(nasaPictures, error => {
		if (error) {
			return console.error(error)
		} else {
			console.log("Initial pictures added")
		}
	})
})

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

const deleteAllPictures = async () => {
	return Picture.deleteMany({})
}

module.exports = {
	createPicture,
	getPicture,
	getAllPictures,
	updatePicture,
	deletePicture,
}

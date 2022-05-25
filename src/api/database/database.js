const mongoose = require("mongoose")
const Picture = require("../models/Picture")
const nasaAPI = require("../services/nasaApi")

// Connect to MONGODB ATLAS database
try {
	mongoose.connect(process.env.MONGO_ATLAS_URI).then(() => {
		console.log("Connected to database")
	})
} catch (error) {
	console.log("Could not connect to the database\n", error)
}

let db = mongoose.connection

// Handling errors during queries
db.on("error", console.error.bind(console, "connection error: "))

// Populate database one if there was no data
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

/* createPicture
	
	Creates a picture on the database given its title,
	explanation, url and hdurl.
 */
const createPicture = async body => {
	return await new Picture(body).save().catch(error => {
		throw error
	})
}

/* getPicture

	Returns a picture from the database given its id
 */
const getPicture = async pictureId => {
	return await Picture.findById(pictureId).catch(error => {
		throw error
	})
}

/* getAllPictures
	
	Returns all the pictures from the database that fulfills
	the filters and pagination
 */
const getAllPictures = async (filters, params) => {
	return await Picture.paginate(filters, params).catch(error => {
		throw error
	})
}

/* updatePicture

	Updates a picture from the database given its id
 */
const updatePicture = async (pictureId, body) => {
	return await Picture.findByIdAndUpdate(pictureId, body).catch(error => {
		throw error
	})
}

/* deletePicture

	Deletes a picture from the database given its id
 */
const deletePicture = async pictureId => {
	return await Picture.findByIdAndRemove(pictureId).catch(error => {
		throw error
	})
}

/* deleteAllPictures

	Deletes all the picture from the database
	(Developer purpose only)
 */
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

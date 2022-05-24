const mongoose = require("mongoose")
const pagination = require("mongoose-paginate-v2")

const pictureSchema = new mongoose.Schema({
	explanation: {
		type: String,
		required: true,
	},
	hdurl: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
})

pictureSchema.plugin(pagination)

module.exports = mongoose.model("Picture", pictureSchema)

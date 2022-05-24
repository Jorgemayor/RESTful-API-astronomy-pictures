const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const pictureRoutes = require("./routes/pictures")

mongoose.connect(process.env.MONGO_ATLAS_URI, error => {
	if (error) {
		console.log("Error in database\n", error)
	}
})

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	)
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
		return res.status(200).json({})
	}
	next()
})

// Routes to handle requests
app.use("/pictures", pictureRoutes)

// Handling errors
app.use((req, res, next) => {
	const error = new Error("Route not found")
	error.status = 404
	next(error)
})

app.use((error, req, res) => {
	res.status(error.status || 500)
	res.json({
		error: {
			status: error.status,
			message: error.message,
		},
	})
})

module.exports = app

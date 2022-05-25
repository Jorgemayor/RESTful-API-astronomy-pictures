const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')

const pictureRoutes = require("./routes/pictures")

const app = express()

app.use(cors())

app.use(bodyParser.json())

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

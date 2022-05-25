const http = require("http")
const app = require("./app")

// Port to deploy server
const port = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})

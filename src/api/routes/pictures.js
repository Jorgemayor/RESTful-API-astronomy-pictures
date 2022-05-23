const express = require("express")
const router = express.Router()

const pictureController = require("../controllers/pictures")

router.post("/", pictureController.createPicture)

router.get("/:pictureId", pictureController.getPicture)

router.get("/", pictureController.getAllPictures)

router.patch("/:pictureId", pictureController.updatePicture)

router.delete("/:orderId", pictureController.deletePicture)

module.exports = router

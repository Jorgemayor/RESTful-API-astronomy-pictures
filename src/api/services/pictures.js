const mongoose = require("mongoose")
const Picture = require("../models/Picture")

const createPicture = async (body) => {
	
	const picture = new Picture({
		explanation: body.explanation,
		hdurl: body.hdurl,
		title: body.title,
		url: body.url,
	})
	
	try{
		await picture.save()
	} catch (error) {
		throw error
	}
}

const getPicture = (pictureId) => {
	try{
		console.log("Pictured fetched")
	} catch (error) {
		throw error
	}
}

const getAllPictures = () => {
	try{
		console.log("Pictured fetched")
	} catch (error) {
		throw error
	}
}

const updatePicture = (pictureId, body) => {
	try{
		console.log("Pictured updated: ", pictureId)
	} catch (error) {
		throw error
	}
}

const deletePicture = (pictureId) => {
	try{
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

const express = require("express")
const Router = express.Router()
const verifyToken = require("../middleware/index")
const { getAll ,deleteAlbum,getOne,addAlbum}=require("../controller/album")


Router.get("/getAlbum",getAll)
Router.delete("/deleteAlbum/:id",deleteAlbum)
Router.get("/getOne/:title",getOne)
Router.post("/add",verifyToken,addAlbum)



module.exports = Router
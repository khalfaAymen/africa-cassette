const express = require("express")
const Router = express.Router()

const { getAll, login,register,destroy}=require("../controller/user")


Router.get("/getUser",getAll)
Router.delete("/deleteUser/:id",destroy)
Router.post("/login",login)
Router.post("/add",register)



module.exports = Router
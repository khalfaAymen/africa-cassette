const express = require('express')
require("dotenv").config()
const cors = require("cors")
const db = require("./models")
const app = express()

const albumRouter = require("./router/albums")
const userRouter = require("./router/user")
app.use(cors()) 
app.use(express.json())
const PORT = process.env.PORT
console.log(PORT)


app.use("/api/albums",albumRouter)
app.use('/api/user',userRouter)

app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`)
})
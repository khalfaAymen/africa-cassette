const express = require('express')
const cors = require("cors")
const db = require("./models")
const app = express()
const port = 3000


app.use(cors())
app.use(express.json())


app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})
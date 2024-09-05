const jwt = require("jsonwebtoken")

async function verifyToken(req, res,next) {
  const authToken = req.headers["authorization"].split(" ")[1]

  if (!authToken) {
    res.status(403).send("Unauthed")
  } 

  const verify = jwt.verify(authToken ,process.env.JWTSECRET)
  req.user=verify
  next()
  console.log(verify)

}


module.exports = verifyToken
const db = require("../models/index")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


module.exports = {
    getAll:(req,res)=>{
        db.User.findAll({include:[db.Todo]})
        .then((user)=>{
            res.send(user)
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    register:(req,res)=>{
        db.User.count({where:{email:req.body.email}})
        .then((user)=>{
            if(user!=0){
                res.status(500).send("email Already used")
            }else{
                bcrypt.hash(req.body.password,10)
                .then((hashedPassword)=>{
                    db.User.create({
                        username:req.body.username,
                        email:req.body.email,
                        password:hashedPassword
                    })
                    .then((user)=>{
                        res.status(201).send(user)
                    })
                    .catch((error)=>{
                        res.status(500).send(error)
                    })
                })
                .catch((error)=>{
                    res.status(500).send(error)
                })
            }
        })

  
    },

    destroy:(req,res)=>{
        db.User.destroy({where:{id:req.params.id}})
        .then(()=>{
            res.send("deleted")
        })
        .catch((error)=>{
            console.log(error)
        })
    },



    update:(req,res)=>{
        const id = req.params.id
        const body = req.body
        db.User.update( body,{where:{id:id}})
        .then((user)=>{
            res.send(user)
        })
        .catch((error)=>{
            console.log(error)
        })
    },

    login:(req,res)=>{


        
        db.User.findOne({where:{username: req.body.username}})
        .then((user)=>{
            if(!user){
                res.status(400).send("Failed! user not registered")
            }else {

                bcrypt.compare(req.body.password,user.password)
                .then((same)=>{
                    if(same){
                        var token = jwt.sign({id:user.id}, process.env.JWTSECRET,{
                            expiresIn: "1h",
                        })
                        res.status(201).send(token)
                        
                    }
                    else {
                        res.status(401).send("invalid password")
                    }
                })
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }

}
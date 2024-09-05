const db = require("../models/index")
const { Op } = require('sequelize');
module.exports = {

    getAll:(req,res)=>{
        db.Album.findAll({include:[db.Track]})
        .then((data)=>{
            if(!data.length){
                res.status(404).send({msg:"there is no data"})
            }
            res.send(data)
        })

        .catch((error)=>{
            console.log(error)
        })
    },

    addAlbum:(req,res)=>{
        const id = req.user.id
        const body = req.body
        db.Album.create({...body,userId:id})

        .then((data)=>{
            if(!body){
                res.status(404).send({msg:"body require albumName && albumDate"})
            }
            res.send(data)
        })

        .catch((error)=>{
            console.log(error)
        })
    },

    deleteAlbum:(req,res)=>{
        const id = req.params.id
        db.Album.destroy({where:{id:id}})
        .then((data)=>{
            res.send('deleted')
        })

        .catch((error)=>{
            console.log(error)
        })
    },

    getOne: (req,res)=>{
        const title = req.params.title
        db.Album.findAll({ 
            where: { title:{
                [Op.startsWith]:title
            }
        },
        include: [{
            model: db.Track, 
            as: 'tracks'    
          }]
    })
        .then((data)=>{
            res.send(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },

}
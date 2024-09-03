const db = require("../models/index")


module.exports = {

    getAll:(req,res)=>{
        db.Album.findAll()
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
        const {albumName,albumDate} = req.body
        db.Album.create(body)
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
        db.Album.create({where:{id:id}})
        .then((data)=>{
            if(!data){
                res.status(404).send({msg:"there is no data"})
            }
            res.send('deleted')
        })

        .catch((error)=>{
            console.log(error)
        })
    },
    updateAlbum:(req,res)=>{
        const id = req.params.id
        const body = req.body
        db.Album.create(body)
        .then((data)=>{
            if(!data){
                res.status(404).send({msg:"there is no data"})
            }
            res.send(data)
        })

        .catch((error)=>{
            console.log(error)
        })
    },


}
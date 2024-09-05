const axios =require ("axios")
const db = require ("../models/index")
const fetch=async (name)=>{try {
   const {data}= await axios.get(`https://api.deezer.com/album/60711332`)
//    console.log(data)
    const albums =await db.Album.create({...data,genres:data.genres.data[0].name})
    const arr = data.tracks.data.map((element)=>{
        return {...element,albumId:albums.id,artist:element.artist.name}
    })
    const songs = await db.Track.bulkCreate(arr)
    // console.log(albums,"albuuuuuuuuuums")
    console.log("albums are added to db")
} catch (error) {
        throw error
}
 
}

fetch()
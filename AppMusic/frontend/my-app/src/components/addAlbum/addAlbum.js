import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import "./addAlbum.css"
import axios from 'axios';


function AddAlbum({fetch}) {
const [title,setTitle] = useState("")
const [link,setLink] = useState("")
const [cover,setCover] = useState("")
const [genres,setGenres] = useState("")
const [nb_tracks,setNb_tracks] = useState()
const [fans,setFans] = useState()
const [release_date,setRelease_date] = useState(new Date)
const [tracklist,setTracklist] = useState("")



    const navigate = useNavigate()
    const url = "http://localhost:3000/api/albums/add"
    const body = {title,
                  link,
                  cover,
                  genres,
                  nb_tracks,
                  fans,
                  release_date,
                  tracklist
    }




   const hundlePost=()=>{
        axios.post(url,body)
        .then((user)=>{
            console.log(user)
            fetch()
        })
        .catch((error)=>{
            console.log(error)
        })
    }



  return (
    
   <div className="blog-list-item">
    <h1 className="New-Post-Title">Add Your Album</h1>
    <form className="New-Post-Form">
      

      <input
        id="content"
        className="post "
        placeholder="title..."
        required
        minLength="3"
        defaultValue={title}
        onChange={(e)=>{setTitle(e.target.value)
        }}
      />

<textarea
        id="title"
        type="text"
        className="search"
        placeholder="Link"
        required
        minLength="3"
        defaultValue={link}
        onChange={(e)=>{setLink(e.target.value)
        }}
      />

<textarea
        id="title"
        type="text"
        className="search"
        placeholder="Cover"
        required
        minLength="3"
        defaultValue={cover}
        onChange={(e)=>{setCover(e.target.value)
        }}
      />
      <textarea
        id="title"
        type="text"
        className="search"
        placeholder="Genres"
        required
        minLength="3"
        defaultValue={genres}
        onChange={(e)=>{setGenres(e.target.value)
        }}
      />
      <textarea
        id="title"
        type="text"
        className="search"
        placeholder="nb_tracks"
        required
        minLength="3"
        defaultValue={nb_tracks}
        onChange={(e)=>{setNb_tracks(e.target.value)
        }}
      />
      <textarea
        id="title"
        type="text"
        className="search"
        placeholder="fans"
        required
        minLength="3"
        defaultValue={fans}
        onChange={(e)=>{setFans(e.target.value)
        }}
      />
      <textarea
        id="title"
        type="text"
        className="search"
        placeholder="description"
        required
        minLength="3"
        defaultValue={release_date}
        onChange={(e)=>{setRelease_date(e.target.value)
        }}
      />
      <textarea
        id="title"
        type="text"
        className="search"
        placeholder="tracklist"
        required
        minLength="3"
        defaultValue={tracklist}
        onChange={(e)=>{setTracklist(e.target.value)
        }}
      />
    





      <input
        className="btn btn-secondary searchButton"
        type="button"
        value="Publish"
        onClick={()=>{
            hundlePost()
            navigate("/")

          
        }}
      />
    </form>

  </div>


  )
}

export default AddAlbum
















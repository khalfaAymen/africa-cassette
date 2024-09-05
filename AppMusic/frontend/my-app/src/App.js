import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumDetail from "./components/album/albumDetail";
import axios from 'axios'
import { useEffect, useState } from "react";
import AllAlbums from "./components/album/allAlbums";
import Tracks from "./components/tracks/tracks";
import Register from "./components/register/register";
import Login from "./components/register/login";
import AddAlbum from "./components/addAlbum/addAlbum";
import NavbarDefault from "./components/navBar/navBar";


function App() {

const [data,setData] = useState([])
const [tracks,setTracks]= useState(null)
const [playedTrack,setPlayedTrack] = useState([])
const [filtred,setFiltred] = useState([])
const [searchTrack,setSerchTrack] = useState([])
const url = "http://localhost:3000/api/albums/getAlbum"

const [token,setToken]= useState(localStorage.getItem("token"))
const fetch = ()=>{
  axios.get(url)
  .then((res)=>{
    setData(res.data)
    setPlayedTrack(res.data[0])
  })
  .catch((error)=>{
    console.log(error)
  })
}



useEffect(()=>{
  fetch()
  setToken(localStorage.getItem("token"))
},[])
const getCurrentTrack = (tr)=>{
setPlayedTrack(tr)
}

const hundleSearch = (query)=>{
  axios.get(`http://localhost:3000/api/albums/getOne/${query}`)
  .then((res)=>{
    setFiltred(res.data)
  })
  .catch((error)=>{
    console.log(error)
  })
}


const hundleTracks = (query)=>{
  axios.get(`https://api.deezer.com/search?q=${query}`)
  .then((res)=>{
    setSerchTrack(res.data)
  })
  .catch((error)=>{
    console.log(error)
  })
}

// console.log("searchtrack",searchTrack)

// console.log(data)

  return (
    <BrowserRouter>

      <NavbarDefault token= {token}/>
      <Routes>
        <Route path="/tracks" element = {<Tracks element={playedTrack} hundleTracks= {hundleTracks} searchTrack = {searchTrack} /> }/>
        <Route path="/albums" element={<AllAlbums data = {data} getCurrentTrack = {getCurrentTrack} hundleSearch= {hundleSearch} filtred={filtred}/>}/>
        <Route path="/register" element = {<Register/> }/>
        <Route path="/login" element = {<Login/> }/>
        <Route path="/addAlbum" element = {<AddAlbum fetch= {fetch}/> }/>
        
        

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// http://localhost:3000/api/albums/getAlbum
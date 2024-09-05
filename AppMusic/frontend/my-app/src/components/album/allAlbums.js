import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"




function AllAlbums({ getCurrentTrack, data, hundleSearch, filtred }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearch(query);
    hundleSearch(query);
  };

const hundleDelete = (id)=>{
  axios.delete(`http://localhost:3000/api/albums/deleteAlbum/${id}`)
  .then((res)=>{
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })
}


// console.log(filtred)
  const albumsToDisplay = search ? filtred : data;

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">Africa Cassette</h1>
        <div className='search'>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type='text'
              placeholder='Search'
              value={search}
              onChange={handleInputChange}
              className="p-2 rounded"
            />
          </form>
        </div>
        <br />
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {albumsToDisplay && albumsToDisplay.length > 0 ? (
            albumsToDisplay.map((element) => (
              
              <div key={element.id} onClick={() => getCurrentTrack(element)} className="bg-gray-900 shadow-lg rounded p-3">
                {/* {console.log(element)} */}
                <div className="group relative">
                  <img className="w-full md:w-72 block mx-auto rounded" src={element.cover} alt="Album Cover" />
                  <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                    <button
                      className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                      onClick={() => navigate("/tracks")}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white text-lg">Album Title: {element.title}</h3>
                  <p className="text-gray-400">Genre: {element.genres}</p>
                  <p className="text-gray-400">Fans: {element.fans}</p>
                  <p className="text-gray-400">Tracks: {element.nb_tracks}</p>
                  <button onClick={()=>{
                      hundleDelete(element.id)
                  }} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete Album</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No albums found</p>
          )}
        </section>
      </div>
    </main>
  );
}

export default AllAlbums;

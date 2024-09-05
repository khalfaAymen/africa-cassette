import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './tracks.css';

function Tracks({element, hundleTracks,searchTrack}) {

const navigate = useNavigate()

    const [track,setTrack]=useState({})
    const [search,setSearch]= useState("")
  

    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearch(query);
        hundleTracks(query);
      };

    // console.log(search);
    const albumsToDisplay = search ? searchTrack : element;

    return (
        <div className='trackCard'>
        <div className='search'>
            <button onClick={()=>{
                navigate("/albums")
            }} className='btn'>Back to album</button>
            <form onSubmit={(e) => e.preventDefault()} >
            <input
            type='text'
            placeholder='search'
            value={search}
            onChange={handleInputChange}
            />
            </form>
            </div>
    { (albumsToDisplay.tracks)&&  albumsToDisplay.tracks.length&&  <div className="musicCard grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 p-6 bg-gray-900">
            {albumsToDisplay.tracks.map((track) => {
                return (
                    <div onClick={()=>setTrack(track)} className="card bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700" key={track.title}>
                        <h3 className="text-xl font-semibold text-white mb-2">Track Title: {track.title}</h3>
                        <p className="text-gray-400 mb-1">{track.artist}</p>
                        <p className="text-gray-500">{track.rank}</p>
                    </div>
                );
            })}
        </div>}
            <AudioPlayer
                src={track.preview}
                showJumpControls={false}
                customAdditionalControls={[]}
                autoPlayAfterSrcChange={true}
                className="custom-audio-player mt-4 mt-4"
            />
            </div>
    );
}

export default Tracks;

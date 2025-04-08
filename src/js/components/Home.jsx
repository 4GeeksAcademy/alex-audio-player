import {React, useEffect, useState} from "react";
import Song from './Song.jsx'
import AudioPlayer from "./AudioPlayer.jsx";

const Home = () => {
	const [songs, setSongs] = useState([]);
	const [currentSong, setCurrentSong] = useState('')
	const baseUrl = 'https://playground.4geeks.com'

	const songsUrl = 'https://playground.4geeks.com/sound/songs'

	const getSongs = async (url) => {
		const response = await fetch(url)
		const data = await response.json()
		setSongs([...data.songs])
	}	
	
	const getUrl = (e) => {
        setCurrentSong(e.currentTarget.dataset.url)
		console.log(currentSong)
      }

	useEffect(()=> {
		getSongs(songsUrl)
	},[])

	return (
		<div>
			<Song songs={songs} getUrl={getUrl}/>
			<AudioPlayer songs={songs} currentSong={currentSong} baseUrl={baseUrl}/>
		</div>
	);

};

export default Home;
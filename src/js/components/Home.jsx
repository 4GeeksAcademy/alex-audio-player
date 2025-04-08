import {React, useEffect, useState, useRef} from "react";
import Song from './Song.jsx'
import AudioButtons from "./AudioButtons.jsx";

const Home = () => {
	const [songs, setSongs] = useState([]);
	const [currentSong, setCurrentSong] = useState('')
	const [isPlaying, setIsPlaying] = useState(false)
	const audioRef = useRef(null)
	let songCurrentTime= useRef(0)
	const baseUrl = 'https://playground.4geeks.com'
	

	const songsUrl = 'https://playground.4geeks.com/sound/songs'

	const getSongs = async (url) => {
		const response = await fetch(url)
		const data = await response.json()
		setSongs([...data.songs])
	}	
	
	const getUrl = (e) => {
		setIsPlaying(true)
        setCurrentSong(e.currentTarget.dataset.url)
		if (currentSong !== e.currentTarget.dataset.url) songCurrentTime.current = 0;
      }

	  const playMusic = () => {
        if (!isPlaying) {
          audioRef.current.load()
		  audioRef.current.currentTime = songCurrentTime.current
          audioRef.current.play()
          setIsPlaying(true)
      } else {
          audioRef.current.pause()
		  songCurrentTime.current = audioRef.current.currentTime 
		  console.log(audioRef.current.currentTime)
          setIsPlaying(false)  
      }
    }

	const prevButton = () => {
		setIsPlaying(true)
	
		let currentIndex = songs.findIndex((item)=> item.url === currentSong)
		if (currentIndex === 0) {
			setCurrentSong(songs.at(-1).url)
			songCurrentTime.current = 0
			return
	} 
		
		setCurrentSong(songs[currentIndex - 1].url)
		songCurrentTime.current = 0
	}
	const nextButton = () => {
		setIsPlaying(true)
		let currentIndex = songs.findIndex((item)=> item.url === currentSong)
		if (currentIndex === songs.length -1) {
			setCurrentSong(songs[0].url)
			songCurrentTime.current = 0
			return
		} 
		
		setCurrentSong(songs[currentIndex + 1].url)
		songCurrentTime.current = 0
	}
	useEffect(()=> {
		getSongs(songsUrl)
	},[])

	return (
		<div>
			<Song songs={songs} getUrl={getUrl}/>
			<AudioButtons audioRef={audioRef} playMusic={playMusic} isPlaying={isPlaying} prevButton={prevButton} nextButton={nextButton}/>
			<audio ref={audioRef} src={`${baseUrl}${currentSong}`} autoPlay ></audio>
		</div>
	);

};

export default Home;
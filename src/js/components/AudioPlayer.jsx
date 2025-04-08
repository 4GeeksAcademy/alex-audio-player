import {React, useRef} from "react";

const AudioPlayer = ({baseUrl, currentSong}) => {
  const audioRef = useRef(null)

  const playMusic = () => {
    audioRef.current.load()
    audioRef.current.play()
  }
                   return <div className="text-center" style={{fontSize:"50px"}}>
                            <button id="btn-previous" ><i className="fa-solid fa-circle-chevron-left"></i></button>
                            <button onClick={playMusic} id="btn-play" ><i className="fa-solid fa-circle-play"></i></button>
                            <button id="btn-next" ><i className="fa-solid fa-circle-chevron-right"></i></button>
                            <audio ref={audioRef} src={`${baseUrl}${currentSong}`} ></audio>
                          </div>
}

export default AudioPlayer
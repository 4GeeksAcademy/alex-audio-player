import React from "react";

const AudioButtons = ({isPlaying, playMusic, prevButton, nextButton}) => {
   
    return <div className="text-center" style={{fontSize:"50px"}}>
                <button onClick={prevButton} id="btn-previous" ><i className="fa-solid fa-circle-chevron-left"></i></button>
                <button onClick={playMusic} id="btn-play" >
                    {isPlaying ? <i className="fa-solid fa-circle-pause"></i> : <i className="fa-solid fa-circle-play"></i>}
                </button>
                <button onClick={nextButton} id="btn-next" ><i className="fa-solid fa-circle-chevron-right"></i></button>
            </div>
}

export default AudioButtons
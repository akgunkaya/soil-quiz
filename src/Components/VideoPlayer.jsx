import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import sectionOne from '../Assets/videos/section-one.mov'
import sectionTwo from '../Assets/videos/section-two.mov'


function VideoPlayer() {
  const [play, setPlay] = useState(false);
  const [url, setUrl] = useState(sectionOne);



  function playButton() {
    setPlay(true)
    setUrl(sectionTwo)
  }

  return (
    <>
      <ReactPlayer url={url} playing={play} />
      <button onClick={playButton}>Play</button>
    </>
  );
}

export default VideoPlayer;
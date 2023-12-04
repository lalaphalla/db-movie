import React from 'react'
import YouTube from 'react-youtube'


export default function YoutubePlayer({videoId}) {
    const opts = {
        
        height: '390',
        width: '640',
        playerVars:{
            autoplay: 0,
        }
    }
    const onReady = (event) => {
        event.target.pauseVideo()
    }
    // const videoId = "RjNcTBXTk4I"
  return (
    <div>YoutubePlayer
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  )
}

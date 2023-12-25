import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

export default function YoutubePlayer({ videoId, height, width }) {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      const updateWindowDimensions = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
    
      useEffect(() => {
        window.addEventListener('resize', updateWindowDimensions); 
        return () => {
          window.removeEventListener('resize', updateWindowDimensions);
        };

      }, []);
    
  const opts = {
    // width: "860px",
    // height: "590px",
    height: Math.min(0.6 * windowDimensions.height, 390), // Adjust as needed
    width: Math.min(0.8 * windowDimensions.width, 640), // Adjust as needed 
    playerVars: {
      autoplay: 0,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  // const videoId = "RjNcTBXTk4I"
  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
}

import React, { useRef } from "react";

import useVideoPlayer from "./hooks/useVideoPlayer";
import "./videostyle.css";
import { ReactComponent as Play } from "./assets/play-square-svgrepo-com.svg"
import { ReactComponent as Pause } from "./assets/pause-square-svgrepo-com.svg"
import { ReactComponent as Full } from "./assets/play-full-volume-svgrepo-com.svg"
import { ReactComponent as Mute } from "./assets/play-mute-volume-svgrepo-com.svg"
import { ReactComponent as FullScreen } from "./assets/fullscreen-svgrepo-com.svg"

const VideoPlayer = (props) => {
    const videoElement = useRef(null);
    const {
      playerState,
      togglePlay,
      handleOnTimeUpdate,
      handleVideoProgress,
      handleVideoSpeed,
      toggleMute,
      fullScreen,
    } = useVideoPlayer(videoElement);
    return (
     
        <div className="container">
        <div className="video-wrapper">
          <video
            src={window.location.origin + "/video/" + props.src}
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
          />
       
          <div className="controls">
          <div className="controls__wrap">


          <div className="actions">
              <button onClick={togglePlay}>
                {!playerState.isPlaying ? (
                  <i className="bx bx-play"><Play/></i>
                ) : (
                  <i className="bx bx-pause"><Pause/></i>
                )}
              </button>
            </div>
            <div class="range-input">
            <input
              type="range"
              min="0"
              max="100"
              value={playerState.progress}
              onChange={(e) => handleVideoProgress(e)}
            />
            </div>
            <select
              className="velocity"
              value={playerState.speed}
              onChange={(e) => handleVideoSpeed(e)}
            >
              <option value="0.50">0.50x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="2">2x</option>
            </select>
            <button className="mute-btn" onClick={toggleMute}>
              {!playerState.isMuted ? (
                <i className="bx bxs-volume-full"><Full/></i>
              ) : (
                <i className="bx bxs-volume-mute"><Mute/></i>
              )}
            </button>
            <button className="full-screen-btn" onClick={fullScreen}>
            <i className="bx bx-full"><FullScreen/></i>
            </button>
          </div>
 
          </div>
        </div>
      </div>
     
    );
}

export default VideoPlayer
import React from 'react'

const Video = (props:any) => {
  return (
    <div className='video'>
    
        <video src={window.location.origin + "/video/" + props.src} controls>
           

        </video>
    </div>
  )
}

export default Video

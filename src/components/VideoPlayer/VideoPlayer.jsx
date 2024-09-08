"use client";

import React from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = ({videoUrl}) => {
  return (
    <div className='flex justify-center items-center'>
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoUrl}`} 
            controls={true}
            />
    </div>
  )
}

export default VideoPlayer
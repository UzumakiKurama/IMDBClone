"use client";

import React from 'react';
import ReactPlayer from 'react-player/youtube';
import useSize from '@/utilities/useGetWidth';

const VideoPlayer = ({videoUrl}) => {
    const currSize = useSize();
    console.log(currSize);
  return (
    <div className='flex justify-center items-center'>
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoUrl}`} 
            controls={true}
            width={currSize[1] < 450 ? "400px" : "640px"}
            height={currSize[1] < 450 ? "250px" : "360px"}
        />
    </div>
  )
}

export default VideoPlayer
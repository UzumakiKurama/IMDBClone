'use client';
import React, { useCallback, useEffect, useRef, useState, useLayoutEffect } from 'react'
import TypewriterComponent from 'typewriter-effect';

const HomeContainer = ({movieDetails}) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(null);
  const timerRef = useRef(null);
  const widthRef = useRef(null);
  const [details, setDetails] = useState({});

  // Login to handle the previous and next slides 
  const prevSlideHandler = ()=>{
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? movieDetails.length -1 : currentIndex-1;

    setCurrentIndex(newIndex);
  }   

  const nextSlideHandler = useCallback(()=>{
    const isLast = currentIndex === movieDetails.length-1;
    const newIndex = isLast ? 0 : currentIndex+1;

    setCurrentIndex(newIndex);
  },[currentIndex,movieDetails]);

  // If prev and next buttons are not clicked, slides will automatically slide.
  useEffect(()=>{
    if(timerRef.current){
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(()=>nextSlideHandler(), 10000);
  
    return ()=>clearTimeout(timerRef.current);
  },[nextSlideHandler]);

  // Dynamically get the width of the screen for responsiveness.
  useEffect(()=>{
    window.addEventListener('resize', ()=> setWidth(widthRef.current.offsetWidth))

    return () => {
      window.removeEventListener('resize', ()=> setWidth(widthRef.current.offsetWidth) )
    }
  },[]);

  useLayoutEffect(() => {
    setWidth(widthRef.current.offsetWidth);
  }, [widthRef]);

  //For Displaying current movie info 
  useEffect(()=>{
    setDetails(movieDetails[currentIndex]);
  },[currentIndex])


  return (
    <div ref={widthRef} className='h-full relative overflow-hidden '>
        
        <div className='absolute right-0 bottom-0 tracking-widest font-merriweather z-10 flex flex-col p-4 text-lg text-black border-black rounded-lg bg-white hover:bg-opacity-60 bg-opacity-30 m-10 items-center'>
          <span className='text-xl font-bold'>{details?.title || details?.name}</span>
          <p className='flex items-center'> 
              Rating : 
              <img className=' w-10 h-6 px-2' src='/star.png'/>
              <span className='font-semibold '>{details?.vote_average?.toFixed(2)} </span> 
              <span className='text-gray-900'> / 10</span> 
          </p>
          <p>
            Released : <span>{details?.release_date || details?.first_air_date}</span>                              
          </p>
        </div>

        <div 
          onClick={prevSlideHandler} 
          className='absolute top-1/2 left-0 translate-x-0 -translate-y-1/2 text-4xl sm:text-7xl z-10 cursor-pointer text-white hover:text-white'>〈 </div>
        <div 
          style={{ 
              width:`${width*movieDetails.length}px`, 
              transform:`translateX(-${currentIndex*width}px)`, 
              transition: 'transform ease-out 0.5s'
            }} 
          className='h-full flex overflow-hidden'>
          {
            width > 480 ? 
            movieDetails.map((movie,id) => (
              <div 
                key={id} 
                style={{
                    backgroundImage : `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,0.7)),url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
                  }} 
                className='h-full w-full bg-center bg-cover bg-no-repeat object-fill transition-all '> 
              </div>
            )) : 
            movieDetails.map((movie,id) => (
              <div 
                key={id} 
                style={{
                  backgroundImage : `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,0.7)),url(https://image.tmdb.org/t/p/original/${movie.poster_path})`
                }} 
                className='h-full w-full bg-center bg-cover bg-no-repeat object-fill transition-all '> 
              </div>
            ))
          }
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[400px] mt-8 sm:min-w-[1100px] text-center'>
            <div className='font-bold text-center text-4xl sm:text-9xl text-white font-kronaone tracking-wider pb-10'>
              <TypewriterComponent onInit={(typewriter)=>{
                                          typewriter.typeString("Movies")
                                                    .pauseFor(2000)
                                                    .deleteAll()
                                                    .typeString("TV Shows")
                                                    .pauseFor(2000)
                                                    .start();}}
                                          options={{
                                            loop: true
                                          }}/>
            </div>
            <p className='font-merriweather text-lg sm:text-2xl text-white'>Know all about your favourite Movies and TV Shows.</p>
        </div>
        <div onClick={nextSlideHandler} className='absolute top-1/2 right-0 translate-x-0 -translate-y-1/2 text-4xl sm:text-7xl z-10 cursor-pointer text-white hover:text-white' > 〉 </div>
    </div>
  )
}

export default HomeContainer
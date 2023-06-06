'use client';
import React, { useCallback, useEffect, useRef, useState, useLayoutEffect } from 'react'
import TypewriterComponent from 'typewriter-effect';
const HomeContainer = ({bgImages}) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(null);
  const timerRef = useRef(null);
  const widthRef = useRef(null);

  // Login to handle the previous and next slides 
  const prevSlideHandler = ()=>{
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? bgImages.length -1 : currentIndex-1;

    setCurrentIndex(newIndex);
  }   

  const nextSlideHandler = useCallback(()=>{
    const isLast = currentIndex === bgImages.length-1;
    const newIndex = isLast ? 0 : currentIndex+1;

    setCurrentIndex(newIndex);
  },[currentIndex,bgImages]);

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

  return (
    <div ref={widthRef} className='h-full relative overflow-hidden'>
        <div onClick={prevSlideHandler} className='absolute top-1/2 left-0 translate-x-0 -translate-y-1/2 text-7xl z-10 cursor-pointer hover:text-amber-500'>〈 </div>
        <div style={{width:`${width*bgImages.length}px`, transform:`translateX(-${currentIndex*width}px)`, transition: 'transform ease-out 0.5s'}} className='h-full flex opacity-30 overflow-hidden'>
          {bgImages.map((imageUrl,id) => (
            <div key={id} style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${imageUrl})`}} 
                 className='h-full w-full bg-center bg-cover bg-no-repeat object-fill transition-all'> 
            </div>
          ))}
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10  text-center'>
            <div className='font-bold text-center text-amber-500 font-kronaone tracking-wider  sm:text-9xl text-4xl pb-10'>
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
            <p className='font-merriweather'>Know all about your favourite Movies and TV Shows.</p>
        </div>
        <div onClick={nextSlideHandler} className='absolute top-1/2 right-0 translate-x-0 -translate-y-1/2 text-7xl z-10 cursor-pointer hover:text-amber-500' > 〉 </div>
    </div>
  )
}

export default HomeContainer
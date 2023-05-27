"use client";
import React, { useEffect,useState,useRef } from 'react';
import Card from './Card';

const Carousel = ({title,results}) => {
  //For Trending Results :- Day and Week
  const [cards, setCards] = useState([]);
  const [trendType, setTrendType] = useState('day');

  useEffect(()=>{
    if(title === 'Trending'){
      trendType === 'day' ? setCards(results.day) : setCards(results.week);
    } else {
      setCards(results);
    }
  },[trendType,cards]);

  const trendBtnClickHandler = (trend) => setTrendType(trend);

  //This logic explains the carousel effect. Sliding cards.
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () =>{
    if(currentIndex>0){
      setCurrentIndex((prevState) => prevState-1);
    }
  }
  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };
  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }
  
    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }
  
    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, [])

  return (
    <div className=' lg:container lg:mx-auto lg:px-0 first:pt-6 px-10 '>
      <div className='carousel mx-auto'>
        <div className='relative overflow-visible'>
            <div className='flex justify-between absolute top left w-full h-full'>
                <button 
                    onClick={movePrev}
                    className='hover:bg-blue-900/75 h-full text-white w-10 text-center opacity-75 
                                hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 
                                p-0 m-0 transition-all ease-in-out duration-300'
                    disabled={isDisabled('prev')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-20 -ml-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"/>
                    </svg>
                    <span className="sr-only">Prev</span>
                </button>
                <button
                    onClick={moveNext}
                    className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 
                                hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 
                                p-0 m-0 transition-all ease-in-out duration-300"
                    disabled={isDisabled('next')}
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-20 -ml-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}>
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </button>
            </div>
            <h1 className='xl:text-xl font-merriweather pb-4 absolute z-10'>
                {title === "Trending" ? 
                <div>
                  <span>{title} &nbsp;</span> 
                  <div className=' text-black text-lg inline bg-white p-2 rounded-3xl '
                        style={{background:'linear-gradient(119deg, rgb(245,158,11) 40%, #FFFF 40%)'}}>
                    <button onClick={() => trendBtnClickHandler('day')}>Today  &nbsp;</button>
                    <button onClick={() => trendBtnClickHandler('week')}> This Week</button>
                  </div>
                </div>  : title } 
            </h1>
            <div ref={carousel} className="carousel-container relative flex items-center gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">                
              {cards.map(element=>(
                  <Card key={element.id} result={element} />
              ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Carousel
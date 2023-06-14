import Link from 'next/link'
import React from 'react'

const DetailsCard = ({details,type}) => {
  return (
    <div className='group bg-no-repeat m-4 relative font-merriweather'>
        <img className='rounded-md relative bg-gray-400 background-clip group-hover:background-clip-hover' 
             src={`https://image.tmdb.org/t/p/w185/${details.poster_path}`} loading='lazy'/>
        <div className='absolute bottom-3 left-0 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all'>
            <img className='w-8 h-8' src='/star.png' loading='lazy' />
            <h3> <span className='font-bold' > {details.vote_average.toFixed(1)} </span> /10 </h3>
        </div>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-5 opacity-0 group-hover:translate-y-2 group-hover:opacity-100 transition-all'>
            <div className='border-2 border-white bg-black w-10 h-10 rounded-[50%] text-white bg-opacity-80'>
               <Link href={ type==="movie" ? `/movie/${details.id}` : `/tv-shows/${details.id}`}> <span className='text-3xl pl-[6px]'> &#10132; </span> </Link>  
            </div>
        </div>
    </div>
  )
}

export default DetailsCard
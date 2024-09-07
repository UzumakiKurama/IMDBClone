import Link from 'next/link'
import React from 'react'

const SearchMovieCard = ({movie}) => {
  return (
    <div 
        style={{backgroundImage : `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`}} 
        className='text-white bg-contain bg-no-repeat w-full min-w-[800px] h-full min-h-[300px] block my-4 rounded-lg relative'>
        <div className='w-full h-full rounded-lg bg-[linear-gradient(to_right,_rgba(42,_159,_255,_0.2)_0%,_#212120_60%,_#212120_100%)] bg-blend-multiply absolute top-0 bottom-0 right-0 left-0 '></div>
        <div className='w-full max-w-[370px] flex items-start flex-col relative float-right pr-5 pb-4'>
            <div className="my-4">
                <h1 className="mb-1 opacity-75 font-montserrat text-2xl tracking-wider">{movie.original_title.toUpperCase()}</h1>
                <h4 className="uppercase opacity-50 font-bold text-lg text-blue-300 font-montserrat">{movie.release_date}</h4>
            </div>
            <p className="font-montserrat font-[300] opacity-80 mb-6 text-sm">{movie.overview.substring(0, 130)}...</p>
            <Link
              href={`/movie/${movie.id}`}
              className="font-montserrat border-2 border-white p-3 hover:text-blue-300 hover:border-blue-300 transition-all" type="button">
              Know More &rarr;
            </Link>
        </div>
    </div>
  )
}

export default SearchMovieCard
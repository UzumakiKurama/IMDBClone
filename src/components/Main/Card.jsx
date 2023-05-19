import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Card = ({result}) => {
  return (
    <div className='cursor:pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-large sm:border sm:border-slate-400 sm:m-2
                    transition-shadow duration-200 group' >
        <Link href={`/movie/${result.id}`}>
            <Image 
            width={500}
            height={300}
            placeholder='blur'
            blurDataURL='/loader.svg'
            alt='Loading Image...'
            src={`https://image.tmdb.org/t/p/original/${
                result.backdrop_path || result.poster_path
            }`} 
            className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity'/>
            <div className='p-2'>
                <p className='line-clamp-2 p-text-md '>{result.overview}</p>
                <h2 className='truncate text-lg font-bold '>{result.title || result.name}</h2>
                <p className='flex items-center'>
                    {result.release_date || result.first_air_date}
                    <Image className='h-5 mr-1 ml-3' src="/thumbsup.svg" width="32" height="32" alt='Thumbs'/>{result.vote_count}
                </p>
            </div>
        </Link>
    </div>
  )
}

export default Card
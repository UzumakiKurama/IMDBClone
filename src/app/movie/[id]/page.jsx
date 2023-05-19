import React from 'react'
import Image from 'next/image';
const API_KEY = process.env.API_KEY;

const MoviePage = async ({params}) => {
    const movieId = params.id;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      };
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
        .then(response => response.json())
        .catch(err => console.error(err));
  return (
    <div className='w-full'>
        <div className='py-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
        <Image 
            width={500}
            height={300}
            placeholder='blur'
            blurDataURL='/loader.svg'
            alt='Loading Image...'
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
            className='rounded-lg'/>

        <div className='p-2'>
            <h2 className='text-lg mb-3 font-bold '> {movie.title || movie.name}</h2>
            <p className='text-lg mb-3'>
                <span className='font-semibold mr-1'>
                    Overview:
                </span>
                {movie.overview}
            </p>
            <p className='mb-3'> 
                <span className='font-semibold mr-1'>
                    Date Released: <span>{movie.release_date || movie.first_air_date}</span> 
                </span>
            </p>
            <p className='mb-3'> 
                <span className='font-semibold mr-1'>
                    Rating: <span>{movie.vote_count}</span> 
                </span>
            </p>
        </div>
        </div>
    </div>
  )
}

export default MoviePage
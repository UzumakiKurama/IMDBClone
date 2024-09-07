import Details from '@/components/Details/Details';
import request from '@/utilities/callapi';
import React from 'react'

const MoviePage = async ({params}) => {
  const movie = await request(`/movie/${params.id}?language=en-US`);
  return ( 
    <div className='w-full'>
        <Details info={movie} type="movie"/>
    </div>
  )
}

export default MoviePage
import React from 'react'

const Details = ({info}) => {
  return (
    <div className='flex flex-col sm:mx-20 items-center content-center md:space-x-6'>
        <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,0)), url(https://image.tmdb.org/t/p/original/${info.backdrop_path})`, height:'80vh'}} 
             className=' w-full bg-cover bg-no-repeat bg-center'>
            {/* <img
                style={{backgroundImage:'linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0), rgba(0,0,0,2))'}}
                placeholder='blur'
                blurDataURL='/loader.svg'
                alt='Loading Image...'
                src={`https://image.tmdb.org/t/p/h632/${info.backdrop_path}`} /> */}

        </div>

        <div className='p-2'>
            <h2 className='text-lg mb-3 font-bold '> {info.title || info.name}</h2>
            <p className='text-lg mb-3'>
                <span className='font-semibold mr-1'>
                    Overview:
                </span>
                {info.overview}
            </p>
            <p className='mb-3'> 
                <span className='font-semibold mr-1'>
                    Date Released: <span>{info.release_date || info.first_air_date}</span> 
                </span>
            </p>
            <p className='mb-3'> 
                <span className='font-semibold mr-1'>
                    Rating: <span>{info.vote_count}</span> 
                </span>
            </p>
        </div>
    </div>
  )
}

export default Details
import Link from 'next/link';
import React from 'react';

const Card = ({result}) => {

  return (
        <div key={result.id} className="item carousel-item text-center relative w-80 h-80 snap-start font-merriweather">
            <div className="group h-full w-full aspect-square block bg-origin-padding bg-center 
                            bg-contain bg-no-repeat relative z-0 hover:z-10 hover:scale-110 
                            transition duration-500 peer peer-hover:translate-x-2 peer "
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${result.backdrop_path})`}} >
                    <div className='h-full w-full mx-atuo hidden group-hover:flex flex-col items-center justify-center z-20 backdrop-blur-sm'>
                        <h2 className='bg-black bg-opacity-75 p-1 rounded-sm'>
                            {result.title}
                        </h2>
                        <p className='flex justify-center bg-black bg-opacity-75 p-1 m-4'>
                            <span className='text-base pr-2'> {result.vote_average}</span><img width={25} height={25} src='./like.png' className='inline p-1'/>
                            {result.adult && <span>Adult</span> }
                        </p>
                        <Link href={`/movie/${result.id}`} className=''>
                            See More <img width={30} height={30} className='inline' src='./r-arrow.png'/>
                        </Link> 
                    </div>
            </div>
        </div>

  )
}

export default Card
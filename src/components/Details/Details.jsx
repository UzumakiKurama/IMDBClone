import request from '@/utilities/callapi'
import React from 'react'
import DetailsCard from './DetailsCard';

const Details = async ({info}) => {

    // For getting cast and crew of the movie/TV series
    const creditResults = await request(`/movie/${info.id}/credits?language=en-US`);
    
    const actors = [];
    let director = '';
    for(let i=0; i<8; i++){
        actors.push(creditResults?.cast[i]);
    }

    for(let i=0; i<creditResults?.crew.length ; i++){
        if(creditResults.crew[i].known_for_department === 'Directing'){
            director = creditResults.crew[i].name;
            break;
        }
    }

    // For getting collections 
    let collection = {};
    if(info.belongs_to_collection){
        collection = await request(`/collection/${info.belongs_to_collection.id}?language=en-US`);
    }

    return (
    <div className='flex flex-col sm:mx-20 items-center content-center md:space-x-6'>
        
        <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${info.backdrop_path})`, height:'80vh'}} 
             className=' w-full bg-cover bg-no-repeat bg-center relative'>
            <div className='text-center absolute bottom-0 left-1/2 -translate-x-1/2'>
                <h1 style={{fontFamily:'Krona One'}} className='text-white uppercase font-semibold sm:text-8xl text-4xl pb-10 px-3 tracking-wider font-kronaone leading-snug'>{info.title}</h1>
                <p className=' text-white pb-10 italic font-merriweather'>{info.tagline}</p>
            </div>
        </div>

        <div className='p-8 flex'>
            <div className='pr-10'>
                <img src={`https://image.tmdb.org/t/p/w780/${info.poster_path}`} />
            </div>

            <div className='text-black dark:text-white font-merriweather'>
                <h2 className='mb-3 font-bold font-merriweather tracking-widest text-2xl '> {info.original_title || info.name}</h2>
                <div className='text-xl mb-3 leading-[4rem] pb-10  justify-between'>

                    <p className='flex items-center'> 
                        Rating : 
                        <img className=' w-16 h-12 px-2' src='/star.png'/>
                        <span className='font-semibold '>{info.vote_average.toFixed(2)} </span> 
                        <span className='text-gray-400'> / 10</span> 
                    </p>
                    <p> Genre : {info.genres.map(genre => (
                        <span className='pr-2 bg-amber-500 hover:bg-amber-400 rounded-3xl p-2 m-2 text-black'>{genre.name}</span>
                        ))} </p>
                    <p>
                        Released : <span>{info.release_date || info.first_air_date}</span> 
                    </p>

                    <p> 
                        Directed By : {director}
                    </p>
                </div>

                <div className='text-lg leading-relaxed text-justify pb-10'>
                    <span className='border-l-4 border-amber-500 pl-2'> Overview : </span> {info.overview}
                </div>

                <div className=''>
                    <span className='text-lg leading-relaxed text-justify border-l-4 border-amber-500 pl-2'>Top Cast :</span>
                    
                    <div className='flex flex-wrap'>
                        {
                            actors.map(actor =>(
                                <div className='grow-1 p-5 '>
                                        <img className='mx-auto rounded-[50%]' src={`https://image.tmdb.org/t/p/w154/${actor.profile_path}`} />
                                        <p className='text-center'> {actor.name} </p>
                                        <p className='text-center italic'>As</p>
                                        <p className='text-center italic'> {actor.character} </p>
                                </div>
                                ))
                        }
                    </div> 
                </div>
            </div>
        </div>
            {
                Object.keys(collection).length !== 0 ? 
                <div className='w-full pb-20'>
                    <h2 className='border-l-4 border-amber-500 p-2 text-3xl font-semibold'> Prequels / Sequels </h2>
                    <br/>
                    <div className='flex flex-wrap pl-8'>
                        {
                            collection.parts.map(part=>(
                                <DetailsCard details={part} />
                            ))
                        }
                    </div>
                </div>
                    : null
            }
    </div>
  )
}

export default Details
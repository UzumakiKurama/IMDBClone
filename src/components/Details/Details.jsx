import request from '@/utilities/callapi'
import React from 'react'
import DetailsCard from './DetailsCard';
import Image from 'next/image';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const Details = async ({info,type}) => {

    let creditResults = {};
    let recommendations = [];
    let videoUrl = [];

    if(type === "movie"){
        videoUrl = await request(`/movie/${info?.id}/videos?language=en-US`).then(res => res.results);
        creditResults = await request(`/movie/${info?.id}/credits?language=en-US`);
        recommendations = await request(`/movie/${info?.id}/recommendations?language=en-US&page=1`).then(res=>res?.results);
    } else {
        videoUrl = await request(`/tv/${info?.id}/videos?language=en-US`).then(res => res.results);
        creditResults = await request(`/tv/${info?.id}/credits?language=en-US`);
        recommendations = await request(`/tv/${info?.id}/recommendations?language=en-US&page=1`).then(res=>res?.results);
    }
    
    const actors = [];
    let director = '';
    for(let i=0; i<8; i++){
        if(creditResults?.cast?.length >0) actors.push(creditResults.cast[i]);
    }

    for(let i=0; i<creditResults?.crew?.length ; i++){
        if( creditResults?.cast?.length >0 && creditResults.crew[i].known_for_department === 'Directing'){
            director = creditResults.crew[i].name;
            break;
        }
    }

    // For getting collections (Prequels and Sequels)
    let collection = {};
    if(info?.belongs_to_collection){
        collection = await request(`/collection/${info.belongs_to_collection.id}?language=en-US`);
    }

    let recommendationCollection = [];
    for(let i=0; i< Math.min(10,recommendations?.length);i++){
        recommendationCollection.push(recommendations[i]);
    }
    
    return (
    <div className='flex flex-col items-center content-center md:space-x-6'>
        
        <div 
            style={{ 
                    backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,10%), rgba(0,0,0,90%)), url(https://image.tmdb.org/t/p/original/${info?.backdrop_path})`,
                    height:'80vh'
            }} 
            className=' w-full bg-cover bg-no-repeat bg-center relative sm:bg-[-5%_0%]'>
            <div className='text-center absolute bottom-0 left-1/2 -translate-x-1/2'>
                <h1 style={{fontFamily:'Krona One'}} className='text-white uppercase font-semibold 2xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl pb-10 px-3 tracking-wider font-kronaone leading-snug'>
                    { type==="movie" ? info.title : info.name}
                </h1>
                <p className=' text-white pb-10 italic font-merriweather'>{info.tagline}</p>
            </div>
        </div>

        <div className='p-2 sm:p-8 flex'>
            <div className='pr-10 hidden sm:block'>
                <Image loading="eager" src={`https://image.tmdb.org/t/p/w780/${info?.poster_path}`} width={780} height={900} alt="" />
            </div>

            <div className='text-black dark:text-white font-merriweather'>
                <h2 className='mb-3 font-bold tracking-widest text-3xl font-kronaone '> {info.original_title || info.name}</h2>
                <div className='text-xl mb-3 leading-[4rem] pb-10  justify-between'>

                    <div className='flex items-center'> 
                        Rating : 
                        <img className=' w-16 h-12 px-2' src='/star.png'/>
                        <span className='font-semibold '>{info?.vote_average?.toFixed(2)} </span> 
                        <span className='text-gray-400'> / 10</span> 
                    </div>
                    <div className='sm:block '> Genre : 
                        {info?.genres?.map((genre,id) => (
                        <span key={id} className='pr-2 bg-amber-500 hover:bg-amber-400 rounded-3xl  p-2 m-2 text-black'>{genre.name}</span>
                        ))} 
                    </div>
                    <div>
                        Released : <span>{info?.release_date || info?.first_air_date}</span> 
                    </div>

                    <p> 
                        Directed By : {director}
                    </p>

                    {
                        type === "tvShow" && <p> Created By : {info.created_by[0]?.name}</p>
                    }
                </div>

                <div className='text-lg leading-relaxed text-justify pb-10'>
                    <span className='border-l-4 border-amber-500 pl-2'> Overview : </span> {info.overview}
                </div>

                <div className=''>
                    <span className='text-lg leading-relaxed text-justify border-l-4 border-amber-500 pl-2'>Top Cast :</span>
                    
                    <div className='flex flex-wrap gap-16'>
                        {
                            actors?.map((actor,id) =>(
                                <div className='grow-1' key={id}>
                                        <img className='mx-auto rounded-[50%]' alt="" src={`https://image.tmdb.org/t/p/w154/${actor?.profile_path}`} />
                                        <p className='text-center'> {actor?.name} </p>
                                        <p className='text-center italic'>{actor != undefined ? 'As' : null }</p>
                                        <p className='text-center italic'> {actor?.character} </p>
                                </div>
                                ))
                        }
                    </div> 
                </div>
            </div>
        </div>
            {
                Object.keys(collection).length !== 0 ? 
                <div className='w-full py-20'>
                    <h2 className='border-l-4 border-amber-500 p-2 text-3xl font-montserrat font-semibold'> Prequels / Sequels </h2>
                    <br/>
                    <div className='flex flex-wrap sm:pl-8'>
                        {
                            collection?.parts?.map((part,id)=>(
                                <DetailsCard key={id} details={part} type={type}/>
                            ))
                        }
                    </div>
                </div>
                    : null
            }

            {/* {
                info.seasons && 
                <div className='flex flex-wrap justify-between'>
                    {info.seasons.map(season => <Image src={`https://image.tmdb.org/t/p/w300/${season?.poster_path}`} alt='loading' width={200} height={300} />)}
                </div>
            } */}
            <div className='w-full py-5'>
                <h2 className="border-l-4 border-amber-500 m-1 p-2 text-3xl font-semibold font-montserrat">Trailer</h2>
                {
                    videoUrl.length > 0 ? <div className='flex flex-col sm:flex-row justify-center items-center gap-8'>
                            <VideoPlayer videoUrl={videoUrl[0].key}/> 
                            <VideoPlayer videoUrl={videoUrl[1].key}/> 
                        </div>
                        : <div className='text-3xl font-merriweather'>Trailer not available</div>
                }
            </div>

            <div className='w-full py-5'>
                <h2 className='border-l-4 border-amber-500 m-1 p-2 text-3xl font-semibold font-montserrat'>Simliar {type==="movie" ? "movies":"shows"} </h2>
                <div className='flex flex-wrap sm:pl-8 pt-6'>
                    {
                        recommendationCollection?.map((item,id)=>(
                            <DetailsCard key={id} details={item} type={type === "movie" ? "movie":"tvShow"} />
                        )) 
                    }
                </div>
            </div>

    </div>
  )
}

export default Details
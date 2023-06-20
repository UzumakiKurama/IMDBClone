import DetailsCard from '@/components/Details/DetailsCard';
import request from '@/utilities/callapi';
import React from 'react'
const API_KEY = process.env.API_KEY;

const SearchPage = async ({params}) => {
 
    const searchResults = await request(`/search/movie?query=${params.searchTerm}&include_adult=false&language=en-US&page=1`).then(res=>res.results);
    const tvSearchResults = await request(`/search/tv?query=${params.searchTerm}&include_adult=false&language=en-US&page=1`).then(res=>res.results);
    
  return (
    <div className='grid grid-cols-2 gap-2 w-full h-full pt-36 sm:pt-28'>
      <div className='text-center h-full'>
        <h2 className=' text-lg sm:text-4xl font-merriweather tracking-widest uppercase '>Movies</h2>
        <div className='flex flex-wrap px-8 justify-center h-full'>
          {
            searchResults.length === 0 ? <p>No movies related to {params.searchTerm}</p> 
            : searchResults?.map((item,id) => (
              <DetailsCard details={item} type="movie" key={id} />
            )) 
          }
        
        </div>
      </div>
      <div className='text-center h-full'>
        <h2 className='text-lg sm:text-4xl font-merriweather tracking-widest uppercase ' > TV-Shows</h2>
        <div className='flex flex-wrap px-8 justify-center h-full'>
          {
            tvSearchResults?.length === 0 ? <p className='text-black dark:text-white'>No shows related to {params.searchTerm}</p> 
              : tvSearchResults?.map((item,id)=>(
                <DetailsCard details={item} type="tvshow" key={id} />
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default SearchPage
import Carousel from '@/components/Carousel/Carousel';
import request from '@/utilities/callapi'
import React from 'react'

const TvShow = async () => {
    const trending = await request(`/trending/tv/day?language=en-US`).then(res=>res.results);
    const topRated = await request(`/tv/top_rated?language=en-US&page=1`).then(res=>res.results);
    
    return (
    <div className='h-full w-screen relative mx-auto pt-20'>
        <Carousel title="Trending Shows" results={trending} type="tvShow" />
        <Carousel title="Top Rated" results={topRated} type="tvShow" />
    </div>
  )
}

export default TvShow
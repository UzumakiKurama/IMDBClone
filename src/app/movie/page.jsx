import React from 'react';
import Carousel from '@/components/Carousel/Carousel';
import request from '@/utilities/callapi';

const Movie = async () => {
    const dayTrendingResults = await request('/trending/movie/day?language=en-US').then(res=>res.results);
    const weekTrendingResults = await request('/trending/movie/week?language=en-US').then(res=>res.results)
    const topRatedResults = await request('/movie/top_rated?language=en-US&page=1').then(res=>res.results);
    
    const trendResults = {
      day : dayTrendingResults,
      week : weekTrendingResults
    }
  return (
    <div className='h-full w-screen relative mx-auto pt-20 '>
        <Carousel title="Trending" results={trendResults} />
        <Carousel title="Top Rated" results={topRatedResults} />
    </div>
  )
}

export default Movie
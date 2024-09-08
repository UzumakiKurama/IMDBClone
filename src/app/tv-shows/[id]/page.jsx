import request from '@/utilities/callapi'
import React from 'react'
import Details from '@/components/Details/Details';
const TvShowPage = async ({params}) => {

  const tvShow = await request(`/tv/${params.id}?language=en-US`);
  return (
    <div className='w-full '>
        <Details info={tvShow} type="tvShow"/>
    </div>
  )
}

export default TvShowPage
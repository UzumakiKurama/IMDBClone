"use client";
import React  from 'react';
import SearchPage from '@/components/Search/SearchPage';

const page =  () => {

    // const results = request(`/search/movie?query=harry&include_adult=false&language=en-US&page=1`).then(res => res.results);

    return (
    <SearchPage />
  )
}

export default page
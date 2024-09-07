"use client";

import React, { useState, useEffect} from 'react';
import { FiSearch } from 'react-icons/fi';
import SearchMovieCard from './SearchMovieCard/SearchMovieCard';
import request from '@/utilities/callapi';

const SearchPage = () => {
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        if(value !== ""){
            let timeoutId = null;
            try {
                timeoutId = setTimeout(() => {
                    request(`/search/movie?query=${value}&include_adult=false&language=en-US&page=1`)
                        .then((response) => setResults(response))
                        .catch(err => setError(err));
                }, 1200);
            } catch (error) {   
                setError(error);
            }
    
            return () => {
                clearTimeout(timeoutId);
            }
        }

    }, [value]);

  return (
    <div className='h-full w-screen relative mx-auto pt-28'>
        <div className='flex justify-center items-center'>
            <div className='flex items-center rounded-full gap-2 border-2 border-black dark:border-white'>
                <input
                    className='rounded-full bg-transparent text-xl sm:w-[400px] w-[300px] p-2 pl-5 outline-none' 
                    type="text" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    />
                <div className='p-2 bg-black dark:bg-white rounded-full text-white dark:text-black'><FiSearch size={45} /></div>
            </div>
        </div>
        <div className='pt-10 flex justify-center'>
            {
                results.length > 0 ? 
                    <div className='flex flex-col gap-3 box-border'>
                        {
                            results.map(movie => <SearchMovieCard key={movie.id} movie={movie} />)
                        }
                    </div> 
                : <div className='text-2xl font-merriweather '>Search any movie or tv-series...</div> 
            }
            {
                results.length === 0 && error.length > 1 ? <div> {error} </div> : null
            }
        </div>
    </div>
  )
}

export default SearchPage
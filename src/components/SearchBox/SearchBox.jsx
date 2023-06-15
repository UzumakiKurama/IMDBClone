"use client";
import { useState } from 'react'
import { useRouter } from 'next/navigation';

const SearchBox = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();
    function handleSubmit(e){
        e.preventDefault();
        if(!search) return;

        router.push(`/search/${search}`);
    }
  return (
    <form onSubmit={handleSubmit} className='flex max-w-xl justify-between items-center xl:-translate-x-24 text-lg'>
        <input 
            value={search}
            onChange={(e)=>setSearch(e.target.value)} 
            type='text' 
            placeholder='Search movies,shows ...' 
            className='w-full rounded-full dark:placeholder-gray-300 outline-none bg-white bg-opacity-10 p-3 flex-1' />
        <button disabled={!search} type='submit' className='text-amber-600 dark: disabled:text-gray-200'>Search</button>
    </form>
  )
}

export default SearchBox
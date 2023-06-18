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
    <form onSubmit={handleSubmit} className='flex max-w-xl justify-between items-center xl:-translate-x-24 text-lg text-black p-4 sm:p-0'>
        <input 
            value={search}
            onChange={(e)=>setSearch(e.target.value)} 
            type='text' 
            placeholder='Search movies,shows ...' 
            className='w-full rounded-full placeholder-gray-100 dark:placeholder-gray-600 outline-none bg-black dark:bg-white dark:bg-opacity-50 bg-opacity-20 p-3 flex-1' />
        <button disabled={!search} type='submit' className='text-amber-600 dark: disabled:text-gray-200'>Search</button>
    </form>
  )
}

export default SearchBox
"use client";
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SearchBox = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();
    function handleSubmit(e){
        e.preventDefault();
        if(!search) return;

        router.push(`/search/${search}`);
    }
  return (
    <form onSubmit={handleSubmit} className='flex max-w-xl justify-between items-center xl:-translate-x-24 text-lg text-black p-2 sm:p-1 mx-2 rounded-full bg-gray-700 dark:bg-white dark:bg-opacity-60 bg-opacity-70'>
        <input 
            value={search}
            onChange={(e)=>setSearch(e.target.value)} 
            type='text' 
            placeholder='Search movies,shows ...' 
            className=' bg-transparent outline-none border-none placeholder:text-white dark:placeholder:text-black p-1 flex-1' />
        <button disabled={!search} type='submit' className='bg-gray-800 bg-opacity-90 disabled:bg-opacity-80 p-2 rounded-full'> <Image src="/search.svg" alt="" width="30" height="30" /> </button>
    </form>
  )
}

export default SearchBox
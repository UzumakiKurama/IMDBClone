"use client";
import { useRouter } from 'next/navigation';
import { FiSearch  } from 'react-icons/fi';

const SearchBox = () => {
    const router = useRouter();
      
      const onChangeHandler = (e) => {
        router.push(`/search`);
      }
  return (
   <>
      <FiSearch 
        className='cursor-pointer' 
        onClick={onChangeHandler} 
        size={30}/>
   </>
  )
}

export default SearchBox
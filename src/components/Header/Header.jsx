import React from 'react';
import MenuItem from './MenuItem';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import SearchBox from '../Search/SearchBox/SearchBox';

const Header = () => {
  return (
    <div className='w-full absolute z-10 text-black dark:text-white tracking-widest font-bold font-merriweather'>
      <div className='flex justify-between text-xl sm:mx-8 py-5 s:py-7 items-center'>
        <div className='flex dark:hidden w-[30%]'>
          <MenuItem title="Home" address='/' Icon='/home.svg'/>
          {/* <MenuItem title="About" address='/about' Icon='/about-icon.svg'/> */}
          <MenuItem title="Movies" address='/movie' Icon='/movie.svg'/>
          <MenuItem title="TV Shows" address='/tv-shows' Icon='/tv-shows-light.svg'/>
        </div>

        <div className='hidden dark:flex w-[30%]'>
          <MenuItem title="Home" address='/' Icon='/home-white.svg'/>
          {/* <MenuItem title="About" address='/about' Icon='/about-white.svg'/> */}
          <MenuItem title="Movies" address='/movie' Icon='/movie-white.png'/>
          <MenuItem title="TV Shows" address='/tv-shows' Icon='/tv-white.png'/>
        </div>

        <Link href='/'>
          <h2 className='text-lg sm:text-2xl flex items-center font-montserrat justify-center'>
            <div className='font-blod text-white dark:text-black bg-black dark:bg-white py-1 px-2 rounded-lg mr-1'>IMDB</div> 
            <div className='hidden sm:inline'>Clone</div> 
          </h2>
        </Link>

        <div className='flex items-center justify-end space-x-5 w-[30%]'>
          <SearchBox />
          <DarkModeSwitch/>
        </div>
      </div>
    </div>
  )
}

export default Header
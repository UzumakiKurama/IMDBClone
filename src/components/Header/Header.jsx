import React from 'react';
import MenuItem from './MenuItem';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import SearchBox from '../SearchBox/SearchBox';

const Header = () => {
  return (
    <div className='w-full absolute z-10 text-amber-500 tracking-widest font-bold font-merriweather'>
      <div className='flex justify-between text-xl sm:mx-8 py-5 s:py-7  items-center'>
        <div className='flex dark:hidden'>
          <MenuItem title="HOME" address='/' Icon='/home.svg'/>
          <MenuItem title="ABOUT" address='/about' Icon='/about-icon.svg'/>
          <MenuItem title="MOVIES" address='/movie' Icon='/movie.svg'/>
          <MenuItem title="TV SHOWS" address='/tv-shows' Icon='/tv-shows-light.svg'/>
        </div>

        <div className='hidden dark:flex'>
          <MenuItem title="HOME" address='/' Icon='/home-white.svg'/>
          <MenuItem title="ABOUT" address='/about' Icon='/about-white.svg'/>
          <MenuItem title="MOVIES" address='/movie' Icon='/movie-white.png'/>
          <MenuItem title="TV SHOWS" address='/tv-shows' Icon='/tv-white.png'/>
        </div>

        <div className='hidden sm:block'>
          <SearchBox />
        </div>
        <div className='flex items-center space-x-5'>
          <DarkModeSwitch/>
          <Link href='/'>
            <h2 className='text-lg sm:text-2xl'>
              <span className='font-blod text-white bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDB</span> 
              <span className='text-xl hidden sm:inline'>Clone</span> 
            </h2>
          </Link>
        </div>
      </div>
      <div className='block sm:hidden'>
        <SearchBox />
      </div>
    </div>
  )
}

export default Header
import React from 'react';
import MenuItem from './MenuItem';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
    <div className='w-full absolute z-10 bg-black text-white'>
      <div className='flex justify-between text-xl mx-8 py-7 items-center'>
              <div className='flex'>
                <MenuItem title="HOME" address='/' Icon='/home-icon.svg'/>
                <MenuItem title="ABOUT" address='/about' Icon='/about-icon.svg'/>
                <MenuItem title="MOVIES" address='/movie' Icon='/movie.svg'/>
                <MenuItem title="TV SHOWS" address='/tv-shows' Icon='/tv-shows-light.svg'/>
              </div>
              <div className='flex items-center space-x-5'>
                <DarkModeSwitch/>
                <Link href='/'>
                  <h2 className='text-2xl'>
                    <span className='font-blod bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDB</span> 
                    <span className='text-xl hidden sm:inline'>Clone</span> 
                  </h2>
                </Link>
              </div>
          </div>
    </div>
  )
}

export default Header
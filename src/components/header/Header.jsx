import React from 'react';
import MenuItem from './MenuItem';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex justify-between mx-2 py-4 max-w-6xl sm:mx-auto items-center'>
        <div className='flex'>
          <MenuItem title="HOME" address='/' Icon='/home-icon.svg'/>
          <MenuItem title="ABOUT" address='/about' Icon='/about-icon.svg'/>
        </div>
        <div>
          <Link href='/'>
            <h2 className='text-2xl'>
              <span className='font-blod bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDB</span> 
              <span className='text-xl hidden sm:inline'>Clone</span> 
            </h2>
          </Link>
        </div>
    </div>
  )
}

export default Header
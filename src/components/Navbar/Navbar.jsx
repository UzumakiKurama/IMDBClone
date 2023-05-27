import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex justify-center dark:bg-gray-800 bg-amber-100 lg:text-lg'>
        <NavbarItem title="Movies" param="fetchTrending"/>
        <NavbarItem title="TV Shows" param="fetchTopRated"/>
    </div>
  )
}

export default Navbar
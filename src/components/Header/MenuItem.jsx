import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const MenuItem = ({title,address,Icon}) => {
  return (
    <Link href={address}  className='lg:mx-6 '>
        <Image loading='lazy' width='30' height='30' src={Icon} className='text-2xl font-kronaone sm:hidden mx-4' alt="?"/>
        <p className='hidden font-montserrat sm:block my-2 text-lg'>{title}</p>
    </Link>
  )
}

export default MenuItem
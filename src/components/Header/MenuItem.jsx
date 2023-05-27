import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const MenuItem = ({title,address,Icon}) => {
  return (
        <Link href={address}  className='lg:mx-6 hover:text-amber-600'>
            <Image width='32' height='32' src={Icon} className='text-2xl sm:hidden mx-4' alt="?"/>
            <p className='hidden sm:block my-2-text-sm'>{title}</p>
        </Link>
  )
}

export default MenuItem
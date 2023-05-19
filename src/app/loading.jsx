import React from 'react'
import Image from 'next/image'

const loading = () => {
  return (
    <div>
        <Image width="100" height="100" className="h-96" src="loader.svg" alt="loading"/>
    </div>
  )
}

export default loading
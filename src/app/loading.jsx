import React from 'react'
import Loader from '@/components/Loader/Loader'

const loading = () => {
  return (
    <div className='absolute top-1/2 left-1/2'>
      <Loader />
    </div>
  )
}

export default loading
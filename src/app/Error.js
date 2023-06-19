"use client";
import React,{useEffect} from 'react'

const Error = ({error,reset}) => {

  return (
    <div className='text-center pt-24 '>
        <h1>Something Went Wrong</h1>
        <button className='hover:text-amber-600' onClick={()=>reset()}>Try Again</button>
    </div>
  )
}

export default Error
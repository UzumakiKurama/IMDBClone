import React from 'react';
import "./LoaderStyles.css";

const Loader = () => {
  return (
    <>
        <div className='loader_white hidden dark:block'></div>
        <div className='loader_black block dark:hidden'></div>
    </>
  )
}

export default Loader
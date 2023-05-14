"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const DarkModeSwitch = () => {

    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true)
    },[])
    const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
        {mounted && (currentTheme === "dark" ? (
            <Image 
                className='cursor-pointer text-xl' 
                width="32" 
                height="32"
                onClick={()=>setTheme("light")} 
                src="./lightmode.svg"/>
        ):(
            <Image 
                className="cursor-pointer text-xl" 
                width='32' 
                height="32"
                onClick={()=> setTheme("dark")} 
                src="./darkmode.svg"/>

        ))}
    </>
  )
}

export default DarkModeSwitch
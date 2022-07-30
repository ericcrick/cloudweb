import React, { useState } from 'react'
import {MenuIcon, XIcon } from '@heroicons/react/outline'

export const Navbar = () => {
  const [nav,setNav] = useState(false);

  const handleClick = ()=> setNav(!nav);
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg fixed'>
      <div className='w-full h-full flex justify-between items-center px-2'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='bg-transparent mr-4 border-none text-black'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>}
        </div>
      </div>
      <ul className={!nav ? 'hidden': 'bg-zinc-200 absolute px-8 w-full'}>
        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='border-b-2 border-zinc-300 w-full'>About</li>
        <li className='border-b-2 border-zinc-300 w-full'>Support</li>
        <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
        <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
        <div className='flex flex-col my-4'>
          <button className='bg-transparent text-indigo-600 px-8 mb-4 py-3'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  )
}

import React from 'react'
import Link from 'next/link'
import Search from './Search'


export default function Navbar() {
  return (
    <nav className="bg-green-800 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
        <h1 className='text-3xl font-bold text-yellow-50 grid
        place-content-center mb-2 md:mb-0'>
            <Link href="/"> WikiRocket</Link>
        </h1> 
        <Search/>
       {/*  <div className='flex justify-around'>
       <h4 className='text-2xl px-5 font-bold text-white flex flex-row flex-justify-around 
        place-content-center mb-2 md:mb-0 md:place-content-center'>
            <span className='px-3'>About</span>
            <span className='px-3'>Contatti</span> 
        </h4>
        <h4 className='text-2xl px-5 font-bold text-white'><span className='px-3'> Login</span></h4>
        </div> */}
    </nav>
  )
}

import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex py-5 container mx-auto justify-between items-center'>
        <h1 className='text-white sm:text-4xl underline'>Portfolio</h1>
        <div className='flex justify-center items-center gap-8'>
            <Link href="#!" className='text-white  transition-all ease-in-out duration-500 hover:underline libre-franklink'>About</Link>
            <Link href="#!" className='text-white  transition-all ease-in-out duration-500 hover:underline libre-franklink'>Service</Link>
            <Link href="#!" className='text-white  transition-all ease-in-out duration-500 hover:underline libre-franklink'>Portfolio</Link>
            <Link href="#!" className='text-white  transition-all ease-in-out duration-500 hover:underline libre-franklink'>Testimonial</Link>
            <Link href="#!" className='text-white  transition-all ease-in-out duration-500 hover:underline libre-franklink'>Contact</Link>
        </div>
    </div>
  )
}

export default Header

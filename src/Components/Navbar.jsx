import React from 'react'
import { Link } from 'react-scroll'
export default function Navbar() {
  return (
    <div className='flex gap-3 px-16 justify-between items-center fixed w-screen '>
        <div className="h-16 w-60  object-cover overflow-hidden" >
        <img src="https://i.imgur.com/JronzV5.png" className='h-14' alt="" />

        </div>

        <div className="flex gap-10">
        <Link className='hover:bg-white rounded-full p-3 px-6 cursor-pointer hover:shadow-lg duration-200' to='hero' duration={500} smooth={true}>Home</Link>
        <Link className='hover:bg-white rounded-full p-3 px-6 cursor-pointer hover:shadow-lg duration-200' to='about' duration={500} smooth={true}>about</Link>
        <Link className='hover:bg-white rounded-full p-3 px-6 cursor-pointer hover:shadow-lg duration-200' to='testimonials' duration={500} smooth={true} >testimonials</Link>
        <Link className='hover:bg-white rounded-full p-3 px-6 cursor-pointer hover:shadow-lg duration-200' to='form' duration={500} smooth={true}>form</Link>
        </div>
    </div>
  )
}

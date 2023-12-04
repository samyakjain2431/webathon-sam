import React from 'react'
import { Link } from 'react-scroll'

export default function Hero() {
  return (
        <div className="bg-[#a076f940] ">
        <div className=" max-w-[1200px] h-screen  flex flex-col justify-between py-20 px-6 lg:px-16 mx-auto " id='hero'>
            <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-center overflow-hidden">
                <div className='lg:w-80 text-center lg:text-left' >
                <h2 className='text-[60px] text-blue-600'>We are</h2>
                <h2 className='lg:text-right text-[60px] lg:relative lg:-right-10 tracking-widest italic relative  -top-8'>Inaayat</h2>
                <p className='text-center mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero natus culpa dolorum ex nesciunt rem officiis odit a odio sapiente?</p>
                <div className="flex gap-10 justify-center">
                    <button className="block px-5 py-3 text-white bg-purple-600 rounded-full">BUTTON 1</button>
                    <button className="block px-5 py-3 text-white bg-purple-600 rounded-full">BUTTON 2</button>
                </div>
                </div>
                <img src="https://i.ibb.co/7JnjHfQ/Images-1.jpg"  className="rounded-full  " alt="" />
            </div>
            <Link to='about' smooth={true} duration ={500} className='animate-bounce text-slate-600 relative top-5  p-3 font-bold cursor-pointer block text-center'>{'V'}</Link>
        </div>
        </div>
  )
}

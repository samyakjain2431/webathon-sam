import React from 'react'
import { Link } from 'react-scroll'

export default function Testimonials() {
  return (
    <div className='bg-green-100 h-screen  flex flex-col justify-evenly' id='testimonials'>
        <div className="">
            <h2 className="text-center text-2xl font-medium tracking-widest">ACHIEVMENTS</h2>
        <div className="max-w-[1200px] scale-75 lg:scale-100  mx-auto px-6 lg:px-16">
            
            <div className="grid gap-10 grid-cols-5 my-10">
                <p className='bg-slate-200 rounded-full w-max p-10 col-start-3 justify-self-center'>2023</p>
                <p className='col-span-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia enim amet expedita! Facilis, dolorem veritatis.</p>
            </div>
            <div className="grid grid-cols-5 my-10">
                <p className='col-span-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia enim amet expedita! Facilis, dolorem veritatis.</p>
                <p className='bg-slate-200 rounded-full w-max p-10 col-start-3 justify-self-center'>2023</p>
            </div>
            <div className="grid grid-cols-5 my-10">
                <p className='bg-slate-200 rounded-full w-max p-10 col-start-3 justify-self-center'>2023</p>
                <p className='col-span-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia enim amet expedita! Facilis, dolorem veritatis.</p>
            </div>
            
        </div>
    </div>
        {/* <Link to='form' smooth={true} duration={500} className='p-3 cursor-pointer text-center animate-bounce block'>x</Link> */}
        <Link to='form' smooth={true} duration ={500} className='animate-bounce text-slate-600 relative top-5  p-3 font-bold cursor-pointer block text-center'>{'V'}</Link>

    </div>
  )
}

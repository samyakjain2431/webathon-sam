import React from 'react'
// import { Link } from 'react-scroll'

export default function Form() {
  return (
    <div className='bg-yellow-100 h-screen  px-6 lg:px-16 flex flex-col ' id='form'>
        <div className="  max-w-[1200px] mx-auto">
            <h2 className=" my-20 text-2xl font-medium tracking-widest">FORM</h2>
            <div className="">
                <form action="" className='rounded-xl bg-white shadow-lg p-5 lg:w-[40rem]'>
                    <input type="text" name="name" id="name" placeholder='Name' className='p-2 w-full border-2 block my-2 rounded-lg ' />
                    <input type="email" name="email" id="email" placeholder='Email' className='p-2 w-full border-2 block my-2 rounded-lg ' />
                    <input type="tel" pattern='[0-9]{10}' name="name" id="phone" placeholder='Mobile No.' className='p-2 w-full border-2 block my-2 rounded-lg ' />
                    <textarea type="message" name="name" id="name" placeholder='Name' className='p-2 w-full border-2 block my-2 rounded-lg ' />
                    <button className=" block w-full p-3 bg-purple-600 rounded-full text-white ">Submit</button>
                </form>
            
            
            </div>
        </div>

    </div>
  )
}

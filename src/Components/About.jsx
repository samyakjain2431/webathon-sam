import React from 'react'
import { Link } from 'react-scroll'

export default function About() {
  return (
    <div className='  my-10 h-screen flex flex-col justify-evenly ' style={{overflow: 'hidden'}} id='about'>
        <div className='lg:flex gap-20 px-6 max-w-[1200px] mx-auto lg:px-16 justify-center items-center'>
            <div className=' w-[25rem] h-[25rem] rounded-full bg-black = shadow-lg' style={{ backgroundSize : 'cover',background : 'url("https://i.ibb.co/BNBBKXF/Images-2.jpg")'}}>
            {/* <img src="https://i.ibb.co/BNBBKXF/Images-2.jpg" className=' ' alt="" /> */}
            </div>
            <div className='lg:w-[50%]'>
                <h2 className='underline font-bold text-xl'>About Us</h2>
                <p className='my-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod facere inventore assumenda odio eveniet corporis vero culpa architecto sequi consequatur qui tenetur, consectetur ad omnis neque aperiam beatae veritatis unde perferendis deserunt dicta. Tempora molestiae ipsum, excepturi architecto sint tempore odio doloremque laborum totam eius placeat accusantium porro eum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus voluptas perferendis illo dolores ut sit, qui distinctio. Odio ut officia saepe magni eaque, omnis, inventore soluta, consequuntur culpa quod quibusdam?</p>
            </div>
        </div>
        {/* <Link to='testimonials' smooth={true} duration={500} className='block p-3 cursor-pointer hover:scale-125 hover:font-bold duration-200 text-center animate-bounce relative -top-20'>x</Link> */}
        <Link to='testimonials' smooth={true} duration ={500} className='animate-bounce text-slate-600   p-3 font-bold cursor-pointer block text-center'>{'V'}</Link>

    </div>
  )
}

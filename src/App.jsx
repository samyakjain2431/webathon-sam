import React from 'react'   
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import Form from './Components/Form'
import Testimonials from './Components/Testimonials'
import Navbar from './Components/Navbar'

export default function App() {
  return (
    <div>
      <Navbar/>
      
      <Hero/>
      <About/>
      <Testimonials/>
      <Form/>
    </div>
  )
}

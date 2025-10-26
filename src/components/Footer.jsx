import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='md:mx-10'>
      <div className='flex flex-col md:grid md:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left Section */}
        <div>
          <img src={assets.logo} alt="Prescripto Logo" className='w-32 mb-4' />
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat quia quasi itaque?
            Odio accusamus fugit asperiores eaque delectus sapiente exercitationem sed, fuga minus soluta! 
            Reprehenderit qui amet illum delectus?
          </p>
        </div>
        
        {/* Center Section */}
        <div>
          <h4 className='font-semibold mb-4 text-gray-800'>COMPANY</h4>
          <ul className='space-y-2'>
            <li><a href="#home" className='hover:text-blue-500'>Home</a></li>
            <li><a href="#about" className='hover:text-blue-500'>About Us</a></li>
            <li><a href="#contact" className='hover:text-blue-500'>Contact Us</a></li>
            <li><a href="#privacy" className='hover:text-blue-500'>Privacy Policy</a></li>
          </ul>
        </div>
        
        {/* Right Section */}
        <div>
          <h4 className='font-semibold mb-4 text-gray-800'>GET IN TOUCH</h4>
          <ul className='space-y-2'>
            <li><a href="tel:+9656196152" className='hover:text-blue-500'>9656196152</a></li>
            <li><a href="mailto:abc@gmail.com" className='hover:text-blue-500'>abc@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='border-t pt-4 text-center'>
        <p className='text-gray-600'>Copyright © 2024 GreatStack - All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

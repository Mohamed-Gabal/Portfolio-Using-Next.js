import Link from 'next/link';
import React from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {/* Text content */}
        <div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>Schedule a call with me to see if i can help</h1>
          <p className='text-gray-400 mt-6 text-base sm:text-lg'>Reach out to me today and let,s discuss how i can help you achieve your goals.</p>
          {/* Information */}
          <div className='mt-7'>
            <div className='flex items-center space-x-3 mb-4'>
              <BiPhone className='w-9 h-9 text-cyan-300'/>
              <p className='text-xl font-bold text-gray-400'>01001034941</p>
            </div>
            <div className='flex items-center space-x-3 mb-4'>
              <BiEnvelope className='w-9 h-9 text-cyan-300'/>
              <p className='text-xl font-bold text-gray-400'>abogabal672@gmail.com</p>
            </div>
            <div className='flex items-center space-x-3 mb-4'>
              <BiMap className='w-9 h-9 text-cyan-300'/>
              <p className='text-xl font-bold text-gray-400'>Egypt, Mansoura</p>
            </div>
          </div>
          {/* Social Media Icon */}
          <div className='flex items-center mt-8 space-x-3'>
            <Link href={'https://www.facebook.com/share/1AshzEf4u7/'} className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
            <FaFacebook className='text-white w-6 h-6'/>
            </Link>
            <Link href={'https://youtube.com/@pixel.code3?si=6wqAOJszjEXDiuj9'} className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-red-600 transition-all duration-300'>
            <FaYoutube className='text-white w-6 h-6'/>
            </Link>
            <Link href={'https://www.instagram.com/aifordevelopers?igsh=MWVremlzZmd1bWxjNA=='} className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
            <FaInstagram className='text-white w-6 h-6'/>
            </Link>
            <Link href={'https://github.com/Mohamed-Gabal'} className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
            <FaGithub className='text-white w-6 h-6'/>
            </Link>
          </div>
        </div>
        {/* Form */}
        <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='300' className='md:p-10 p.5 bg-[#131332] rounded-lg'>
          <input type='text' placeholder='Name' autoComplete='off' className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70' />
          <input type='email' placeholder='Email Address' autoComplete='off' className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70' />
          <input type='text' placeholder='Mobile Number' autoComplete='off' className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70' />
          <textarea placeholder='Your Message' autoComplete='off' className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem] resize-none'></textarea>
          <button className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full'>Send Message</button>
        </div>
      </div>
    </div> 
  )
}
export default Contact;
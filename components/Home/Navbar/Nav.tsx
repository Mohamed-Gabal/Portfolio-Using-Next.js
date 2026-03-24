'use client';

import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';

// Types For OpenNav
type Props = {
  openNav:() => void;
}
const Navbar = ({openNav}: Props) => {
  // State For Change Bg
  const [ navBg, setNavBg ] = useState(false);
  // Effect For Control ScrollY
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      };
      if (window.scrollY < 90) {
        setNavBg(false);
      };
    }
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <div className={`transition-all ${navBg ? 'bg-[#0f142ed9] shadow-md' : 'fixed'} duration-200 h-[12vh] z-[10000] fixed w-full`}>
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
            <FaCode className='w-5 h-5 text-black'/>
          </div>
          <Link href={'/'} className='text-xl hidden sm:block md:text-2xl text-white font-bold'>Gabal</Link>
        </div>
        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id} className='text-base hover:text-cyan-300 text-white font-medium transition-all duration-200'>
              <p>{link.label}</p>
              </Link>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* Cv Buttons */}
          <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2'>
            <BiDownload className='w-5 h-5'/>
            <span>Download Cv</span>
          </button>
           {/* Burger Menu */}
           <HiMiniBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer lg:hidden' />
        </div>
      </div>
    </div>
  )
}
export default Navbar;

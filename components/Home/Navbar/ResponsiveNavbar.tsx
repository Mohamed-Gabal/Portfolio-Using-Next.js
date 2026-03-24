'use client';

import { useState } from 'react'
import Nav from './Nav';
import MobileNavbar from './MobileNavbar';

const ResponsiveNavbar = () => {
  // State For Show Nav
  const [ showNav, setShowNav] = useState(false);
  // 
  const openNavHandler = () => {
    setShowNav(true);
  }
  const closeNavHandler = () => {
    setShowNav(false);
  }
  return (
    <div className='text-white'>
      <Nav openNav={openNavHandler}/>
      <MobileNavbar showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}
export default ResponsiveNavbar;

import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar__container'>
      <div className='navbar__logo'>
        <strong>felipe</strong>mathias
      </div>
      <div className='navbar__links'>
        <p><a href='#Curriculum'>curriculum</a></p>
        <p><a href='#Projects'>projects</a></p>
        <p><a href='#Blog'>blog</a></p>
      </div>
      <div className='navbar__menu-mobile'>
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
         {toggleMenu && (
           <div className='navbar__menu-mobile_links'>
              <p><a href='#Curriculum'>curriculum</a></p>
              <p><a href='#Projects'>projects</a></p>
              <p><a href='#Blog'>blog</a></p>
           </div>
         )}
      </div>
    </div>
  )
}

export default Navbar
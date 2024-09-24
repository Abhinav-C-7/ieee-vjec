import React from 'react'
import './navbar.css';
import menuIcon from '../../logos/menu.svg'
import DropDownMenu from './DropDownMenu';
import { useState } from 'react';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  function toggleMenu() {
    setOpenMenu((menuOpen) => !menuOpen)
  }


  return (
    <div className='navbar ml-[3%] mr-[3%]'>
      <nav >
        <ul className='flex justify-center mt-4 ' >

          <li className='hidden sm:inline-block'>Execom</li>
          <li className='hidden sm:inline-block'>Achievements</li>
          <li className='hidden sm:inline-block'>Gallery</li>
          <li className='hidden sm:inline-block'>Join IEEE</li>
          <li className='hidden sm:inline-block'>About</li>
        </ul>
        <img className="menulogo sm:hidden" src={menuIcon} onClick={toggleMenu} alt="" />
      </nav>
      {openMenu && <DropDownMenu />}
    </div>
  )
}

export default Navbar

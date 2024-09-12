import React from 'react'
import './navbar.css';
import menuIcon from '../../logos/menu.svg'
import DropDownMenu from './DropDownMenu';
import { useState } from 'react';
import ieeelogo1 from '../../logos/IEEE SB WHITE LOGO.png'
import ieeelogo2 from '../../logos/IEEE WHITE LOGO.png'
import line from '../../logos/line.png'


const Navbar = () => {

    const [openMenu,setOpenMenu] = useState(false)

    function toggleMenu()
    {
        setOpenMenu(!openMenu)
    }


  return (
    <div className='navbar ml-[3%] mr-[3%]'>  
      <nav >
      
        <ul className='flex justify-center mt-4 p-3' >
        
        <img className ='w-20 mr-4 sm:inline-block' src={ieeelogo2} alt="" />
        <img src={line} className='h-10 mt-[2.9%]' alt="" />
        <img className="w-16 ml-2" src={ieeelogo1} alt="" />

        
            <li className='hidden sm:inline-block'>Execom</li>
            <li className='hidden sm:inline-block'>Achievements</li>  
            <li className='hidden sm:inline-block'>Gallery</li>
            <li className='hidden sm:inline-block'>Join IEEE</li>
            <li className='hidden sm:inline-block'>About</li> 
            <img className="menulogo sm:hidden ml-40" src={menuIcon} onClick={toggleMenu} alt="" />
        </ul>
        
      </nav>
     {openMenu && <DropDownMenu/>}
    </div>
  )
}

export default Navbar

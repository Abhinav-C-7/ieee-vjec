import React from 'react';
import './dropdownmenu.css';

const DropDownMenu = ({ isOpen }) => {
  return (
    <div className={`bg-[#00629B] block sm:hidden rounded-br-lg rounded-bl-lg ${isOpen ? 'dropdown-menu open' : 'dropdown-menu closed'}`}>
      <ul className='flex flex-col w-full p-2'>
        <li className='text-center py-2'>Execom</li>
        <li className='text-center py-2'>Achievements</li>
        <li className='text-center py-2'>Gallery</li>
        <li className='text-center py-2'>Join IEEE</li>
        <li className='text-center py-2'>About</li>
      </ul>
    </div>
  );
};

export default DropDownMenu;


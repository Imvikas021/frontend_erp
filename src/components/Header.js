import React from 'react';
import './Header.css';
import {FaBars, FaTimes,FaSignOutAlt} from "react-icons/fa";
import heinrich from "../icons/heinrich.png";


function Header({open,toggleNavbar}) {
  return (
      <header className='header'>
        <div className='menu-btn' onClick={toggleNavbar}>
          {open ? <FaTimes size={25}/> : <FaBars size={25}/>}
        </div>
           <img src={heinrich} alt='heinrich logo' className='logo'/>
          <div className='search-container'>
          <button className= 'logout-btn'>
            <FaSignOutAlt size={25} />
          </button>
          </div>
      </header>
  );
}

export default Header;
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const NavbarMain = () => {
  return (
    <div className='navbarMain'>
        <div className='navbarMain1'>
            <span>PSN CLUB</span>
        </div>
        <div className='navbarMain2'>
            <div className='startNavBtns'>
              <a href="/">
                <img height={45} src="/psnIcon-sm.png" alt="Psn club logo" /> 
              </a>
            </div>
            
            <div className='centerNavBtns'>
              <a href='/'>Home</a>
              <a href='/ps5-accounts'>PS5 Accounts</a>
              <a href='/ps4-accounts'>PS4 Accounts</a>
              <a href='/all-accounts'>All Accounts</a>
              <a href='/other-services'>Other Services</a>
            </div>
            
            <div className='endNavBtns fixSpace'>
              <a href='/search'>
                <AiOutlineSearch size={25} />
              </a>
            </div>
        </div>
    </div>
  )
}

export default NavbarMain
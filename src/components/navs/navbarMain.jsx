import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

import { Link } from 'react-router-dom'

const NavbarMain = () => {
  return (
    <div className='navbarMain'>
        <div className='navbarMain1'>
            <span>PSN CLUB</span>
        </div>
        <div className='navbarMain1 navbarMain1Fix'>
            <span>PSN CLUB</span>
        </div>
        <div className='navbarMain2'>
            <div className='startNavBtns'>
              <a href="/">
                <img src="/psnIcon-sm.png" alt="Psn club logo" height={45} /> 
              </a>
            </div>
            
            <div className='centerNavBtns hidden-sm'>
              <Link className='centerNavBtnsA' to='/'>Home</Link>
              <Link className='centerNavBtnsA' to='/ps5-accounts'>PS5 Accounts</Link>
              <Link className='centerNavBtnsA' to='/ps4-accounts'>PS4 Accounts</Link>
              <Link className='centerNavBtnsA' to='/all-accounts'>All Accounts</Link>
              <Link className='centerNavBtnsA' to='/other-services'>Other Services</Link>
            </div>
            
            <div className='endNavBtns fixSpace'>
              <Link className='endNavBtnsA' to='/search'>
                <AiOutlineSearch size={25} />
              </Link>
            </div>
        </div>
    </div>
  )
}

export default NavbarMain
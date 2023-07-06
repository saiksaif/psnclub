import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

import { Link } from 'react-router-dom'

const NavbarMain = ({open: Open }) => {
  

  return (
    <div className='navbarMain'>
        <div className='navbarMain1'>
            <div>PSN CLUB</div>
        </div>
        <div className='navbarMain1 navbarMain1Fix'>
            <div>PSN CLUB</div>
        </div>
        <div className='navbarMain2'>
            <div className='startNavBtns'>
              <a href="/">
                <img src="/psnIcon-sm.png" alt="Psn club logo" height={45} /> 
              </a>
            </div>
            
            <div className='centerNavBtns hidden-sm'>
              <Link id='homeA' className={`centerNavBtnsA + ${'homeA' == Open ? "selectedNav" : ""}`} to='/'>Home</Link>
              <Link id='ps5A' className={`centerNavBtnsA + ${'ps5A' == Open ? "selectedNav" : ""}`} to='/ps5-accounts'>PS5 Accounts</Link>
              <Link id='ps4A' className={`centerNavBtnsA + ${'ps4A' == Open ? "selectedNav" : ""}`} to='/ps4-accounts'>PS4 Accounts</Link>
              <Link id='AllA' className={`centerNavBtnsA + ${'AllA' == Open ? "selectedNav" : ""}`} to='/all-accounts'>All Accounts</Link>
              <Link id='OthA' className={`centerNavBtnsA + ${'OthA' == Open ? "selectedNav" : ""}`} to='/other-services'>Other Services</Link>
            </div>
            
            <div className='endNavBtns fixSpace'>
              <Link id='SearA' className={`centerNavBtnsA + ${'SearA' == Open ? "selectedNav" : ""}`} to='/search'>
                <AiOutlineSearch size={25} />
              </Link>
            </div>
        </div>
    </div>
  )
}

export default NavbarMain
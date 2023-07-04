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
              <img height={45} src="/psnIcon-sm.png" alt="Psn club logo" />
            </div>
            
            <div className='centerNavBtns'>
              <button>Home</button>
              <button>PS5 Accounts</button>
              <button>PS4 Accounts</button>
              <button>All Accounts</button>
              <button>Other Services</button>
            </div>
            
            <div className='endNavBtns fixSpace'>
              <button>
                <AiOutlineSearch size={25} />
              </button>
            </div>
        </div>
    </div>
  )
}

export default NavbarMain
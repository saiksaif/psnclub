import React from 'react'
import NavbarMain from '../navs/navbarMain'
import HomeBody from './home/homeBody'
import FooterMain from '../navs/footerMain'

const Home = () => {
  return (
    <div className='homeMain'>
        <NavbarMain />

        <HomeBody />

        <FooterMain />
    </div>
  )
}

export default Home
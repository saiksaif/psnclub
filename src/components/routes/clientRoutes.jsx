import React from 'react'

import NavbarMain from '../navs/navbarMain'
import FooterMain from '../navs/footerMain'


const ClientRoutes = ({ component: Component, open: open }) => {
  return (
    <div>
        <NavbarMain open={open} />

        {Component}
        
        <FooterMain />
    </div>
  )
}

export default ClientRoutes
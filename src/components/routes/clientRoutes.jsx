import React from 'react'

import NavbarMain from '../navs/navbarMain'
import FooterMain from '../navs/footerMain'


const ClientRoutes = ({ component: Component }) => {
  return (
    <div>
        <NavbarMain />

        {Component}
        
        <FooterMain />
    </div>
  )
}

export default ClientRoutes
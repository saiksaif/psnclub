import React from 'react'

import { Link } from 'react-router-dom'

const FooterMain = () => {
  return (
    <footer>
        <div className='footerMain'>
            <div className="footerLogo">
              <img src="/psnIcon-sm.png" alt="" width={100} />
            </div>

            <div className="centerPagesFooter">
              <Link className='reactLinks' to="/ps5-accounts">PS5 Accounts</Link> &nbsp;&nbsp;&nbsp;&nbsp;
              <Link className='reactLinks' to="/ps4-accounts">PS4 Accounts</Link> &nbsp;&nbsp;&nbsp;&nbsp;
              <Link className='reactLinks' to="/all-accounts">All Accounts</Link> 
            </div>

            <ul className="lastLinksFooter hidden-sm">
              <li>03044302391</li>
              <li><br /></li>
              <li>Whatsapp Link</li>
            </ul>
        </div>
    </footer>
  )
}

export default FooterMain
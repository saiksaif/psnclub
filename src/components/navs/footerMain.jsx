import React from 'react'

import { Link } from 'react-router-dom'

const FooterMain = () => {
  return (
    <footer>
        <div className='footerMain'>
            <div className="footerLogo">
              <img src="/psnIcon-sm.png" alt="" width={120} />
            </div>

            <div className="centerPagesFooter">
              <Link to="/ps5-accounts">PS5 Accounts</Link>
              <Link to="/ps4-accounts">PS4 Accounts</Link>
              <Link to="/all-accounts">All Accounts</Link>
            </div>

            <ul className="lastLinksFooter">
              <li>03044302391</li>
              <li>Whatsapp Link</li>
            </ul>
        </div>
    </footer>
  )
}

export default FooterMain
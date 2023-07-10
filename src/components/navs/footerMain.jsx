import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { baseURL } from '../../utils/constant';

const FooterMain = () => {
  const mainURL = `${baseURL}/getAdminInfo`;
  const testDataUrl = 'https://raw.githubusercontent.com/saiksaif/psnclub/main/src/utils/testAccounts.json';
  const [adminDetails, setAdminDetails] = useState({    
    phone: 423513375,
    group: "https://chat.whatsapp.com/GJaY86gr18IAUgHBsGdD9P"
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(testDataUrl);
        const data = await response.json();

        const adminData = {
          phone: data.phoneNumber,
          group: data.w_Group
        };

        alert(adminData)
        setAdminDetails(adminData);
      } catch (error) {
        console.error('Error fetching account data:', error);
      }
    };

    fetchData();
  }, []);
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
import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from "react-icons/ai";
import { SidebarData } from '../data/sideBarData';

export default function Drawer({ children }) {
  return (
    <div className='adminDrawerMain'>
      <div className="dashMainLink">
        <Link to={'/admin-dashboard'} className={'adminPanelTop'}><AiIcons.AiFillHome className={'adminPanelTopIcon'} /> Admin Panel</Link>
      </div>

      <div className='adminDrawerChildern'>
        {children}
      </div>

      <br /> <hr />
      <div className='adminDrawerLinks'>

        {SidebarData.map((item, index) => (

          <div key={index} className={'adminDrawerInstance'}>
          
            <Link className='adminDrawerInstanceLink' to={item.path}>
              <span className='drawIcons'>{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          
          </div>
        
        ))}

      </div>
    </div>
  );
}

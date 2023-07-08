import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from '../data/sideBarData';

export default function Drawer({ children }) {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#2D4356', height: '100vh' }}>
      <div style={{ width: '100%', height: '10vh', backgroundColor: '#2D4356', display: 'flex', alignItems: 'center', paddingLeft: '2rem' }}>
        <div style={{ fontSize: '1.5rem', paddingTop:'1.5rem' }}>
          <FaIcons.FaBars />
        </div>
      </div>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ width: '20%', backgroundColor: '#2D4356' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ width: '80%', backgroundColor: '#DDE6ED', overflowY: 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

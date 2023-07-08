import React from 'react'
// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { useState } from "react";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "../data/sideBarData";



export default function SideNav({children}) {
    const [sidebar, setSidebar] = useState(false);
    
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="navbar">
            <FaIcons.FaBars onClick={showSidebar} />
        </div>
        <nav className={"nav-menu" }>
          <ul className="nav-menu-items" onClick={showSidebar}>
          
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* <Card/> */}
        </nav>
      </IconContext.Provider>
      {children}
      </>
  )
}

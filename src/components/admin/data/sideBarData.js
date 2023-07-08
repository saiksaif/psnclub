import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Manage Acounts",
    path: "/admin-accounts",
    icon: <IoIcons.IoMdPeople  />,
    cName: "nav-text"
  },
  {
    title: "Manage Purchases",
    path: "/admin-purchases",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Manage Details",
    path: "/admin-other-details",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  },
  {
    title: "Signout",
    path: "/",
    icon: <FaIcons.FaSignOutAlt />,
    cName: "nav-text"
  }
];

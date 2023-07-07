import React, { useState, useEffect } from 'react';
import List from './components/list';
import axios from 'axios';
import { baseURL } from './utils/constant';

import { Route, Routes } from 'react-router-dom';

import NavbarMain from './components/navs/navbarMain';
import FooterMain from './components/navs/footerMain';

import ClientRoutes from './components/routes/clientRoutes';
import AdminRoutes from './components/routes/adminRoutes';

// //////////////   Client Routes
import Ps5Account from './components/client/ps5Account';
import Ps4Account from './components/client/ps4Account';
import AllAccount from './components/client/allAccount';
import OtherService from './components/client/otherService';
import Search from './components/client/search';

//  /////////////   Admin Routes
import Login from './components/admin/login';
import Accounts from './components/admin/accounts'
import Purchases from './components/admin/purchases'
import OtherDetails from './components/admin/otherdetails'
// import Booking from './components/admin/booking'
import Dashboard from './components/admin/dasboard';

import Home from './components/client/home';

const App = () => {

  return (
    <main className='MainArea'>

      

      <Routes>
            <Route path='/' element={<ClientRoutes component={<Home />} open="homeA" />} />

            {/* If home or empty url then this */}

            <Route path='/ps5-accounts' element={<ClientRoutes component={<Ps5Account />} open="ps5A" />} />
            <Route path='/ps4-accounts' element={<ClientRoutes component={<Ps4Account />} open="ps4A" />} />
            <Route path='/all-accounts' element={<ClientRoutes component={<AllAccount />} open="AllA" />} />
            <Route path='/other-services' element={<ClientRoutes component={<OtherService />} open="OthA" />} />
            <Route path='/search' element={<ClientRoutes component={<Search />} open="SearA" />} />


            <Route path='/login' element={<AdminRoutes component={<Login />} />} />
            <Route path='/admin-accounts' element={<AdminRoutes component={<Accounts />} />} />
            <Route path='/admin-purchases' element={<AdminRoutes component={<Purchases />} />} />
            <Route path='/admin-other-details' element={<AdminRoutes component={<OtherDetails />} />} />
            {/* <Route path='/admin-booking' element={<AdminRoutes component={<Booking />} />} /> */}
            <Route path='/admin-dashboard' element={<AdminRoutes component={<Dashboard />} />} />
      </Routes>
      
      

    </main>
  );
};

export default App;

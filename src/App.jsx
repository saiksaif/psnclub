import React, { useState, useEffect } from 'react';
import List from './components/list';
import axios from 'axios';
import { baseURL } from './utils/constant';

import Home from './components/client/home';

import AllAccount from './components/client/allAccount';
import Ps4Account from './components/client/ps4Account';
import Ps5Account from './components/client/ps5Account';
import OtherService from './components/client/otherService';
import Search from './components/client/search';

import { Route, Routes } from 'react-router-dom'
const App = () => {

  return (
    <main className='MainArea'>


      <Routes>
            <Route path='/' element={<Home />} />

            {/* If home or empty url then this */}

            <Route path='/ps5-accounts' element={Ps5Account} />
            <Route path='/ps4-accounts' element={Ps4Account} />
            <Route path='/all-accounts' element={AllAccount} />
            <Route path='/other-services' element={OtherService} />
            <Route path='/search' element={Search} />
      </Routes>
      
    </main>
  );
};

export default App;

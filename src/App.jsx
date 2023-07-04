import React, { useState, useEffect } from 'react';
import List from './components/list';
import axios from 'axios';
import { baseURL } from './utils/constant';

import NavbarMain from './components/navs/navbarMain';

const App = () => {

  return (
    <main className='MainArea'>
      <NavbarMain />

      <span>PSN Club</span>

      
    </main>
  );
};

export default App;

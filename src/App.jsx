import React, { useState, useEffect } from 'react';
import List from './components/list';
import axios from 'axios';
import { baseURL } from './utils/constant';

import Home from './components/client/home';

const App = () => {

  return (
    <main className='MainArea'>
      <Home />
    </main>
  );
};

export default App;

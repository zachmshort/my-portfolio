import './App.css'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState, useEffect }  from 'react';
// import Nav from './components/NavTabs';

function App() {
  return (
    <body>
        <Outlet />
    </body>
    
  )
}

export default App
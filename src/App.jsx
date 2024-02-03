import './App.css'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState, useEffect }  from 'react';
// import Nav from './components/NavTabs';

function App() {
  const [showHomePage, setShowHomePage] = useState(true);

  useEffect(() => {
  }, []);

  const handleNavigate = () => {
    setShowHomePage(false);
  };

  return (
    <body>
      <div className="myName-Info">
      <h1 className="myName">Hi! I'm Zachary Short</h1>
      <p className="meDesc">I have a passion for UI/UX design, 3D modeling/animation, and video editing</p>
      </div>
        <ul className="ulHomePage">
          <li><Link to="/" className="link" onClick={handleNavigate}>Home</Link></li>
          <li><Link to="/Websites" className="link" onClick={handleNavigate}>Websites I've Built</Link></li>
          <li><Link to="/Models" className="link" onClick={handleNavigate}>3D Models I've Built</Link></li>
          <li><Link to="/Videos" className="link" onClick={handleNavigate}>Videos I've Edited</Link></li>
          <li><Link to="/Contact" className="link" onClick={handleNavigate}>Contact Me</Link></li>
          <li><Link to="/About"className="link" onClick={handleNavigate}>About Me</Link></li>
        </ul>
        <Outlet />
    </body>
    
  )
}

export default App
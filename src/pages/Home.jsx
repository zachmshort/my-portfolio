import { Link } from 'react-router-dom';
import React, { useState, useEffect }  from 'react';

export default function Home() {
  const [showHomePage, setShowHomePage] = useState(true);

  useEffect(() => {
  }, []);

  const handleNavigate = () => {
    setShowHomePage(false);
  };

    return (
      <>
      <div className="myName-Info">
      <h1 className="myName"><span className='hi'>Welcome,</span><span className='im'>My name is</span><span className='zacharyshort'>Zachary Short</span></h1>
      <p className="meDesc">UI/UX Design, 3D Modeling, & Video Editing</p>
      </div>
        <ul className="ulHomePage">
          <li><Link to="/" className="link" onClick={handleNavigate}>Home</Link></li>
          <li><Link to="/Websites" className="link" onClick={handleNavigate}>Websites I've Built</Link></li>
          <li><Link to="/Models" className="link" onClick={handleNavigate}>3D Models I've Built</Link></li>
          <li><Link to="/Videos" className="link" onClick={handleNavigate}>Videos I've Edited</Link></li>
          <li><Link to="/Contact" className="link" onClick={handleNavigate}>Contact Me</Link></li>
          <li><Link to="/About"className="link" onClick={handleNavigate}>About Me</Link></li>
        </ul>
        </>
    );
  }
  
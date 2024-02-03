import './App.css'
// import { Outlet } from 'react-router-dom';
// import Nav from './components/NavTabs';

function App() {
  
  return (
    <>
    <body style={homePageStyles.body}>
      <div className="myName-Info">
      <h1 className="myName">Hi! I'm Zachary Short</h1>
      <p className="meDesc">I have a passion for UI/UX design, 3D modeling/animation, and video editing</p>
      </div>
        <ul className="ulHomePage" style={homePageStyles.ulHomePage}>
          <li><Link to="/Websites" onClick={handleNavigate}>Websites I've Built</Link></li>
          <li><Link to="/Models" onClick={handleNavigate}>3D Models I've Built</Link></li>
          <li><Link to="/Videos" onClick={handleNavigate}>Videos I've Edited</Link></li>
          <li><Link to="/Contact" onClick={handleNavigate}>Contact Me</Link></li>
          <li><Link to="/About" onClick={handleNavigate}>About Me</Link></li>
        </ul>
    </body>
    {/* <Outlet /> */}
    </>
  )
}

export default App

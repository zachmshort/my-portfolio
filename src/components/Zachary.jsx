import React from 'react';
import { Link } from 'react-router-dom';

const Zachary = () => {
  const listItemStyle = {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '3rem',
    fontFamily: 'Cinzel', 
  };

  return (
    <li style={listItemStyle}>
      <Link to="/" style={linkStyle}>
        Zachary Short
      </Link>
    </li>
  );
};

export default Zachary;

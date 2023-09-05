import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Services from '../services/services';

const NavBar = () => {
  const navpages = [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'About',
      path: '/about',
      component: About,
    },
    {
      name: 'Services',
      path: '/services',
      component: Services,
    },
  ];

  const linkStyle = {
    color: 'blue',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '0 10px', // Added margin for spacing between links
  };

  return (
    <nav>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {navpages.map((page, index) => (
          <li key={index} style={{ display: 'inline' }}>
            <Link to={page.path} style={linkStyle}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

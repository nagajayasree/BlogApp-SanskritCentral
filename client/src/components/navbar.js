import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.png';

const navItems = [
  { name: 'Feeds', link: '/feeds' },
  { name: 'Videos', link: '/videos' },
  { name: 'Add a feed', link: '/add-feed' },
];

function Navbar() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '60px',
        position: 'fixed',
        justifyItems: 'center',
        gap: 40,
      }}
    >
      <Link to={'/'}>
        <img src={logo} alt="" width={'100px'} height={'100px'} />
      </Link>

      {navItems.map((item) => (
        <p key={item.name}>
          <NavLink
            id={item.name}
            to={`${item.link}`}
            style={({ isActive }) => {
              return {
                textDecoration: 'none',
                fontWeight: isActive ? 'bold' : '',
                fontSize: 18,
              };
            }}
          >
            {item.name}
          </NavLink>
        </p>
      ))}
    </div>
  );
}

export default Navbar;

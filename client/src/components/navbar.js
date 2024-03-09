import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

function Navbar() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 40,
        marginTop: '60px',
      }}
    >
      <Link to={'/'}>
        <img src={logo} alt="" width={'100px'} height={'100px'} />
      </Link>
      <p>
        <Link to={'/feeds'} style={{ textDecoration: 'none' }}>
          Feeds
        </Link>
      </p>
      <p>
        <Link to={'/videos'} style={{ textDecoration: 'none' }}>
          Videos
        </Link>
      </p>
      <p>
        <Link to={'/add-feed'} style={{ textDecoration: 'none' }}>
          Add a Feed
        </Link>
      </p>
    </div>
  );
}

export default Navbar;

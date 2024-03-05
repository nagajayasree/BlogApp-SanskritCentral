import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: '#A7A1D6',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'space-around',
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

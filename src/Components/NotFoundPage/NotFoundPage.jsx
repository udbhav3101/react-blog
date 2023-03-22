import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div
      className="not-found"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <span
        style={{
          fontSize: '1.3rem',
          margin: '20px',
          fontFamily: 'Fira Code',
          fontWeight: '200px',
        }}>
        Looks like you are lost 🧐
      </span>
      <button>
        {' '}
        <Link to="/" style={{ textDecoration: 'none' }}>
          Go Back
        </Link>
      </button>
      <img
        src="./images/error-404.png"
        alt="Error Page"
        style={{ width: '400', height: '500' }}
      />
    </div>
  );
};

export default NotFoundPage;

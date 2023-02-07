import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <header>
      <h1>login /register page</h1>
      <div>
        <Link to="/login">
          <button type="button">login</button>
        </Link>
        <Link to="/register">
          <button type="button">login</button>
        </Link>
      </div>
    </header>
  );
};

export default LandingPage;

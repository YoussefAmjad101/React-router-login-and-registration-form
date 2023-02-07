import React from 'react';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  return (
    <div>
      <h2>Sign in to us</h2>
      <form action="/home">
        <p>
          <label htmlFor="">Username or email address</label>
          <input type="text" />
        </p>
        <p>
          <label htmlFor="">Password</label>
          <input type="password" />
          <Link to="/forget-password">Forget password?</Link>
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/register">Create an account</Link>
        </p>
        <p>
          <Link to="/">Back to home page</Link>
        </p>
      </footer>
    </div>
  );
};

export default SignInPage;

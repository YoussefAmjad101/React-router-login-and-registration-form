import React from "react";
import {Link} from "react-router-dom";


const SignUpPage = () => {
  return (
    <div>
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form action="/home">
        <p>
          <label htmlFor="">Username</label>
          <input type="text" />
        </p>
        <p>
          <label htmlFor="">Email address</label>
          <input type="email" />
        </p>
        <p>
          <label htmlFor="">Password</label>
          <input type="password" />
        </p>
        <p>
          <input type="checkbox" /><span>I agree all statements in terms of of service</span>
        </p>
        <p>
          <button type="submit">Register</button>
        </p>
      </form>
      <footer>
      <p>
          <Link to="/">Back to home page</Link>
        </p>
      </footer>
    </div>
  );
}
export default SignUpPage;
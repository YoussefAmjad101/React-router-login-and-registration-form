import React from "react";
import {Link} from "react-router-dom";


const ForgetPasswordPage = () => {
  return (
    <div>
      <h2>Reset your password</h2>
      <h5>Enter your email and we will send you new password </h5>
      <form action="/page">
        <p>
          <label htmlFor="">Eamil address</label>
          <input type="email" />
        </p>
        <p>
          <button type="submit">Send password reset email</button>
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
}
export default ForgetPasswordPage;
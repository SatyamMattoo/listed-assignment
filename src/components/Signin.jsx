import React from "react";
import "../styles/app.css";

const Signin = ({ loginGoogle }) => {
  return (
    <div className="signin">
      <h1>Sign In</h1>
      <p>Sign In to your account</p>
      <div className="options">
        <button className="google" onClick={loginGoogle}>
          <img
            src="https://img.icons8.com/?size=512&id=V5cGWnc9R4xj&format=png"
            alt=""
            height={"15px"}
          />
          <p>Sign In with Google</p>
        </button>
        <button className="apple">
          <img
            src="https://img.icons8.com/?size=512&id=890&format=png"
            alt=""
            height={"15px"}
          />
          <p>Sign In with Apple</p>
        </button>
      </div>
      <form className="form">
        <p>Email address</p>
        <input type="text" placeholder="Enter your email" />
        <p>Password</p>
        <input type="password" placeholder="Enter your password" />
        <a href="/">Forgot Password?</a>
        <button className="submitBtn ">Sign In</button>
      </form>
      <p className="register">
        Don't have a account? <a href="/">Register here</a>
      </p>
    </div>
  );
};

export default Signin;

import React from "react";
import googleIcon from "./assets/icons/google.svg";
import facebookIcon from "./assets/icons/facebook.svg";
import appleIcon from "./assets/icons/apple.svg";

const Login: React.FC = () => {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
          alt="Spotify"
          className="logo"
        />

        <h1>Welcome back</h1>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <button className="primary">Continue</button>

        <p className="or">or</p>

        <button className="secondary">
          <img src={googleIcon} className="icon" />
          <span>Continue with Google</span>
        </button>

        <button className="secondary">
          <img src={facebookIcon} className="icon" />
          <span>Continue with Facebook</span>
        </button>

        <button className="secondary">
          <img src={appleIcon} className="icon" />
          <span>Continue with Apple</span>
        </button>

        <div className="signup">
  <p>Don't have an account?</p>
  <span>Sign up</span>
</div>

        <p className="footer">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </div>
  );
};

export default Login;
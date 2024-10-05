import { useState } from 'react';
import { assets } from '../../assets/assets';
import './LoginPopUp.css';

function LoginPopUp({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className='login-popup'>
      <form action="" className='login-form'>
        <div className="loginPopUpTitle">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currentState === 'Login' ? null : <input type="text" placeholder='Your name' required />}
          <input type="email" placeholder='Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button type="submit">{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <label>I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></label>
        </div>
        {currentState === 'Login' ? (
          <p>Don't have an account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Click here</span></p>
        )}
      </form>
    </div>
  );
}

export default LoginPopUp;

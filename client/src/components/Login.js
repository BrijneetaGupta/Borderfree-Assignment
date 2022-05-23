import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './Login.css';
import login_img from '../images/login.png'

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/signin', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email, password
      })
    });
    const data = await res.json();
    if (res.status === 400 || res.status === 422 || !data) {
      window.alert("Invalid Credential");
    } else {
      window.alert("Login Successful");
      navigate('/about');
    }
  }

  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src={login_img} alt="IMG" />
            </div>

            {/* <form className="login100-form validate-form"> */}
            <form method='POST' className='login100-form validate-form' id='register-form'>
              <span className="login100-form-title">
                Member Login
              </span>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                {/* <input className="input100" type="text" name="email" placeholder="Email" /> */}
                <input className="input100" type='text' name='email' id='email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Password is required">
                {/* <input className="input100" type="password" name="pass" placeholder="Password" /> */}
                <input  className="input100" type='password' name='password' id='password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
              </div>

              <div className="container-login100-form-btn">
                {/* <button className="login100-form-btn">
                  Login
                </button> */}
                <input type='submit' name='signin' id='signin' className='login100-form-btn' value='Login In' onClick={loginUser} />
              </div>

              <div className="text-center p-t-70">
                {/* <a className="txt2" href="#">
                  Create your Account
                  <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </a> */}
                <NavLink to='/signup' className='txt2'>Create an account <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i></NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

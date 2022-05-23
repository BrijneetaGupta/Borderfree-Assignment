import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css';
import login_img from '../images/login.png'

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ name: '', email: '', phone: '', work: '', password: '', cpassword: '' });

  let name, value;
  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });
    const data = await res.json();
    // console.log(data);

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate('/login');
    }
  }


  return (
    <>
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
              <img src={login_img} alt="IMG" />
            </div>

            <form method="POST" className='login100-form validate-form' id='register-form'>
              <span class="login100-form-title">
                New Registration
              </span>

              <div class="wrap-input100 validate-input" data-validate="Name is required">
                <input class="input100" type='text' name='name' id='name' autoComplete='off' value={user.name} onChange={handleInputs} placeholder='Enter your name' />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input class="input100" type='text' name='email' id='email' autoComplete='off' value={user.email} onChange={handleInputs} placeholder='Enter your email' />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input class="input100" type='number' name='phone' id='phone' autoComplete='off' value={user.phone} onChange={handleInputs} placeholder='Enter your phone no' />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input class="input100" type='text' name='work' id='work' autoComplete='off' value={user.work} onChange={handleInputs} placeholder='Enter your profession' />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input" data-validate="Password is required">
                <input class="input100" type='password' name='password' id='password' autoComplete='off' value={user.password} onChange={handleInputs} placeholder='Enter new password' />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input" data-validate="Password is required">
                <input class="input100" type='password' name='cpassword' id='cpassword' autoComplete='off' value={user.cpassword} onChange={handleInputs} placeholder='Reenter new password' />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div class="container-login100-form-btn">
                <input type='submit' name='signup' id='signup' className='login100-form-btn' value='Register' onClick={PostData} />
              </div>

              <div class="text-center p-t-70">
                <NavLink to='/login' className='txt-2'>I am already registered  <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i></NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

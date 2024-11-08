import React, { useEffect, useState } from 'react'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "./login.scss"
import LockIcon from '@mui/icons-material/Lock';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../../redux/user/userSlice.js';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

function LoginSignup() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const {loading1,error:errorMessage1}=useSelector(state=>state.user);
  const handleSignIn = async (e) => {
    e.preventDefault();
  
    console.log(formData);
    if (!formData.username || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
     
      dispatch(signInStart());
      const res = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      localStorage.setItem("token", data.token);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data.rest));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!formData.username || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        onClickSignIn();
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };


  let container;
  useEffect(() => {
    container = document.getElementsByClassName("login-container")[0];
  })
  const onClickSignUp = () => {
    container.classList.add("sign-up-mode");
  }
  const onClickSignIn = () => {
    container.classList.remove("sign-up-mode");
  }
  return (
    <div className="login-container">
      
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSignIn} action="" className="sign-in-form">
            <h2 className="login-title font-semibold">Sign in</h2>
            <div className="login-input-field">
              <PersonIcon/>
              <input type="text"   style={{ width: "80%" }} id="username" onChange={handleChange} placeholder='Username' />
            </div>
            <div className="login-input-field">
              <LockIcon/>
              <input type="password" id='password'
                onChange={handleChange}  placeholder='Password' />
            </div>
          
              
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
             
              className='my-2 w-[30%]'
              disabled={loading1 && !errorMessage1}
            >
              {loading1 && !errorMessage1? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
            </Button>

           
            {errorMessage1 && (
            <Alert className='mt-5' color='failure'>
              {errorMessage1}
            </Alert>
          )}

        
          </form>
          <form onSubmit={handleSignUp} action="" className="sign-up-form">
            <h2 className="login-title font-semibold">Sign up</h2>
            
            <div className="login-input-field">
              <PersonIcon/>
              <input type="text"   style={{ width: "80%" }} id="username" onChange={handleChange} placeholder='Username' />
            </div>
            <div className="login-input-field">
              <LockIcon/>
              <input type='password'
                placeholder='**********'
                id='password'
                style={{ width: "80%"}}
                
                onChange={handleChange} />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              className='my-2 w-[30%]'
              disabled={loading && !errorMessage}
            >
              {loading && !errorMessage? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
            </Button>

            
            {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
            
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="login-content">
            <h3>New here ?</h3>
            <p>Join our community for an enhanced shopping experience. Fill in the details below to get started.</p>
            <button className="login-btn transparent" id='sign-up-btn' onClick={onClickSignUp}>Sign up</button>
          </div>

         
        </div>

        <div className="panel right-panel">
          <div className="login-content">
            <h3>One of us ?</h3>
            <p>Welcome Back! Sign In to Your Account
Please enter your email address and password to continue shopping with us.</p>
            <button className="login-btn transparent" id='sign-in-btn' onClick={onClickSignIn}>Sign in</button>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
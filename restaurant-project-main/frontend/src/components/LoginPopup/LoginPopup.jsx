import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from "axios"

const LoginPopup = ({ setShowLogin }) => {
  const {url} = useContext(StoreContext)
  const [currState, setCurrState] = useState("Sign Up");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async(event)=>{
    event.preventDefault();
    let newUrl = url;
    if(currState==="Login"){
      newUrl+="/api/user/login"
    }
    else{
      newUrl +="/api/user/register"
    } 
    
    const response = await axios.post(newUrl,data);
    if(response.data.success){
      
    }

  }


  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Your name" />}
          <input name = 'email' onChnange={onChnageHandler} value={data.email} type="email" placeholder="Your email" />
          <input name = 'password' onChnange={onChnageHandler} value={data.password} type="password" placeholder="Password" />
        </div>
        <button>{currState === "Login" ? "Login" : "Create account"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" id="terms" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Don't have an account? <span onClick={() => setCurrState('Sign Up')}>Sign up here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;

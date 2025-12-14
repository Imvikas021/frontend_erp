import React, { useState } from "react";
import "./Login.css";
import {  useNavigate } from "react-router-dom";
import background from "./background.png";
import axios from "axios";

function LOGIN() {

    const [user_name, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault(); 
       
      try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`,{
          user_name,
          password,
        },{
          headers: {
            "Device-Info": navigator.userAgent
          }
        });

        if (res.data.token){

          localStorage.setItem("token", res.data.token);

          axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;

          alert("Login successful");
          navigate("/");
        }else {
          alert("Login fail")
        }
      } catch (err){
        console.error("Login error:", err.response?.data || err.message);
        if (err.response && err.response.status === 401){
          alert("Incorrect username or password");
        } else {
          alert("Server error ! please try again")
        }
      }
  };
  return (
    <div className="premium-bg">
      <div className="premium-container">
        {/* Branding Panel */}
        <div className="premium-left">
          <a id="link" href="https://www.heinrichlimited.com/services" target="-blank" rel="noopner noreferrer">
          <div className="logo-big">H</div>
          </a>
          <h1 className="brand-main">HEINRICH ERP</h1>
          <p className="brand-tag">
            Project Cost Center 
            • Cost Sheet 
            • EPS Estimation 
            • Work Status Report 
            • Performance Review </p>
          <div className="social-icons">
            <img src={background} alt="background img" className="background-img"/>
          </div>
        </div>
        {/* Login Card */}
        <div className="premium-card">
          <h2 className="card-title">Welcome </h2>
          <p className="card-sub">Login to continue to Heinrich ERP</p>

          <form onSubmit={handleLogin} className="form">
            <label className="input-label">Username
              <input
                value={user_name} onChange={(e)=> setUsername (e.target.value)}
                type="text"
                className="input premium-input"
                placeholder="Enter username"
                required
              />
            </label>
            <label className="input-label">Password
              <div className="password-wrapper">
                <input
                   value={password} onChange={(e)=> setPassword (e.target.value)}
                  type="password"
                  className="input premium-input"
                  placeholder="Enter password"
                  required
                />
              </div>
            </label>
            
            <div className="remember-forgot">
              <label><input type="checkbox" /> Remember me</label>
            </div>

            <button className="premium-btn" type="submit">
                Log In
            </button>

            <div className="links">
              <a href="#signup">Sign up</a>
              <span>|</span>
              <a href="#admin">Admin login</a>
            </div>
          </form>
          <div className="mobile-footer">
          </div>
          <div className="social-icons">
         </div>
      </div>
        <img src={background} alt="background img" className="footer-img"/>
      </div>
      <div className="premium-footer">© {new Date().getFullYear()} Heinrich • All rights reserved</div>
    </div>
  );
}
export default LOGIN;
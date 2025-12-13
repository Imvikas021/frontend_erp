import React,{useState} from 'react';
import "./LoginPage.css"
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "Admin" && password === "admin123") {
            localStorage.setItem("token", "admin-token");
            alert ("Admin Login Successfully!");
            navigate("/");
        } else if (username === "Vikas" && password === "vikas123") {
            localStorage.setItem("token", "user-token");
            navigate("/");
            alert("User Login Successfully");
        } else
            alert("Invalid Username or Password");
    };
  return (
    <div className='login-page'>
        <div className='login-container'>
            <div className='login-box'>
                <h1>HEINRICH</h1>
                <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>User Name</label>
                <input type='text' value={username} onChange={(e)=> setUsername (e.target.value)}
                placeholder='Enter Username' required/>
                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Password' required/>
                <button id="login-btn" type='submit'>Login</button>
            </form>
            </div>
         </div>
    </div>
  )
}

export default LoginPage;
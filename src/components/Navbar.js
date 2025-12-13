import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import axios from "axios";
function Navbar ({ isOpen, closeNavbar}) {
      const handleLogout =() => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
      };
        return<>
        <div className={`navbar ${isOpen ? "open" : ""}`}>
        <nav className='sidebar'>
                <li id="logoicon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="43px" viewBox="0 -960 960 960" width="43px" fill="#149a9b"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm120 480h80v-160h160v160h80v-400h-80v160H400v-160h-80v400Z"/></svg>
                </li>
               <Link to="/" onClick={closeNavbar}>
                <li className ="active">
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000ff"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                    </button>
                        <span id="navname">Home</span>
                </li>
                </Link>
                <Link to="/Project" onClick={closeNavbar}>
                <li className ="active">
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M160-640h640v-80H160v80Zm-80-80q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v240H160v240h164v80H160q-33 0-56.5-23.5T80-240v-480ZM598-80 428-250l56-56 114 112 226-226 56 58L598-80ZM160-720v480-180 113-413Z"/></svg>
                    </button>
                        <span id="navname">Project</span>
                </li>
                </Link>
                <Link to="/Email" onClick={closeNavbar}>
                <li className ="active">
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000ff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                    </button>
                        <span id="navname">Email</span>
                </li>
                </Link>
                <Link to="/Task" onClick={closeNavbar}>
                <li className ="active">
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000ff"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q32 0 62-6t58-17l60 61q-41 20-86 31t-94 11Zm280-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM424-296 254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>
                    </button>
                        <span id="navname">Task</span>
                </li>
                </Link>
                <Link to="/Logout" onClick={closeNavbar}>
                <li className ="active">
                    <button className="btn" onClick={handleLogout}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                    </button>
                        <span id="navname">Logout</span>
                </li>
                </Link>
        </nav>
        </div>
        </>;
     };
 
export default Navbar;
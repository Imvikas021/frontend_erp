import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
function Home (){ 
        return<>
        <div className='home-container' >
             <div className='logohome'>
                 <h2>Home</h2>
             </div> 
             <hr></hr>
         <div className='container'>
            <Link to='/Project/List' id='link'>
            <button className='box'>
            <div>
                <h3>Project</h3>
            </div>
            </button>
            </Link>
            <button className ='box'>
            <div>
                <h3>My work</h3>
            </div>
            </button>
            <button className ='box'>
            <div>
                <h3>Assigned to me</h3>
            </div>
            </button>
            <button className ='box'>
            <div>
                <h3>Agenda</h3>
            </div>
            </button>
             <Link to='/List'>
            <button className='box'>
            <div>
                <h3>Project</h3>
            </div>
            </button>
            </Link>
            <button className ='box'>
            <div>
                <h3>My work</h3>
            </div>
            </button>
            <button className ='box'>
            <div>
                <h3>Assigned to me</h3>
            </div>
            </button>
            <button className ='box'>
            <div>
                <h3>Agenda</h3>
            </div>
            </button>
             <Link to='/List'>
            <button className='box'>
            <div>
                <h3>Project</h3>
            </div>
            </button>
            </Link>
            <button className ='box'>
            <div>
                <h3>My work</h3>
            </div>
            </button>
            <button className ='box'>
            <div>
                <h3>Assigned to me</h3>
            </div>
            </button>
            <button className ='box'>
            <div>
                <h3>Agenda</h3>
            </div>
            </button> 
          </div >
        </div>
        </>
    }
 
export default Home;
import React, { useState} from 'react';
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import Navbar from'./components/Navbar';
import Home from './components/pages/Home';
import Header from './components/Header';
import List from './components/pages/List';
import './App.css';
import Costing from './components/pages/Costing';
import Productlist from './components/pages/Productlist';
import Createlist from './components/pages/Createlist'
import Emailsend from './components/pages/Emailsend';
import Task1 from './components/pages/Task1';
import Listtask from './components/pages/Listtask';
import Costingname from './components/pages/Costingname';
import Thingstodo from './components/pages/Thingstodo';
import Thingstodone from './components/pages/Thingstodone';
import LOGIN from './components/pages/LOGIN';
import EmailLayout from './components/pages/EmailLayout';
import TaskLayout from './components/pages/TaskLayout';
import Projectcreate from './components/pages/Projectcreate';
import ProjectLayout from './components/pages/ProjectLayout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] =useState(false);
  const toggleNavbar = () => { 
    setIsNavbarOpen(!isNavbarOpen);
  };
  const closeNavbar = () =>{
    setIsNavbarOpen(false);
  };

  return (
    <React.Fragment>
      <Router>
        <Header  open={isNavbarOpen} toggleNavbar={toggleNavbar}/>
        <Navbar isOpen = {isNavbarOpen} closeNavbar={closeNavbar}/>
        <main className={`main-content ${isNavbarOpen ? "blur" : ""}`}>
          <Routes>
            <Route path='/login' element={<LOGIN/>}/>
            <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
             <Route path='/Project' element={<ProtectedRoute><ProjectLayout/></ProtectedRoute>}>
              <Route index element={<List/>}/>
              <Route path='List' element={<List/>}/>
              <Route path='Projectcreate' element={<Projectcreate/>}/>
             </Route>
             <Route path='/email' element={<ProtectedRoute><EmailLayout/></ProtectedRoute>}>
              <Route index element={<Emailsend/>}/>
              <Route path='emailsend' element={<Emailsend/>}/>
              <Route path='costingname' element={<Costingname/>}/>
              <Route path='costing' element={<Costing/>}/>
              <Route path='productlist' element={<Productlist/>}/>
              <Route path='createlist' element={<Createlist/>}/>
             </Route>
             <Route path='/task' element={<ProtectedRoute><TaskLayout/></ProtectedRoute>}>
              <Route index element={<Thingstodone/>}/>
              <Route path='thingstodo' element={<Thingstodo/>}/>
              <Route path='thingstodone' element={<Thingstodone/>}/>
              <Route path='listtask' element={<Listtask/>}/>
              <Route path='task1' element={<Task1/>}/>   
             </Route>
             <Route path='*' element={<Navigate to='/' replace />}/>
          </Routes>
        </main>
      </Router>
    </React.Fragment>
  );
};
export default App;

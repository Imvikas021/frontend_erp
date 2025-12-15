import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Thingstodo.css'
import {addthingstodo} from '../../api/thingstodoAPI';

const Thingstodo = () => {
  const [thingsformData, setthingsformData] = useState({
    project_name: "",
    work_details: "",
    work_date: "",
    work_time: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setthingsformData({
      ...thingsformData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      try{
        await addthingstodo(thingsformData);
        alert("Things added successfully");
        navigate("/thingstodone");
      } catch (err){
        console.log(err);
        alert("error adding Things");
      }
    };
  return (
  <div className=' things-todo'>
    <form onSubmit={handleSubmit} className='things-todo-form'>
      <label>Project Name</label>
      <input type='text'  name='project_name'placeholder='Project Name' onChange={handleChange}/>
      <label>Work Details</label>
      <input type='text'  name='work_details' placeholder='Work Details' onChange={handleChange}/>
      <label>Work Date</label>
      <input type='date' name='work_date' placeholder='Work Date' onChange={handleChange}/>
      <label>Work Time (in Hr))</label>
      <input type='int' name='work_time' placeholder='Work Time' onChange={handleChange}/>
      <div> 
        <button type='submit' id='submit' name='button'>Add</button>
      </div>
    </form>
    </div>
  )
}

export default Thingstodo;
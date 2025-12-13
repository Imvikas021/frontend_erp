import React,{useState} from 'react';
import './Task1.css'
import { useNavigate } from 'react-router-dom';
import {addTask1} from '../../api/taskAPI';


function Task(){ 
    const [taskformData, settaskformData] = useState({
    project_name: "",
    wrok: "",
    assign_to: "",
    target_date:"",
    remark: "",
    status: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    settaskformData({
      ...taskformData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();

    try{
      await addTask1(taskformData);
      alert("Task added successfully");
      navigate("/listtask");
    } catch (err){
      console.log(err);
      alert("error adding Task");
    }
  };
  return(
      <div className='task'>
        <form action="#" className='task-form' method="post" onSubmit={handleSubmit}>
            <label htmlFor="name">Project Name</label>
            <input type="text"  name="project_name" placeholder='Project Name' onChange={handleChange}/>
            <label htmlFor="name">Work</label>
            <input type="text" name="work" placeholder='Work' onChange={handleChange}/>
            <label htmlFor="name">Assign To</label>
            <input type="text"  name="assign_to" placeholder='Assign To' onChange={handleChange}/>
            <label htmlFor="name">Target Date</label>
            <input type="date"  name="target_date" placeholder='Choose Date' onChange={handleChange}/>
            <label htmlFor="name">Remark</label>
            <textarea type="text" id='remark' placeholder='Remark' name="remark" rows="4" cols="50" onChange={handleChange}></textarea>
           <div className='remark'>
            <label htmlFor="name">Status</label>
            <select name='status' onChange={handleChange}>
             <option value="pending">Pending</option>
              <option value="inProgress">In Progress</option>
               <option value="complete">Complete</option>
               </select>
           </div>
           <button id='submit' type='submit'>Submit</button>
        </form>
      </div>
  )
}
 
export default Task;
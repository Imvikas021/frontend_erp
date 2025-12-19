import React,{useState} from 'react';
import './Projectcreate.css';
import { useNavigate } from 'react-router-dom';
import {addProject} from '../../api/projectAPI';


function Projectcreate() {
    const [formData, setFormData] = useState({
        project_name: "",
        customer_name: "",
        location: "",
        mobile_no: "",
        mail_id: "",
        company_name: "",
        order_date:"",
        costing_date:"",
        costing_assign_to: "",
        status: "",
        remark: ""
    });

  const [lastEntry] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await addProject(formData);
      alert("project added successfully");
      navigate("/list");
    } catch (err){
      console.log(err);
      alert("error adding project");
    }
  };
  return (
    <>
    <div className='projectcreate'>
         <form action="#" className='projectcreate-form' method="post" onSubmit={handleSubmit}>
          <div className='div1'>
            <label>Project Name</label>
            <input type="text" id="name" name="project_name" placeholder='Enter Project Name' onChange={handleChange}/>
          </div>
          <div className='div1'>
            <label>Customer Name</label>
            <input type="text" id="name" name="customer_name" placeholder='Customer Name' onChange={handleChange}/>
          </div>
          <div className='div1'>
            <label >Location</label>
            <input type="text" id="name" name="location" placeholder='Location' onChange={handleChange}/>
          </div>
          <div className='div1'>
            <label>Phone Number</label>
            <input type="tel" id="name" name="mobile_no" placeholder='Phone Number' onChange={handleChange}/>
          </div>
          <div className='div1'> 
            <label>Mail Id</label>
            <input type="email" id="name" name="mail_id" placeholder=' Enter Your Mail Id' onChange={handleChange}/>
          </div>
          <div className='div1'>
            <label >Company Name</label>
            <input type="text" id="name" name="company_name" placeholder='Company Name' onChange={handleChange}/>
          </div>
          <div className='div1'> 
            <label>Order Date</label>
            <input type="date" id="name" name="order_date" placeholder='' onChange={handleChange}/>
          </div>
          <div className='div1'> 
            <label >Costing Date</label>
            <input type="date" id='name' name='costing_date' placeholder='' onChange={handleChange}/>
          </div>
          <div className='div1'>
            <label>Costing Assign TO</label>
            <select type="text" id="name" name="costing_assign_to" placeholder='Costing Assign To' onChange={handleChange}>
              <option value='AFSAR'>AFSAR</option>
              <option value='FARMAN'>FARMAN</option>
              <option value='FAISAL'>FAISAL</option>
              </select>
          </div>
          <div className='div1'>  
            <label>Remark</label>
            <textarea type="text" id="name" name="remark" rows="4" cols="50" onChange={handleChange}/>
          </div>
          <div className='div1'> 
           <label>Status</label>
           <select name='status' onChange={handleChange}>
            <option value="pending">PENDING</option>
              <option value="in progress"> IN PROGRESS</option>
                <option value="completed">COMPLETED</option>
           </select>
           </div>
          <div className='div1'>
          <button id='submit' type='submit'>Submit</button>
          </div>
        </form>
      </div>
      <div>
      <hr className='underline'></hr>
      </div>
         <table className='table2'>
          <thead>
            <tr className='table2-heading'>
                <th>Project Name</th>
                <th>Customer Name</th>
                <th>Location</th>
                <th>Phone Number</th>
                <th>Mail ID</th>
                <th>Company Name</th>
                <th>Order Date</th>
                <th>Costing Date</th>
                <th>Costing Assign To</th>
                <th>Remark</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
              {lastEntry && (
            <tr className='table2-content'>
                <td>{lastEntry.project_name}</td>
                <td>{lastEntry.customer_name}</td>
                <td>{lastEntry.location}</td>
                <td>{lastEntry.mobile_no}</td>
                <td>{lastEntry.mail_id}</td>
                <td>{lastEntry.company_name}</td>
                <td>{lastEntry.order_date}</td>
                <td>{lastEntry.costing_date}</td>
                <td>{lastEntry.costing_assign_to}</td>
                <td>{lastEntry.remark}</td>
                <td>{lastEntry.status}</td>
            </tr>
            )}
            </tbody>
         </table>
    </>
  );
};

export default Projectcreate;
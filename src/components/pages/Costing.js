import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Costing.css';
import {addCosting} from '../../api/costingAPI';

function Costing() {
  const [costingformData, setcostingformData] = useState({
    costing_name: "",
    costing: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setcostingformData({
      ...costingformData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();

    try{
      await addCosting(costingformData);
      alert("costing added successfully");
      navigate("/costingname");
    } catch (err){
      console.log(err);
      alert("error adding costing");
    }
  };
  return (
    <div className='costing'>
      <form className='costing-form' onSubmit={handleSubmit}>
        <label>Costing Name</label>
        <input type='text' name='costing_name' onChange={handleChange}/>
        <label>Costing</label>
        <input type='text' name='costing' onChange={handleChange}/>
          <label>Costing</label>
        <input type='text' name='costing' onChange={handleChange}/>
          <label>Costing</label>
        <input type='text' name='costing' onChange={handleChange}/>
          <label>Costing</label>
        <input type='text' name='costing' onChange={handleChange}/>
          <label>Costing</label>
        <input type='text' name='costing' onChange={handleChange}/>
          <label>Costing</label>
        <input type='text' name='costing' onChange={handleChange}/>
          <label>Costing</label>
        <input type='text' name='costing' onChange={handleChange}/>
          <button id='submit' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Costing;
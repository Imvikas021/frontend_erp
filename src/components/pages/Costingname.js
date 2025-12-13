import React,{useEffect,useState} from 'react';
import './Costingname.css'

function Costingname() {
   const [costing, setCosting] = useState([]);

      useEffect(() => {
        fetch ("http://192.168.1.6:3001/costing")
        .then(res => res.json())
        .then(data => setCosting(data))
        .catch (err => console.error(err));
       }, []);
  return (
    <div className='costing-table'>
      <table className='table3'>
        <thead className='table3-heading'>
          <tr >
          <th>Costing Name</th>
          <th>Costing</th>
          </tr>
        </thead>
        <tbody className='table3-content'>
          {costing.map((item,index)=>(
          <tr key={index}>
          <td>{item.costing_name}</td>
          <td>{item.costing}</td>
          </tr>
          ))}
        </tbody>
      </table>
        
    </div>
  )
}

export default Costingname;
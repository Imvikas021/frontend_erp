import React, {useState,useEffect} from 'react';
import './Thingstodone.css';


function Thingstodone() {
      const [things, setThings] = useState([]);
   
       useEffect(() => {
                   fetch (`${process.env.REACT_APP_API_URL}/api/thingstodo`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
     })
                .then(res => res.json())
                .then(data => setThings(data))
                .catch (err => console.error(err));
               }, []);
  return (
    <div className='table6-wrapper'>
         <table className='table6'>
            <thead className='table6-heading'>
                  <tr>
                    <th>Project Name</th>
                    <th>Work Details</th>
                    <th>Work Date</th>
                    <th>Work Time (Hr)</th>
                  </tr>
            </thead>
            <tbody className='table6-content'>
              {things.map((item,index)=>(
              <tr key={index}>
                 <td>{item.project_name}</td>
                 <td>{item.work_details}</td>
                 <td>{new Date(item.work_date).toLocaleDateString()}</td>
                 <td>{item.work_time}</td>
              </tr>
                ))}
            </tbody>
        </table>
      </div>
  )
}

export default Thingstodone;
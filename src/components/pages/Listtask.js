import React,{useState,useEffect} from 'react';
import './Listtask.css';

function Listtask() {
  const [task, setTask] = useState([]);
  
        useEffect(() => {
             fetch (`${process.env.REACT_APP_API_URL}/api/task1`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
     })
          .then(res => res.json())
          .then(data => setTask(data))
          .catch (err => console.error(err));
         }, []);
  return (
    <div className='listtask-table'>
        <table className='table5'>
          <thead>
            <tr className='table5-heading'>
                <th>Project Name</th>
                <th>Work</th>
                <th>Assign to</th>
                <th>Sub Assign to</th>
                <th>Assign by</th>
                <th>Assign Date</th>
                <th>Target Date</th>
                <th>Expiry Date</th>
                <th>Extension Date</th>
                <th>Extension By</th>
                <th>Extension Reason</th>
                <th>Complete Date</th>
                <th>Status</th>
                <th>Remark</th>
            </tr>
            </thead>
            <tbody>
              {task.map((item,index)=>(
            <tr key={item.id || index} className='table5-content'>
                <td>{item.project_name}</td>
                <td>{item.work}</td>
                <td>{item.assign_to}</td>
                <td>{item.subassignTo}</td>
                <td>{item.assignBy}</td>
                <td>{item.assignDate}</td>
                <td>{new Date(item.target_date).toLocaleDateString()}</td>
                <td>{item.expiryDate}</td>
                <td>{item.extensionDate}</td>
                <td>{item.extensionBy}</td>
                <td>{item.extensionReason}</td>
                <td>{item.completeDate}</td>
                <td>{item.status}</td>
                <td>{item.remark}</td>
            </tr>
            ))}
            </tbody>
        </table>

    </div>
  )
}

export default Listtask;
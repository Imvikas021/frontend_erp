import React, { useState,useEffect } from 'react';
import './List.css';
import Exportexcelbtn from '../Exportexcelbtn';

const List = () => {
  const [project, setProject] = useState([]);

   useEffect(() => {
           fetch (`${process.env.REACT_APP_API_URL}/api/project`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
     })
        .then(res => res.json())
        .then(data => setProject(data))
        .catch (err => console.error(err));
       }, []);
  return (
    <>
      <div className='project1table-btn'>
        <button className='project1table1-allbtn'>
          <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#000000"><path d="M482-80q-57 0-101-36t-55-92q-53 17-107-2t-83-66q-30-48-22-106.5t52-97.5q-42-38-50.5-94T134-678q27-48 81.5-69.5T324-752q11-56 55-92t101-36q57 0 101 36t55 92q56-17 108.5 3t81.5 71q27 50 19.5 104.5T794-480q44 39 52.5 96.5T828-276q-29 51-81.5 68T638-208q-11 56-55 92T482-80Zm0-80q47 0 70.5-40.5T552-280l-28-46q-11 3-21 4.5t-21 1.5q-10 0-20.5-1.5T440-326l-28 46q-24 39-.5 79.5T482-160ZM202-320q24 41 70.5 41t69.5-41l26-46q-8-8-15-17t-12-19q-5-9-9-18.5t-7-19.5h-53q-47 0-70 39.5t0 80.5Zm416 0q23 41 69.5 41t70.5-41q23-41 0-80.5T688-440h-53q-2 10-6.5 19.5T619-402q-5 10-12 19t-15 17l26 46ZM480-480Zm-155-40q3-11 7.5-21.5T342-561q5-9 11.5-17t14.5-16l-26-46q-23-41-69.5-41T202-640q-23 41 0 80.5t70 39.5h53Zm363 0q47 0 70-39.5t0-80.5q-24-41-70.5-41T618-640l-26 46q8 8 14.5 16t11.5 17q5 9 9.5 19.5T635-520h53ZM437-634q11-3 21.5-4.5T480-640q11 0 21.5 1.5T523-634l27-46q23-39 0-79.5T480-800q-47 0-70 40t0 80l27 46Zm0 0q11-3 21.5-4.5T480-640q11 0 21.5 1.5T523-634q-11-3-21.5-4.5T480-640q-11 0-21.5 1.5T437-634Zm-96 232q-5-9-9-18.5t-7-19.5q3 10 7 19.5t9 18.5q5 10 12 19t15 17q-8-8-15-17t-12-19Zm-16-118q3-11 7.5-21.5T342-561q5-9 11.5-17t14.5-16q-8 8-14.5 16T342-561q-5 9-9.5 19.5T325-520Zm157 200q-10 0-20.5-1.5T440-326q11 3 21.5 4.5T482-320q11 0 21-1.5t21-4.5q-11 3-21 4.5t-21 1.5Zm110-46q8-8 15-17t12-19q5-9 9.5-18.5T635-440q-2 10-6.5 19.5T619-402q-5 10-12 19t-15 17Zm43-154q-3-11-7.5-21.5T618-561q-5-9-11.5-17T592-594q8 8 14.5 16t11.5 17q5 9 9.5 19.5T635-520ZM480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Z"/></svg>
               filter
        </button>
         <button className='project1table1-allbtn'>
          <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#000000"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
          me
         </button>
          <button className='project1table1-allbtn'>
            <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#000000"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>
            assignee
          </button>
           <button className='project1table1-allbtn'>
            <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#000000"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            closed
           </button>
           <div>
              <input id='project1-search-btn' type='search' placeholder='search   ...'/>
           </div>
      </div>
    <div className='table-wrapper'>
      <Exportexcelbtn data={project} fileName='ProjectList'/>
        <table className='table1'>
          <thead>
            <tr className='table1-heading'>
                <th>Project Name</th>
                <th>Customer Name</th>
                <th>Location</th>
                <th>Phone Number</th>
                <th>Mail ID</th>
                <th>Company Name</th>
                <th>Order Date</th>
                <th>Costing Date</th>
                <th>Costing Assign To</th>
                <th>Status</th>
                <th>Remark</th>
            </tr>
            </thead>
            <tbody>
              {project.map((item,index)=>(
            <tr key={index} className='table1-content'>
                <td>{item.project_name}</td>
                <td>{item.customer_name}</td>
                <td>{item.location}</td>
                <td>{item.mobile_no}</td>
                <td>{item.mail_id}</td>
                <td>{item.company_name}</td>
                <td>{new Date(item.order_date).toLocaleDateString()}</td>
                <td>{new Date(item.costing_date).toLocaleDateString()}</td>
                <td>{item.costing_assign_to}</td>
                <td>{item.status}</td>
                <td>{item.remark}</td>
            </tr>
            ))}
            </tbody>
        </table>
    </div>
    </>
  );
};

export default List;
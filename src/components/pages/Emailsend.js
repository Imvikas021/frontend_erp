import React, { useState } from 'react';
import './Emailsend.css';

function Emailsend() {

  const [email, setEmail] = useState("");
  const [client_name, setClient_name] = useState("");
  const [subject, setSubject] = useState("");
  const [costing_name, setCosting_name] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/email/send`,{
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        email,
        client_name,
        subject,
        costing_name,
        message: "Please find your costing Pdf."
      })
    });

    const data = await response.json();
    alert(data.message);
  };
  return (
    <div className='emailsend'>
        <form className='emailsend-form' onSubmit={handleSend}>
          <label>Email Id</label>
          <input type='text' placeholder='' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label>Client Name</label>
          <input type='text' placeholder='' value={client_name} onChange={(e) => setClient_name(e.target.value)}/>
          <label>Subject Line</label>
          <input type='text' placeholder='' value={subject} onChange={(e) => setSubject(e.target.value)}/>
          <label>Costing Name</label>
          <input type='text' placeholder='' value={costing_name} onChange={(e) => setCosting_name(e.target.value)}/>

           <button type='submit' id='submit'>Send</button>
        </form>
    </div>
  )
}

export default Emailsend;
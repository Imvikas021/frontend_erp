import React,{useState,useEffect} from 'react';
import './Productlist.css';

function Emailsubmit()  {
    const [product, setProduct] = useState([]);
  
    useEffect(() => {
     fetch (`${process.env.REACT_APP_API_URL}/api/product`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
     })
     .then(res => res.json())
     .then(data => setProduct(data))
     .catch (err => console.error(err));
    }, []);
  return (
    <div className='email-table'>
        <table className='table4'>
          <thead>
            <tr className='table4-heading'>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Detail</th>
              <th>Model Number</th>
              <th>Serial Number</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item,index) => (
            <tr key={index} className='table4-content'>
              <td>{item.product_id}</td>
              <td>{item.product_name}</td>
              <td>{item.product_detail}</td>
              <td>{item.model_number}</td>
              <td>{item.serial_number}</td>
              <td>{item.price}</td>
            </tr>
            ))}
        </tbody>
        </table>
        </div>
  )
}

export default Emailsubmit;
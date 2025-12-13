import React,{useState} from 'react';
import './Createlist.css';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../api/productAPI';

function Email1() {
   const [productformData, setProductFormData] = useState({
    product_id: "",
    product_name: "",
    product_details: "",
    model_number: "",
    serial_number: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProductFormData({
      ...productformData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();

    try{
      await addProduct(productformData);
      alert("product added successfully");
      navigate("/productlist");
    } catch (err){
      console.log(err);
      alert("error adding product");
    }
  };
  return (
    <div className='email1'>
         <form className='emailform' onSubmit={handleSubmit}>
          <label>Product ID</label>
          <input type='text' name='product_id'  onChange={handleChange}/>
          <label>Product Name</label>
          <input type='text' name='product_name'  onChange={handleChange}/>
          <label>Product Details</label>
          <input type='text' name='product_detail' onChange={handleChange}/>
          <label>Model Number</label>
          <input type='text' name='model_number' onChange={handleChange}/>
          <label>Serial Number</label>
          <input type='text' name='serial_number' onChange={handleChange}/>
          <label>Price</label>
          <input type='text' name='price' onChange={handleChange}/>
          <button id='submit'>Submit</button>
        </form>
      </div>
  )
}

export default Email1;
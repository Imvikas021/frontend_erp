import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


export const getProducts = async () => {
    return axios.get(`${API_URL}/api/product`);
};

export const addProduct = async (data) => {
    return axios.post(`${API_URL}/api/product/add`, data);
};
import axios from 'axios';

const API_URL = 'http://192.168.1.6:3001';


export const getProducts = async () => {
    return axios.get(`${API_URL}/product`);
};

export const addProduct = async (data) => {
    return axios.post(`${API_URL}/product/add`, data);
};
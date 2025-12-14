import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


export const getCosting = async () => {
    return axios.get(`${API_URL}/api/costing`);
};

export const addCosting = async (data) => {
    return axios.post(`${API_URL}/api/costing/add`, data);
};
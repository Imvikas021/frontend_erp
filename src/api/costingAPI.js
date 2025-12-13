import axios from 'axios';

const API_URL = 'http://192.168.1.6:3001';


export const getCosting = async () => {
    return axios.get(`${API_URL}/costing`);
};

export const addCosting = async (data) => {
    return axios.post(`${API_URL}/costing/add`, data);
};
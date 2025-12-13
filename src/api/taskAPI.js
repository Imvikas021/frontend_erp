import axios from 'axios';

const API_URL = 'http://192.168.1.6:3001';


export const getTask1 = async () => {
    return axios.get(`${API_URL}/task1`);
};

export const addTask1 = async (data) => {
    return axios.post(`${API_URL}/task1/add`, data);
};
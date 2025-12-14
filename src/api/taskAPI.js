import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


export const getTask1 = async () => {
    return axios.get(`${API_URL}/api/task1`);
};

export const addTask1 = async (data) => {
    return axios.post(`${API_URL}/api/task1/add`, data);
};
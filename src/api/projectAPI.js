import axios from 'axios';

const API_URL = 'http://192.168.1.6:3001';


export const getProject = async () => {
    return axios.get(`${API_URL}/project`);
};

export const addProject = async (data) => {
    return axios.post(`${API_URL}/project/add`, data);
};
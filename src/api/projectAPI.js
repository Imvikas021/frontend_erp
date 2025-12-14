import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


export const getProject = async () => {
    return axios.get(`${API_URL}/api/project`);
};

export const addProject = async (data) => {
    return axios.post(`${API_URL}/api/project/add`, data);
};
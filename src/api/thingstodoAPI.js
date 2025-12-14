import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


export const getthingstodo = async () => {
    return axios.get(`${API_URL}/api/thingstodo`);
};

export const addthingstodo = async (data) => {
    return axios.post(`${API_URL}/api/thingstodo/add`, data);
};
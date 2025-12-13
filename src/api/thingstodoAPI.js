import axios from 'axios';

const API_URL = 'http://192.168.1.6:3001';


export const getthingstodo = async () => {
    return axios.get(`${API_URL}/thingstodo`);
};

export const addthingstodo = async (data) => {
    return axios.post(`${API_URL}/thingstodo/add`, data);
};
import axios from 'axios';

const API_URL = 'http://192.168.1.6:3001';


export const gethome = async () => {
    const token = localStorage.getItem("token")

    return axios.post(`${API_URL}/login`, {} ,{
      headers: {
        Authorization: `Bearer  ${localStorage.getItem("token")}`
    }
 });
};

console.log(res.data);
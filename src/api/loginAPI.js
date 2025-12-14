import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


export const gethome = async () => {
    const token = localStorage.getItem("token")

    return axios.post(`${API_URL}/api/login`, {} ,{
      headers: {
        Authorization: `Bearer  ${localStorage.getItem("token")}`
    }
 });
};

console.log(res.data);
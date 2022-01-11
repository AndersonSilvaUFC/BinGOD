import axios from 'axios';

const api = axios.create({
    baseURL: "https://bingodapi.herokuapp.com/api/"
})

export default api;
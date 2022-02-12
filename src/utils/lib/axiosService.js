import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'api.giphy.com/v1/gifs/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosService; //Exporting Instance
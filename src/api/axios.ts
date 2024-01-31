import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 1000,
});

export default Axios;

import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 1000,
});

export const LocalAxios = axios.create({
  baseURL: 'localhost',
  timeout: 1000,
});

export default Axios;

import axios from 'axios';

const axiosFetch = axios.create({
  baseURL: `${process.env.PUBLIC_URL}/api/`,
  // timeout: 5000,
  withCredentials: true
});

export default axiosFetch;

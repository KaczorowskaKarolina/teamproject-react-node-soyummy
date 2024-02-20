import axios from 'axios';

const axiosBaseUrl = process.env.REACT_APP_AXIOS_BASE_URL;
// http://localhost:3000??

axios.defaults.baseURL = axiosBaseUrl;

export default axios;

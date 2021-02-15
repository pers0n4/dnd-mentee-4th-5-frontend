import axios from 'axios';

const _axios = axios.create({
  baseURL: 'https://backend-server-dev-rlogkv3ukq-du.a.run.app',
  timeout: 5000,
});

export default _axios;

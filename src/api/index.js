import axios from 'axios';

const api = axios.create({
  headers: {
    'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_CLIENT_SECRET
  }
});

export default api;

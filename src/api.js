import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '025e5601fbc5708ed29d4d165bf21a97',
    language: 'en-US',
  },
});

export default api;

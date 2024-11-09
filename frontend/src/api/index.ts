import Axios, { HttpStatusCode } from 'axios';

const apiUrl = import.meta.env.VITE_APP_API_URL;

const api = Axios.create({
  baseURL: apiUrl,
});

api.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error?.response?.status === HttpStatusCode.Forbidden) {
        console.log('Handle with forbidden error');
      }
  
      throw error;
    }
  );
  
  export default api;
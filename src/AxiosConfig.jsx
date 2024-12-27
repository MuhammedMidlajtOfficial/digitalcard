import axios from "axios";
// import dotenv from 'dotenv'
// dotenv.config()

const axiosInstance = axios.create({
    // baseURL: process.env.REACT_APP_BASEURL,
    baseURL: "http://13.203.24.247:9000/api/v1/",
    // baseURL: "http://localhost:9000/api/v1/",
    // baseURL: "https://diskuss-admin.onrender.com/api/v1/",
});

axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");  // Get token from localStorage
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`; // Set Authorization header
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);  

export default axiosInstance;

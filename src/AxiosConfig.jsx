import axios from "axios";
// import dotenv from 'dotenv'
// dotenv.config()

const axiosInstance = axios.create({
    // baseURL: process.env.REACT_APP_BASEURL,
    // baseURL: "http://13.203.24.247:9000/api/v1/",
    
    // baseURL: "http://localhost:9000/api/v1/",
    // baseURL: "https://diskuss-admin.onrender.com/api/v1/",
    baseURL: "https://api.knowconnections.com/admin1/api/v1/",
});

const logInstance = axios.create({
  baseURL: "https://api.knowconnections.com/admin2/api/v1/",
  // baseURL: "http://13.203.24.247:2000/api/v1/",
});

axiosInstance.interceptors.request.use(
    (config) => {
      const token = sessionStorage.getItem("token");  // Get token from sessionStorage
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`; // Set Authorization header
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);  

export  {axiosInstance,logInstance};

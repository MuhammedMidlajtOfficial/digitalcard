import axios from "axios";
// import dotenv from 'dotenv'
// dotenv.config()

const axiosInstanceForTicket = axios.create({
  // baseURL: process.env.REACT_APP_BASEURL,
  // baseURL: "http://13.203.24.247:2000/api/v1/",
  baseURL: "http://localhost:2000/api/v1/",
});

// axiosInstanceForTicket.interceptors.request.use(
//     (config) => {
//       const token = localStorage.getItem("token");  // Get token from localStorage
//       if (token) {
//         config.headers["Authorization"] = `Bearer ${token}`; // Set Authorization header
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
// );  

export default axiosInstanceForTicket;
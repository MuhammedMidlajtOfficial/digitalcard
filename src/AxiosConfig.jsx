import axios from "axios";
// import dotenv from 'dotenv'
// dotenv.config()
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    // baseURL: "http://localhost:9000/api/v1/",
    // baseURL: "https://diskuss-admin.onrender.com/api/v1/",
    // baseURL: "https://abc.com:5000/", //production
});

export default axiosInstance;

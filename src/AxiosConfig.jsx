import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "http://localhost:9000/api/v1/",
    // baseURL: "https://diskuss-admin.onrender.com/api/v1/",
    // baseURL: "https://abc.com:5000/", //production
});

export default axiosInstance;

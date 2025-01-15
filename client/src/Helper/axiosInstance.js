import axios from "axios";

const axiosInstance = axios.create();
console.log(process.env.BASE_URL)
axiosInstance.defaults.baseURL = process.env.BASE_URL || 'https://learning-management-system-phi-black.vercel.app//api/v1' || "http://localhost:5014/api/v1";
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;

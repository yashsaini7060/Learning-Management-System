import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.BASE_URL || "http://localhost:5014/api/v1";
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;

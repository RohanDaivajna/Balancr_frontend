import axios from "axios";
import { BASE_URL } from "./apiPaths";

// Create an axios instance with default config
const axiosInstance = axios.create({
    baseURL : BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type":"application/json",
        Accept: "application/json",
    },
}); 

// Request interceptor: attach token if available
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if(accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }
);

// Response interceptor: handle errors globally
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if(error.response){
            // Redirect to login on 401 Unauthorized
            if(error.response.status === 401){
                window.location.href = "/login";
            // Log server error on 500
            }else if(error.response.status === 500){
                console.error("server error. Please try again later.")
            }
        // Handle request timeout
        }else if(error.code === "ECONNABORATED"){
            console.error("request timeout. Please try again.");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
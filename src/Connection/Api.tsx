import axios from "axios";

const isProd = window.location.port === "8080" || 
               window.location.hostname !== "localhost";

export const BASE_URL = isProd
  ? "https://devzone-backend-main-production.up.railway.app"
  : "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

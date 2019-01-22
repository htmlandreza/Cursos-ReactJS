import axios from "axios";

// API Rest em NodeJS
const api = axios.create({
    baseURL: "http://localhost:3001/api",
});

export default api;

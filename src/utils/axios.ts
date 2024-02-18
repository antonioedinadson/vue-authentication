import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
});

export default http;
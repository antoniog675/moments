import axios from "axios";

axios.defaults.baseURL = "https://antonio-moments-drf-api.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create(); // Intercept Requests
export const axiosRes = axios.create(); // Intercept Response
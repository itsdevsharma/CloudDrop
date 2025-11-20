import axios from "axios";

const API = axios.create({
  baseURL: "https://cloud-drop-backend.vercel.app/", // your backend URL
});

// attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;

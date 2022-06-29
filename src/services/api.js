import axios from "axios";

const api = axios.create({
  baseURL: "http://randomuser.me/api/",
});

export default api;

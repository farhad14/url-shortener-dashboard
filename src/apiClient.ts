import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://ffct.ir",
});

const token = localStorage.getItem("auth-token");
if (token)
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default apiClient;

import axios from "axios";
import {getUserToken} from "./userAuth";
import {BASE_URL} from "./BASE_URL";

const token = getUserToken();

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  "Content-Type": "application/json",
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

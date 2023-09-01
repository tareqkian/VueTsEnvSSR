import axios, {AxiosInstance} from "axios";

const api: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: `${import.meta.env.VITE_BASE_URL}/api/${import.meta.env.VITE_VERSION}`,
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
    },
});

export default api
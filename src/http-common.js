import axios from "axios";


const http = axios.create({
    baseURL: " http://localhost:5102/api",
    headers: {
        "Content-type": "application/json",
    },
});

http.interceptors.request.use((config) => {
    const authToken = window.localStorage.getItem("AUTH_TOKEN");
    const isAuthenticated = authToken != null;
    if (isAuthenticated) {
        config.headers["Authorization"] = `Bearer ${authToken}`;
    }

    return config;
})

export default http;

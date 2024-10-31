import http from "../http-common";

class AuthDataService {
    login(data) {
        return http.post("/auth/login", data);
    }

    register(data) {
        return http.post("/auth/register", data);
    }

    getUser() {
        return http.get("/auth/me");
    }
}

export default new AuthDataService();

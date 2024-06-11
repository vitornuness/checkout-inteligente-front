import http from "../http-common";

class AuthDataService {
    login(data) {
        return http.post("/auth/signIn", data);
    }
}

export default new AuthDataService();

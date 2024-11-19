import { defineStore } from "pinia";

export const useTokenStore = defineStore("token", {
    state: () => ({
        token: null,
    }),
    actions: {
        setToken(token) {
            this.token = token;
            window.localStorage.setItem("AUTH_TOKEN", token);
        },
        revokeToken() {
            window.localStorage.removeItem("AUTH_TOKEN");
        }
    },
});

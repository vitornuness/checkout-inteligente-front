import { defineStore } from "pinia";
import { computed } from "vue";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
    }),
    getters: {
        getUser: computed((state) => state),
    },

    actions: {
        setUser(user) {
            this.user = user;
        },
    },
});

import AuthDataService from "@/services/AuthDataService";
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

        handleUser() {
            if (!this.user) {
                AuthDataService.getUser()
                    .then((res) => {
                        this.setUser(res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }
    },
});

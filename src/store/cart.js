import { defineStore } from "pinia";
import { useUserStore } from "./user";
import OrderDataService from "@/services/OrderDataService";
import { computed } from "vue";

export const useCartStore = defineStore("cart", {
    state: () => ({
        cart: null,
    }),
    getters: {
        getCart: computed((state) => state),
    },
    actions: {
        setCart(cart) {
            this.cart = cart;
        },
        async handleCart() {
            if (!this.cart) {
                console.log('19')
                var userId = useUserStore().user.id
                if (userId) {
                    console.log('22')
                    await OrderDataService.fetchCurrentUserOrder(userId)
                        .then((res) => {
                        console.log('24')
                            this.setCart(res.data)
                        })
                        .catch((err) => {
                            console.log(err)
                        });
                }
            }
            console.log('32')
            return this.cart;
        }
    },
});

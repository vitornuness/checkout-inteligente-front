import http from "../http-common";

class OrderDataService {
    fetchCurrentUserOrder(id) {
        return http.get(`/orders/user/${id}/orders/current`);
    }

    fetchUserOrders(id) {
        return http.get(`/orders/user/${id}/orders`);
    }

    completeOrder(id) {
        return http.post(`/orders/${id}/complete`);
    }

    addProduct(id) {
        return http.post(`/orders/${id}/add-product`);
    }

    removeProduct(id) {
        return http.post(`/orders/${id}/remove-product`);
    }
}

export default new OrderDataService();

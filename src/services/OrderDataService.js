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

    addProduct(id, productId) {
        return http.post(`/orders/${id}/add-product?productId=${productId}`);
    }

    removeProduct(id, productId) {
        return http.post(`/orders/${id}/remove-product?productId=${productId}`);
    }
}

export default new OrderDataService();

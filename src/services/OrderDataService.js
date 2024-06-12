import http from "../http-common";

class OrderDataService {
    getAll() {
        return http.get("/orders");
    }

    get(id) {
        return http.get(`/orders/${id}`);
    }

    getOrderByUser(userId, token) {
        return http.get(`/orders/current`, {
            params: {
                userId: userId,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    create(data) {
        return http.post("/orders", data);
    }

    update(id, data) {
        return http.put(`/orders/${id}`, data);
    }

    delete(id) {
        return http.delete(`/orders/${id}`);
    }

    addProduct(orderId, productId, token) {
        return http.post(`/orders/${orderId}/products/add`, null, {
            params: {
                productId: productId,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    removeProduct(orderId, productId, token) {
        return http.post(`/orders/${orderId}/products/remove`, null, {
            params: {
                productId: productId,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    completeOrder(orderId, token) {
        return http.post(`/orders/${orderId}/complete`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    getSugestions(orderId, byCampaigns = false, token) {
        return http.get(`/orders/${orderId}/suggestions`, {
            params: {
                byCampaigns: byCampaigns,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}

export default new OrderDataService();

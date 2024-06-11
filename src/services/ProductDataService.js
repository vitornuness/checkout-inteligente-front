import http from "../http-common";

class ProductDataService {
    getAll(category = null, sort = null) {
        return http.get("/products", {
            params: {
                category: category,
                sort: sort,
            },
        });
    }

    get(id) {
        return http.get(`/products/${id}`);
    }

    create(data, token) {
        return http.post("/products", data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    update(id, data, token) {
        return http.put(`/products/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    delete(id, token) {
        return http.delete(`/products/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}

export default new ProductDataService();

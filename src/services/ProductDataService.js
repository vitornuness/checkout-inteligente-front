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

    create(data) {
        return http.post("/products", data);
    }

    update(id, data) {
        return http.put(`/products/${id}`, data);
    }

    delete(id) {
        return http.delete(`/products/${id}`);
    }
}

export default new ProductDataService();

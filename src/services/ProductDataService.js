import { useUserStore } from "@/store/user";
import http from "../http-common";

class ProductDataService {
    getAll() {
        return http.get("/products");
    }

    getBestSellers() {
        return http.get("/products/best-sellers");
    }

    get(id) {
        return http.get(`/products/${id}`);
    }

    create(data) {
        return http.post("/products", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    update(id, data) {
        return http.put(`/products/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    delete(id) {
        return http.delete(`/products/${id}`);
    }
}

export default new ProductDataService();

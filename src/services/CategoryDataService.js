import http from "../http-common";

class CategoryDataService {
    getAll() {
        return http.get("/categories");
    }

    get(id) {
        return http.get(`/categories/${id}`);
    }

    create(data) {
        return http.post("/categories", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    update(id, data) {
        return http.put(`/categories/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    delete(id) {
        return http.delete(`/categories/${id}`);
    }
}

export default new CategoryDataService();

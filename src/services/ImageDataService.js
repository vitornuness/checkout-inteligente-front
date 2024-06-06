import http from "../http-common";

class ImageDataService {
    getAll() {
        return http.get("/images");
    }

    get(id) {
        return http.get(`/images/${id}`);
    }

    create(image) {
        return http.post("/images", image, {
            headers: {
                "Content-type": "multipart/form-data",
            },
        });
    }

    update(id, image) {
        return http.put(`/images/${id}`, image, {
            headers: {
                "Content-type": "multipart/form-data",
            },
        });
    }

    delete(id) {
        return http.delete(`/images/${id}`);
    }
}

export default new ImageDataService();

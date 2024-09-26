import http from "../http-common";

class CampaignDataService {
    getAll() {
        return http.get("/campaigns");
    }

    get(id) {
        return http.get(`/campaigns/${id}`);
    }

    create(data) {
        return http.post("/campaigns", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    update(id, data) {
        return http.put(`/campaigns/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    delete(id) {
        return http.delete(`/campaigns/${id}`);
    }
}

export default new CampaignDataService();

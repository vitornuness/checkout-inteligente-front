import http from "../http-common";

class CampaignDataService {
    getAll() {
        return http.get("/campaigns");
    }

    get(id, sort = null) {
        return http.get(`/campaigns/${id}`, {
            params: {
                sort: sort,
            },
        });
    }

    create(data) {
        return http.post("/campaigns", data);
    }

    update(id, data) {
        return http.put(`/campaigns/${id}`, data);
    }

    delete(id) {
        return http.delete(`/campaigns/${id}`);
    }
}

export default new CampaignDataService();

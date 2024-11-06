import http from "../http-common";

class ReportDataService {
    exportSales(data) {
        return http.post('/orders/export/csv', data);
    }

    getSalesReport(startDate, endDate) {
        return http.get(`/reports/?startDate=${startDate}&endDate=${endDate}`);
    }
    getAllReports() {
        return http.get('/reports/');
    }

    deleteSalesReport(reportId) {
        return http.delete(`/reports/${reportId}`);
    }
    
    
}

export default new ReportDataService();

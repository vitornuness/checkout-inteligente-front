import http from "../http-common";

class ReportDataService {
    exportSales(startDate, endDate) {
        return http.post(`/orders/export/csv?startDate=${startDate}&endDate=${endDate}`);
    }
    getAllReports() {
        return http.get('/reports');
    }
    deleteSalesReport(reportId) {
        return http.delete(`/reports/${reportId}`);
    }
    
    
}

export default new ReportDataService();

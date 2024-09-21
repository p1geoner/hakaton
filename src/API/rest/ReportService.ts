import makeRequest from '@/API/makeRequest';

import { APIResponse } from '@/types/api/IAPI';
import { TReportCreate } from '@/types/entities/IReport';

class ReportService {
  createReport(report: TReportCreate): APIResponse<never> {
    return makeRequest({
      url: 'api/reports',
      method: 'POST',
      data: report,
    });
  }
}

export default new ReportService();

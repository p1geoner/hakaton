import makeRequest from '@/API/makeRequest';

import { ReadResumePortfolioResponse } from '@/types/api/IResumeResponse';

class ResumePortfolioService {
  createPortfolio(portfolio: FormData) {
    return makeRequest<ReadResumePortfolioResponse>({
      url: 'api/resume_portfolios',
      method: 'post',
      authToken: true,
      data: portfolio,
    });
  }

  updatePortfolio(portfolioId: number, portfolio: FormData) {
    return makeRequest<ReadResumePortfolioResponse>({
      url: `api/resume_portfolios/${portfolioId}`,
      method: 'post',
      authToken: true,
      data: portfolio,
    });
  }

  deletePortfolio(portfolioId: number) {
    return makeRequest<void>({
      url: `api/resume_portfolios/${portfolioId}`,
      method: 'delete',
      authToken: true,
    });
  }
}

export default new ResumePortfolioService();

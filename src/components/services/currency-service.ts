import AxiosInstance from './axios';

class CurrencyService {
  getCurrency = async () => {
    const response = await AxiosInstance.get('/getCurrencyList');
    return response;
  };
  getCurrencyDetails = async (params: any) => {
    const response = await AxiosInstance.get('/getCurrencyDetails', {params});
    return response;
  };
}

export default new CurrencyService();
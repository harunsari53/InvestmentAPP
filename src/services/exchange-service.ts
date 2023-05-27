import AxiosInstance from './axios';

class ExchangeService {
  getExchange = async () => {
    const response = await AxiosInstance.get('/getExChangeList');
    return response;
  };
  getExchangeDetails = async (params: any) => {
    const response = await AxiosInstance.get('/getExChangeDetails', {params});
    return response;
  };
}

export default new ExchangeService();
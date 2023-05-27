import axios from 'axios';
import AxiosInstance from './axios';

class CoinService {
  getCoins = async () => {
    const response = await AxiosInstance.get('/getCoinList');
    return response;
  };
  getCoinDetails = async (params: any) => {
    const response = await AxiosInstance.get('/getCoinDetails', {params});
    return response;
  };
}

export default new CoinService(); //neden class ve new?

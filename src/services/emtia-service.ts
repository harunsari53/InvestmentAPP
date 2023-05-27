import AxiosInstance from './axios';

class EmtiaService {
  getEmtia = async () => {
    const response = await AxiosInstance.get('/getEmtiaList');
    return response;
  };
  getEmtiaDetails = async (params: any) => {
    const response = await AxiosInstance.get('/getEmtiaDetails', {params});
    return response;
  };
}


export default new EmtiaService();
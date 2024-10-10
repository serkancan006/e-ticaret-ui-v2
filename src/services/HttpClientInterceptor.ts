import axios, { AxiosResponse, AxiosError } from 'axios';
import * as authTokenService from '@/services/AuthTokenService'

// Create an Axios instance
const customHttpClient = axios.create();

// Interceptor for requests
customHttpClient.interceptors.request.use(
    config => {
        // Her isteğin öncesinde yapılacak işlemler (örneğin, header eklemek)
        
        const token = authTokenService.getAccessToken();
  
        if (token) {
          config.headers.Authorization = `Bearer ${token}` // Header'a Bearer token ekle
        }
  
        return config
    },
    (error) => {
        console.error('interceptor: Request error:', error);
        return Promise.reject(error);
    }
);

// Interceptor for responses
customHttpClient.interceptors.response.use(
    (response: AxiosResponse) => {
        console.log('interceptor: Response received:', response);
        return response;
    },
    (error) => {
        handleError(error); // Centralized error handling
        return Promise.reject(error);
    }
);

// Centralized error handling function
const handleError = (error: AxiosError) => {
    if (error.response) {
        console.error('Http client interceptor: Error Response:', error.response.data);
        console.error('Http client interceptor: Error Status:', error.response.status);
        console.error('Http client interceptor: Error Headers:', error.response.headers);

        switch (error.response.status) {
            case 400:
                alert('interceptor: Geçersiz İstek!');
                break;
            case 404:
                alert('interceptor: Kaynak Bulunamadı!');
                break;
            case 401:
                alert('interceptor: Yetkisiz İşlem! Lütfen Login Olun!');
                break;
            case 403:
                alert('interceptor: Yetkisiz İşlem! Yetkiniz Olmadan Erişemezsiniz');
                break;
            case 500:
                alert('interceptor: Server Hatası! Lütfen Tekrar Deneyin!');
                break;
            default:
                alert('interceptor: Bir Hata Oluştu! Lütfen Tekrar Deneyin!');
        }
    } else if (error.request) {
        console.error('Http client interceptor: Error Request:', error.request);
        alert('Http client interceptor: No response from the server. Please check your network.');
    } else {
        console.error('Http client interceptor: Error Message:', error.message);
        alert('Http client interceptor: Error occurred: ' + error.message);
    }
};

// Export the configured axios instance as httpClient
export default customHttpClient; 

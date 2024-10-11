import axios, { AxiosResponse, AxiosError } from 'axios';
import * as authTokenService from '@/services/AuthTokenService'
import * as toastifyService from '@/services/notifications/ToastifyService'

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
                toastifyService.message('interceptor: Geçersiz İstek!', {type: 'error'})
                break;
            case 404:
                toastifyService.message('interceptor: Kaynak Bulunamadı!', {type: 'error'})
                break;
            case 401:
                toastifyService.message('interceptor: Yetkisiz İşlem! Lütfen Login Olun!', {type: 'error'})
                break;
            case 403:
                toastifyService.message('interceptor: Yetkisiz İşlem! Yetkiniz Olmadan Erişemezsiniz!', {type: 'error'})
                break;
            case 500:
                toastifyService.message('interceptor: Server Hatası! Lütfen Tekrar Deneyin!', {type: 'warning'})
                break;
            default:
                toastifyService.message('interceptor: Bilinmeyen Bir Hata Oluştu! Lütfen Tekrar Deneyin!', {type: 'warning'})
        }
    } else if (error.request) {
        console.error('Http client interceptor: Error Request:', error.request);
        alert('Http client interceptor: Sunucudan yanıt yok. Lütfen ağınızı kontrol edin.');
    } else {
        console.error('Http client interceptor: Error Message:', error.message);
        alert('Http client interceptor: Error occurred: ' + error.message);
    }
};

// Export the configured axios instance as httpClient
export default customHttpClient; 

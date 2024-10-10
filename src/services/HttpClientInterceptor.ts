import axios, { AxiosResponse, AxiosError } from 'axios';

// Create an Axios instance
const httpClient = axios.create();

// Interceptor for requests
httpClient.interceptors.request.use(
    config => {
        // Her isteğin öncesinde yapılacak işlemler (örneğin, header eklemek)
        
        //const token = TokenService.getToken() // Token'i al
        const token = localStorage.getItem('access-token') // Token'i al
  
        if (token) {
          config.headers.Authorization = `Bearer ${token}` // Header'a Bearer token ekle
        }
  
        return config
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Interceptor for responses
httpClient.interceptors.response.use(
    (response: AxiosResponse) => {
        console.log('Response received:', response);
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
        console.error('Error Response:', error.response.data);
        console.error('Error Status:', error.response.status);
        console.error('Error Headers:', error.response.headers);

        switch (error.response.status) {
            case 400:
                alert('Bad Request.');
                break;
            case 404:
                alert('Resource not found.');
                break;
            case 401:
                alert('Unauthorized! Please log in.');
                break;
            case 403:
                alert('Yetkisiz İşlem.');
                break;
            case 500:
                alert('Server error! Please try again later.');
                break;
            default:
                alert('An error occurred! Please try again.');
        }
    } else if (error.request) {
        console.error('Error Request:', error.request);
        alert('No response from the server. Please check your network.');
    } else {
        console.error('Error Message:', error.message);
        alert('Error occurred: ' + error.message);
    }
};

// Export the configured axios instance as httpClient
export default httpClient; 

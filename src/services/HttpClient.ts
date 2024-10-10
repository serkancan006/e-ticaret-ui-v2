import customHttpClient from './HttpClientInterceptor';
import { AxiosResponse, AxiosHeaders } from 'axios';

// URL oluşturma fonksiyonu
const url = (requestParameter: Partial<RequestParamaters>): string => {
    return `${requestParameter.baseUrl ? requestParameter.baseUrl : process.env.API_BASE_URL}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`;
}

// GET fonksiyonu
export async function getAsync<T>(requestParameter: Partial<RequestParamaters>, id?: string): Promise<AxiosResponse<T>> {
    let requestUrl: string;

    if (requestParameter.fullEndpoint) {
        requestUrl = requestParameter.fullEndpoint;
    } else {
        requestUrl = `${url(requestParameter)}${id ? `/${id}` : ""}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;
    }

    // Axios ile GET isteği
    const response: AxiosResponse<T> = await customHttpClient.get<T>(requestUrl, {
        headers: {
            ...requestParameter.headers, // Doğru şekilde headers'ı ekleme
        },
        responseType: requestParameter.responseType || 'json' // Varsayılan responseType belirleme
    });

    return response; // AxiosResponse döner
}

// POST fonksiyonu
export async function postAsync<T>(requestParameter: Partial<RequestParamaters>, body: Partial<T>): Promise<AxiosResponse<T>> {
    let requestUrl: string;

    if (requestParameter.fullEndpoint) {
        requestUrl = requestParameter.fullEndpoint;
    } else {
        requestUrl = `${url(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;
    }

    // Axios ile POST isteği
    const response: AxiosResponse<T> = await customHttpClient.post<T>(requestUrl, body, {
        headers: {
            ...requestParameter.headers, // Doğru şekilde headers'ı ekleme
        },
        responseType: requestParameter.responseType || 'json' // Varsayılan responseType belirleme
    });

    return response; // AxiosResponse döner
}

// PUT fonksiyonu
export async function putAsync<T>(requestParameter: Partial<RequestParamaters>, body: Partial<T>): Promise<AxiosResponse<T>> {
    let requestUrl: string;

    if (requestParameter.fullEndpoint) {
        requestUrl = requestParameter.fullEndpoint;
    } else {
        requestUrl = `${url(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;
    }

    // Axios ile PUT isteği
    const response: AxiosResponse<T> = await customHttpClient.put<T>(requestUrl, body, {
        headers: {
            ...requestParameter.headers, // Doğru şekilde headers'ı ekleme
        },
        responseType: requestParameter.responseType || 'json' // Varsayılan responseType belirleme
    });

    return response; // AxiosResponse döner
}


// DELETE fonksiyonu
export async function deleteAsync<T>(requestParameter: Partial<RequestParamaters>, id: string): Promise<AxiosResponse<T>> {
    let requestUrl: string;

    // URL oluşturma
    if (requestParameter.fullEndpoint) {
        requestUrl = requestParameter.fullEndpoint;
    } else {
        requestUrl = `${url(requestParameter)}/${id}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;
    }

    // Axios ile DELETE isteği
    const response: AxiosResponse<T> = await customHttpClient.delete<T>(requestUrl, {
        headers: {
            ...requestParameter.headers, // Doğru şekilde headers'ı ekleme
        },
        responseType: requestParameter.responseType || 'json' // Varsayılan responseType belirleme
    });

    return response; // AxiosResponse döner
}


// İstek parametreleri tipi
export type RequestParamaters = {
    controller?: string;
    action?: string;
    queryString?: string;

    headers?: AxiosHeaders; // Güncelledik: RawAxiosHeaders kullanarak uyumsuzlukları azaltıyoruz
    baseUrl?: string;
    fullEndpoint?: string;

    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text' | 'stream'; // 'json' tipi iki kez tanımlanmış, kaldırdık
}

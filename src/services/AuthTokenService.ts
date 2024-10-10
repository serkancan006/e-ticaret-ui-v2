import { TokenResponse } from "@/types/constract/token/TokenResponse";

const accessTokenKey = 'access-token';
const accessTokenExpirationKey = 'access-token-expiration';
const refleshTokenKey = 'reflesh-token';

export const getAccessToken = (): string | null => {
    const token = localStorage.getItem(accessTokenKey);
    return token ? token : null; // Token yoksa null döner
};

export const setAccessToken = (token : TokenResponse) : void => {
    localStorage.setItem(accessTokenKey, token.accessToken);
    localStorage.setItem(accessTokenExpirationKey, token.expiration.toString());
    localStorage.setItem(refleshTokenKey, token.accessToken);
}

export const isAuthenticated = () : boolean => getAccessToken() ? true : false;



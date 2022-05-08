import {setToken} from '../../shared/helpers/utils/getUser.js';

export const setTokenToRequest = (instance) => {
  return instance.interceptors.request.use((config) => {
    if(config.url === '/api/v1/login') {
      return config;
    }
  
    config.headers.authorization = setToken();
  
    return config;
  });
}
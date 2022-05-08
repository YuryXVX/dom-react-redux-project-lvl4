import routes from '../../../routes.js';
import {setTokenToRequest} from './interceptors.js';
import axios from 'axios';

const instance = axios.create()

setTokenToRequest(instance);

class Api {
  constructor() {
    this._client = instance;
  }
  
  async auth({ username, password }) {
    return await this._client.post(routes.auth(), {username, password});
  }

  async channels() {
    const { data } = await this._client.get(routes.allData());
    return data;
  }
}

export const api = new Api();
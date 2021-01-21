import getConfig from 'next/config';
import Instance, { TAxios } from './Instance';

class Network extends Instance {
  constructor(baseURL: string, timeout = 30000) {
    super(baseURL, timeout);
  }

  async getSomeData(): TAxios {
    return this.send('get', '/api/1.0/getSomeData');
  }

  async postSomeData(token, data): TAxios {
    return this.setToken(token).send(
      'post',
      '/api/1.0/postSomeData',
      data,
    );
  }

  async removeSomeData(token, payload): TAxios {
    return this.setToken(token).send(
      'delete',
      '/api/1.0/removeSomeData',
      { data: payload },
    );
  }

  async updateSomeData(token, id, data): TAxios {
    return this.setToken(token).send(
      'put',
      '/api/1.0/updateSomeData',
      data,
      {
        params: { id },
      },
    );
  }

  async updateSomeDataAgain(token, params): TAxios {
    return this.setToken(token).send(
      'put',
      '/api/1.0/updateSomeDataAgain',
      params,
    );
  }

  async patchSomeData(token, data): TAxios {
    return this.setToken(token).send(
      'patch',
      `/api/1.0/SomeData`,
      data
    );
  }
}

const {
  publicRuntimeConfig: { NEXT_PUBLIC_REACT_APP_BACKEND_URL },
} = getConfig();

const network = new Network(NEXT_PUBLIC_REACT_APP_BACKEND_URL);
export default network;

import {AxiosResponse} from 'axios';

const axios = require('axios').default;

class RestClient {
  get = <T>(url: string, queryParams?: any): Promise<T> =>
    new Promise((resolve, reject) => {
      axios
        .get(url, {params: queryParams || {}})
        .then((response: AxiosResponse<T>) => {
          // handle success
          resolve(response.data);
        })
        .catch((error: any) => {
          debugger;
          // handle error
          reject(error);
        });
    });
}

const restClient = new RestClient();

export default restClient;

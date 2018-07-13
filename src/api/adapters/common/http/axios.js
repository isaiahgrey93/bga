import axios from 'axios';

import { asyncify, } from 'utilities';

import HttpPort from './port';

class AxiosAdapter extends HttpPort {
  constructor(args) {
    super(args);

    const { url, headers, } = args;

    this.gateway = axios.create({
      baseURL: url,
      headers,
    });

    this.gateway.interceptors.response.use(
      this.transformResponse,
      this.transformResponse
    );
  }

  async transformResponse(request) {
    const { error, response, } = await asyncify(request);
    const { status, data, } = response;

    if (error) {
      return error;
    } else if (status < 200 || status >= 400) {
      return { error: data, };
    }
    return { response: data, };
  }

  get(url, { params, headers, } = {}) {
    return this.gateway.get(url, { params, headers, });
  }

  post(url, { data, params, headers, } = {}) {
    return this.gateway.post(url, data, { params, headers, });
  }

  put(url, { data, params, headers, } = {}) {
    return this.gateway.put(url, data, { params, headers, });
  }

  patch(url, { data, params, headers, } = {}) {
    return this.gateway.patch(url, data, { params, headers, });
  }

  delete(url, { params, headers, } = {}) {
    return this.gateway.delete(url, { params, headers, });
  }
}

export default AxiosAdapter;

import axios from 'axios';

import { asyncify, } from 'utilities';

import HttpPort from './port';

class AxiosAdapter extends HttpPort {
  constructor(args) {
    super(args);

    this.api = axios.create({
      baseURL: args.url,
      headers: args.headers,
    });
  }

  get token() {
    return this.api.defaults.headers.Authorization;
  }

  set token(token) {
    this.api.defaults.headers.Authorization = token;
  }

  get(url, { params, headers, } = {}) {
    return asyncify(this.api.get(url, { params, headers, }));
  }

  post(url, { data, params, headers, } = {}) {
    return asyncify(this.api.post(url, { data, params, headers, }));
  }

  put(url, { data, params, headers, } = {}) {
    return asyncify(this.api.put(url, { data, params, headers, }));
  }

  patch(url, { data, params, headers, } = {}) {
    return asyncify(this.api.patch(url, { data, params, headers, }));
  }

  delete(url, { params, headers, } = {}) {
    return asyncify(this.api.delete(url, { params, headers, }));
  }
}

export default AxiosAdapter;

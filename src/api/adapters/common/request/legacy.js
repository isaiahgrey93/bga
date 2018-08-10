import md5 from 'blueimp-md5';

import { asyncify, } from 'utilities';

import RequestPort from './port';

class LegacyAdapter extends RequestPort {
  constructor({ api, }) {
    super({ api, });

    this.api = api;
  }

  async token() {
    const { response, error, } = await asyncify(this.api.post('/secure/token'));

    if (error) {
      throw error;
    }

    try {
      return JSON.parse(atob(response));
    } catch (e) {
      return { error: e, };
    }
  }

  async create(id, data) {
    const { error, response, } = await asyncify(this.token());

    if (error) {
      throw error;
    }

    const {
      time,
      uri_main: uriMain,
      uri_secret: uriSecret,
      uri_duration: uriDuration,
    } = response;

    const main = atob(uriMain);
    const secret = atob(uriSecret);
    const expiry = (time + uriDuration).toString(16);

    const token = md5(md5(md5(secret) + md5(expiry) + md5(main) + md5('pushcontrolz.secure.token')));

    return {
      url: `/secure/${token}/${expiry}/${main}`,
      request: {
        request: {
          id,
          data,
          credentials: {
            token: process.env.REACT_APP_API_TOKEN,
            secret: process.env.REACT_APP_API_SECRET,
          },
        },
      },
    };
  }
}

export default LegacyAdapter;

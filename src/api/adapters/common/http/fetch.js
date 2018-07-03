import { asyncify, } from 'utilities';

import HttpPort from './port';

class FetchAdapter extends HttpPort {
  // rough WIP
  async post(url, data) {
    try {
      const request = await fetch(this.url + url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: Object.assign({}, this.headers),
      });

      return asyncify(request.json());
    } catch (error) {
      return asyncify(error);
    }
  }
}

export default FetchAdapter;

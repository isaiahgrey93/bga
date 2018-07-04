class HttpPort {
  constructor({ url, headers, } = {}) {
    if (!url) {
      throw new Error('HttpAdapter parameter @url is required. new HttpAdapter.adapter({ url: @url})');
    }

    if (!headers) {
      throw new Error('HttpAdapter parameter @headers is required. new HttpAdapter.adapter({ headers: @headers })');
    }
  }

  get token() {
    throw new Error('HttpAdapter getter @token is not implemented');
  }

  set token(token) {
    throw new Error('HttpAdapter setter @token() is not implemented');
  }

  get() {
    throw new Error('HttpAdapter method @get() is not implemented.');
  }

  post() {
    throw new Error('HttpAdapter method @post() is not implemented.');
  }

  put() {
    throw new Error('HttpAdapter method @put() is not implemented.');
  }

  patch() {
    throw new Error('HttpAdapter method @patch() is not implemented.');
  }

  delete() {
    throw new Error('HttpAdapter method @delete() is not implemented.');
  }
}

export default HttpPort;

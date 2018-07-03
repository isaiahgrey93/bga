import AuthenticationPort from './port';

class HttpAuthentication extends AuthenticationPort {
  constructor({ api, }) {
    super({ api, });

    this.api = api;
  }

  async login(email, password) {
    return this.api.post('/donor/login', {
      email,
      password,
    });
  }
}

export default HttpAuthentication;

import AuthenticationPort from './port';

class HttpAuthentication extends AuthenticationPort {
  constructor({ api, }) {
    super({ api, });

    this.api = api;
  }

  async login(email, password) {
    const { error, response, } = await this.api.post('/donor/login', {
      data: {
        email,
        password,
      },
    });

    if (error) {
      return { error, };
    }

    return {
      response: response.data,
    };
  }
}

export default HttpAuthentication;

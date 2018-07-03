class AuthenticationPort {
  constructor({ api, }) {
    if (!api) {
      throw new Error('AuthenticationAdapter parameter @api is required. new HttpAdapter.adapter({ api: @url })');
    }
  }

  login() {
    throw new Error('AuthenticationAdapter method @login() is not implemented.');
  }
}

export default AuthenticationPort;

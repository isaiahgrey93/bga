class DonorPort {
  constructor({ api, }) {
    if (!api) {
      throw new Error('DonorAdapter parameter @api is required. new HttpAdapter.adapter({ api: @url })');
    }
  }

  signup() {
    throw new Error('DonorAdapter method @login() is not implemented.');
  }

  login() {
    throw new Error('DonorAdapter method @login() is not implemented.');
  }
}

export default DonorPort;

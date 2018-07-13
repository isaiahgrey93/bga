import DonorPort from './port';

// TODO: Sample requests for API hookup
// - Refactor to handle errors with codes
// - Add tests with full mocks
// - Add data entity transforms
class LegacyDonor extends DonorPort {
  constructor({ api, request, }) {
    super({ api, request, });

    this.api = api;
    this.request = request;
  }

  login = async (data) => {
    const { email, password, } = data;

    const { url, request, } = await this.request.create('donor/login/', {
      type: 'email',
      email,
      password,
    });

    return this.api.post(url, { data: request, });
  };

  signup = async (data) => {
    const {
      email,
      password,
      name,
      city,
      state,
      zip,
      country,
      picture,
      phone,
      udid,
      udinfo,
    } = data;

    const { url, request, } = await this.request.create('donor/signup/', {
      type: 'email',
      email,
      password,
      name,
      city,
      state,
      zip,
      country,
      picture,
      phone,
      udid,
      udinfo,
    });

    return this.api.post(url, { data: request, });
  };
}

export default LegacyDonor;

import { asyncify, } from 'utilities';

import { DonorProfileEntity, } from 'api/entities';

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

  async transformResponse(request, entity) {
    const result = await asyncify(request);

    if (result.error) {
      return result.error;
    }

    const {
      Response: { Error: error, Status: status, Result: response, },
    } = result.response;

    return status.code !== 0
      ? { error, }
      : { response: entity ? entity(response) : response, };
  }

  login = async (data) => {
    const { email, password, } = data;

    const { url, request, } = await this.request.create('donor/login/', {
      type: 'email',
      email,
      password,
    });

    return this.transformResponse(
      this.api.post(url, { data: request, }),
      DonorProfileEntity
    );
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

    return this.transformResponse(
      this.api.post(url, { data: request, }),
      DonorProfileEntity
    );
  };
}

export default LegacyDonor;

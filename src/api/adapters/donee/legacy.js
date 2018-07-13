import { asyncify, } from 'utilities';

import DoneePort from './port';

// TODO: Sample requests for API hookup
// - Refactor to handle errors with codes
// - Add tests with full mocks
class LegacyDonee extends DoneePort {
  constructor({ api, request, }) {
    super({ api, request, });

    this.api = api;
    this.request = request;
  }

  async transformResponse(request) {
    const result = await asyncify(request);

    if (result.error) {
      return result.error;
    }

    const {
      Response: { Error: error, Status: status, Result: response, },
    } = result.response;

    return status.code !== 0 ? { error, } : { response, };
  }

  async offerings(data) {
    const { donee, } = data;

    const { url, request, } = await this.request.create('donee/offerings/', {
      donee_id: donee,
    });

    return this.transformResponse(this.api.post(url, { data: request, }));
  }

  async profile(data) {
    const { donee, } = data;

    const { url, request, } = await this.request.create('donee/profile/', {
      donee_id: donee,
    });

    return this.transformResponse(this.api.post(url, { data: request, }));
  }

  async campaigns(data) {
    const { donee, } = data;

    const { url, request, } = await this.request.create('donee/campaigns/', {
      donee_id: donee,
    });

    return this.transformResponse(this.api.post(url, { data: request, }));
  }

  async defaultOfferings(data) {
    const { donee, } = data;

    const { url, request, } = await this.request.create(
      'donee/default_offerings/',
      {
        donee_id: donee,
      }
    );

    return this.transformResponse(this.api.post(url, { data: request, }));
  }

  async memoTemplates(data) {
    const { donee, } = data;

    const { url, request, } = await this.request.create(
      'donee/memo_templates/',
      {
        donee_id: donee,
      }
    );

    return this.transformResponse(this.api.post(url, { data: request, }));
  }

  async shareMessage(data) {
    const { donee, } = data;

    const { url, request, } = await this.request.create(
      'donee/get_share_message/',
      {
        donee_id: donee,
      }
    );

    return this.transformResponse(this.api.post(url, { data: request, }));
  }
}

export default LegacyDonee;

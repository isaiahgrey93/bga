import { HttpAdapter, RequestAdapter, } from 'api/adapters/common';

import { DoneeAdapter, DonorAdapter, } from 'api/adapters';

const {
  REACT_APP_LEGACY_API_VERSION: LEGACY_API_VERSION,
  REACT_APP_LEGACY_API_BASE_URL: LEGACY_API_BASE_URL,
} = process.env;

const LEGACY_API_URL = `${LEGACY_API_BASE_URL}/${LEGACY_API_VERSION}`;

const HttpApiService = new HttpAdapter.Axios({
  url: LEGACY_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const LegacyRequestService = new RequestAdapter.Legacy({
  api: HttpApiService,
});

const LegacyDonorService = new DonorAdapter.Legacy({
  api: HttpApiService,
  request: LegacyRequestService,
});

const LegacyDoneeService = new DoneeAdapter.Legacy({
  api: HttpApiService,
  request: LegacyRequestService,
});

export default {
  donee: LegacyDoneeService,
  donor: LegacyDonorService,
};

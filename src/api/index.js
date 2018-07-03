import { HttpAdapter, } from 'api/adapters/common';

import { AuthenticationAdapter, } from 'api/adapters';

const TMP_MOCK_URL = 'https://www.mocky.io/v2/5185415ba171ea3a00704eed';

const HttpApiService = new HttpAdapter.Fetch({
  url: TMP_MOCK_URL,
  headers: {},
});

const AuthenticationService = new AuthenticationAdapter.Http({
  api: HttpApiService,
});

(async () => {
  const { error, response, } = await AuthenticationService.login(
    'isaiah@givelify.com',
    '123123'
  );

  return { error, response, };
})();

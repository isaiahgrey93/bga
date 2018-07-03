import { HttpAdapter, } from 'api/adapters/common';

import { AuthenticationAdapter, } from 'api/adapters';

const TEMP_URL = 'https://dev.givelify.com/api/rest/2.0';

const HttpApiService = new HttpAdapter.Axios({
  url: TEMP_URL,
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

  // console.log({ error, response });
  return { error, response, };
})();

import axios from 'axios';

import AxiosMockAdapter from 'axios-mock-adapter';

import AxiosAdapter from './axios';

describe('Axios HttpAdapter', () => {
  let http;
  let mock;

  beforeAll(() => {
    const url = 'https://fake.url';
    const headers = {};

    mock = new AxiosMockAdapter(axios);
    http = new AxiosAdapter({ url, headers, });
  });

  it('should return a response object on http success', async () => {
    mock.reset();
    mock.onAny('/success').reply(200, { status: 200, });

    const httpGet = await http.get('/success');
    const httpPost = await http.post('/success');
    const httpPut = await http.put('/success');
    const httpPatch = await http.patch('/success');
    const httpDelete = await http.delete('/success');

    expect(httpGet.response.status).toEqual(200);
    expect(httpPost.response.status).toEqual(200);
    expect(httpPut.response.status).toEqual(200);
    expect(httpPatch.response.status).toEqual(200);
    expect(httpDelete.response.status).toEqual(200);
  });

  it('should return an error object on error exception', async () => {
    mock.reset();
    mock.onAny('/exception').reply(500, { status: 500, });

    const httpGet = await http.get('/exception');
    const httpPost = await http.post('/exception');
    const httpPut = await http.put('/exception');
    const httpPatch = await http.patch('/exception');
    const httpDelete = await http.delete('/exception');

    expect(httpGet.error.status).toEqual(500);
    expect(httpPost.error.status).toEqual(500);
    expect(httpPut.error.status).toEqual(500);
    expect(httpPatch.error.status).toEqual(500);
    expect(httpDelete.error.status).toEqual(500);
  });
});

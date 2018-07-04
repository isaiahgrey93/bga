import axios from 'axios';

import AxiosMockAdapter from 'axios-mock-adapter';

import AxiosAdapter from './axios';

describe('Axios HttpAdapter', () => {
  let http;
  beforeAll(() => {
    const url = 'https://fake.url';
    const headers = {};

    const mock = new AxiosMockAdapter(axios);

    http = new AxiosAdapter({ url, headers, });

    mock.onAny('/success').reply(200, {});
    mock.onAny('/error').reply(500, {});
    mock.onAny('/exception').reply(() => {
      throw new Error('Exception');
    });
  });

  it('should return a response object on http success', async () => {
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
    const httpGet = await http.get('/exception');
    const httpPost = await http.post('/exception');
    const httpPut = await http.put('/exception');
    const httpPatch = await http.patch('/exception');
    const httpDelete = await http.delete('/exception');

    expect(httpGet.error).toBeInstanceOf(Error);
    expect(httpPost.error).toBeInstanceOf(Error);
    expect(httpPut.error).toBeInstanceOf(Error);
    expect(httpPatch.error).toBeInstanceOf(Error);
    expect(httpDelete.error).toBeInstanceOf(Error);
  });

  it('should set/get the HttpAdapter instance header token', () => {
    const token = '_token_';

    http.token = token;

    expect(token).toEqual(http.token);
  });
});

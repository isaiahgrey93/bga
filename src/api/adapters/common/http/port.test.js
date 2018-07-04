import HttpPort from './port';

describe('HttpAdapter Port', () => {
  it('to throw an error on class instance creation without a @url param', () => {
    expect(() => new HttpPort()).toThrowError();
  });

  it('to throw an error on class instance creation without a @headers param', () => {
    const url = 'https://fake.url';
    expect(() => new HttpPort({ url, })).toThrowError();
  });

  it('to throw an error on @get,@post,@put,@patch,@delete class method call', () => {
    const headers = {};
    const url = 'https://fake.url';

    const instance = new HttpPort({ url, headers, });

    expect(instance.get).toThrowError();
    expect(instance.post).toThrowError();
    expect(instance.put).toThrowError();
    expect(instance.patch).toThrowError();
    expect(instance.delete).toThrowError();
  });

  it('to throw an error on @token get,set', () => {
    const headers = {};
    const url = 'https://fake.url';

    const token = '_token_';

    const instance = new HttpPort({ url, headers, });

    expect(() => instance.token).toThrowError();
    expect(() => {
      instance.token = token;
    }).toThrowError();
  });
});

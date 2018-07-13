import RequestPort from './port';

describe('RequestAdapter Port', () => {
  it('to throw an error on @create class method call', () => {
    const instance = new RequestPort();

    expect(instance.create).toThrowError();
  });
});

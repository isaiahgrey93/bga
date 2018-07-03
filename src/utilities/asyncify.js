const asyncify = fn =>
  new Promise(async (resolve) => {
    try {
      const response = (await fn) || {};

      if (response.response !== undefined || response.error !== undefined) {
        return resolve(response);
      }

      return resolve({ response, });
    } catch (error) {
      if (error.response !== undefined || error.error !== undefined) {
        return resolve(error);
      }

      return resolve({ error, });
    }
  });

export default asyncify;

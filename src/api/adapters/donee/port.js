class DoneePort {
  constructor({ api, }) {
    if (!api) {
      throw new Error('DoneeAdapter parameter @api is required. new HttpAdapter.adapter({ api: @url })');
    }
  }

  offerings() {
    throw new Error('DoneeAdapter method @offerings() is not implemented.');
  }

  profile() {
    throw new Error('DoneeAdapter method @profile() is not implemented.');
  }

  campaigns() {
    throw new Error('DoneeAdapter method @campaigns() is not implemented.');
  }

  defaultOfferings() {
    throw new Error('DoneeAdapter method @defaultOfferings() is not implemented.');
  }

  memoTemplates() {
    throw new Error('DoneeAdapter method @memoTemplates() is not implemented.');
  }

  shareMessage() {
    throw new Error('DoneeAdapter method @shareMessage() is not implemented.');
  }
}

export default DoneePort;

import { Container } from 'unstated';

import storage from 'localforage';

storage.config({
  name: 'givelify-bga',
});

class Store extends Container {
  constructor(props) {
    super(props);

    const { key, version } = props;

    if (!key) {
      throw new Error(
        "Argument 'key' is required to create a 'Store' class instance."
      );
    }

    if (!version) {
      throw new Error(
        "Argument 'version' is required to create a 'Store' class instance."
      );
    }

    this.persist = props;
    this.hydrated = false;
    this.subscribe(this.update);

    this.init();
  }

  key() {
    const { key, version } = this.persist;

    return `${key}__${version}`;
  }

  ready() {
    return new Promise(resolve => {
      this.hyrdation = setInterval(() => {
        if (this.hydrated) {
          resolve(true);
          clearInterval(this.hyrdation);
        }
      }, 10);
    });
  }

  update = () => {
    storage.setItem(this.key(), this.state);
  };

  async init() {
    await storage.ready();
    const value = await storage.getItem(this.key());

    this.setState(
      () => ({ ...(value ? value : {}) }),
      () => {
        this.hydrated = true;
      }
    );
  }
}

export default Store;

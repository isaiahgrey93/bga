import React from 'react';
import PropTypes from 'prop-types';

import { Provider, Subscribe, } from 'unstated';
import { PersistContainer, } from 'unstated-persist';

import localForage from 'localforage';

import { DoneeOfferingsEntity, } from 'api/entities';

class DoneeOfferingsStore extends PersistContainer {
  persist = {
    version: '1.0',
    key: 'DoneeOfferings',
    storage: localForage,
  };

  state = {
    list: new DoneeOfferingsEntity(),
  };

  setOfferings = (value, cb) =>
    this.setState(
      () => ({ list: new DoneeOfferingsEntity(value), }),
      () => cb && cb()
    );
}

export const store = new DoneeOfferingsStore();

const DoneeOfferings = ({ children, }) => (
  <Provider>
    <Subscribe to={[store, ]}>
      {({ state, }) =>
        children({
          state,
          store,
        })
      }
    </Subscribe>
  </Provider>
);

DoneeOfferings.propTypes = {
  children: PropTypes.func,
};

DoneeOfferings.defaultProps = {
  children: undefined,
};

export default DoneeOfferings;

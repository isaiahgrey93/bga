import React from 'react';
import PropTypes from 'prop-types';

import update from 'immutability-helper';

import { Provider, Subscribe } from 'unstated';
import Store from 'stores/Store';

import { DoneeOfferingsEntity } from 'api/entities';

class DoneeOfferingsStore extends Store {
  state = {
    list: new DoneeOfferingsEntity(),
  };

  setOfferings = (value, cb) =>
    this.setState(
      state => update(state, { list: { $set: value } }),
      () => cb && cb()
    );
}

export const store = new DoneeOfferingsStore({
  version: '1.0',
  key: 'DoneeOfferings',
});

const DoneeOfferings = ({ children }) => (
  <Provider>
    <Subscribe to={[store]}>
      {({ state }) =>
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

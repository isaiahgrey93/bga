import React from 'react';
import PropTypes from 'prop-types';
import { Container, Provider, Subscribe, } from 'unstated';

import { DoneeOfferingsEntity, } from 'api/entities';

class DoneeOfferingsStore extends Container {
  state = {
    list: new DoneeOfferingsEntity(),
  };

  setOfferings = (value, cb) =>
    this.setState(
      () => ({ list: new DoneeOfferingsEntity(value), }),
      () => cb && cb()
    );
}

const store = new DoneeOfferingsStore();

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

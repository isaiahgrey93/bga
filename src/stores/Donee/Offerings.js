import React from 'react';
import PropTypes from 'prop-types';
import { Container, Provider, Subscribe } from 'unstated';

import api from 'api';
import { DoneeOfferingsEntity } from 'api/entities';
import { DoneeApiProvider } from 'providers';

class DoneeOfferingsStore extends Container {
  state = {
    list: new DoneeOfferingsEntity(),
  };

  setOfferings = (value, cb) =>
    this.setState(
      () => ({ list: new DoneeOfferingsEntity(value) }),
      () => cb && cb()
    );
}

const store = new DoneeOfferingsStore();

const DoneeOfferings = ({ children, ...props }) => (
  <DoneeApiProvider.Offerings
    request={api.donee.offerings}
    onComplete={store.setOfferings}
    {...props}
  >
    {({ error, loading }) => (
      <Provider>
        <Subscribe to={[store]}>
          {({ state }) =>
            children({
              state,
              store,
              error,
              loading,
            })
          }
        </Subscribe>
      </Provider>
    )}
  </DoneeApiProvider.Offerings>
);

DoneeOfferings.propTypes = {
  children: PropTypes.func,
};

DoneeOfferings.defaultProps = {
  children: undefined,
};

export default DoneeOfferings;

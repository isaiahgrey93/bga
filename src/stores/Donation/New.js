import React from 'react';
import PropTypes from 'prop-types';
import { Container, Provider, Subscribe } from 'unstated';

import { DonationEntity } from 'api/entities';

class NewDonationStore extends Container {
  state = new DonationEntity();

  setPurpose = (purpose, amount, cb) =>
    this.setState(
      state => ({
        purposes: {
          ...state.purposes,
          [purpose.id]: {
            ...(state.purposes[purpose.id] ? state.purposes[purpose.id] : {}),
            ...(purpose || {}),
            amount: amount
              ? amount
              : state.purposes[purpose.id]
                ? state.purposes[purpose.id].amount
                : undefined,
          },
        },
      }),
      () => cb && cb()
    );
}

const store = new NewDonationStore();

const NewDonation = ({ children }) => (
  <Provider>
    <Subscribe to={[store]}>
      {({ state }) => children({ state, store })}
    </Subscribe>
  </Provider>
);

NewDonation.propTypes = {
  children: PropTypes.func,
};

NewDonation.defaultProps = {
  children: undefined,
};

export default NewDonation;

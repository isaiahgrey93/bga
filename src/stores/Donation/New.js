import React from 'react';
import PropTypes from 'prop-types';
import { Container, Provider, Subscribe } from 'unstated';

import { DonationEntity } from 'api/entities';

class NewDonationStore extends Container {
  state = new DonationEntity();

  setAmount = value =>
    this.setState(state => ({
      amount: value,
    }));

  setPurpose = value =>
    this.setState(state => ({
      amount: undefined,
      purposes: {
        ...state.purposes,
        [value.id]: {
          ...(state.purposes[value.id] ? state.purposes[value.id] : {}),
          ...(value ? value : {}),
          amount: state.amount
            ? state.amount
            : state.purposes[value.id]
              ? state.purposes[value.id].amount
              : undefined,
        },
      },
    }));
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

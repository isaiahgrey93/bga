import React from 'react';
import PropTypes from 'prop-types';
import { Container, Provider, Subscribe, } from 'unstated';

import { DonationEntity, } from 'api/entities';

class NewDonationStore extends Container {
  state = new DonationEntity();

  setAmount = (value, cb) =>
    this.setState(
      state => ({
        amount: value,
      }),
      () => cb && cb()
    );

  setPurpose = (value, cb) =>
    this.setState(
      state => ({
        amount: undefined,
        purposes: {
          ...state.purposes,
          [value.id]: {
            ...(state.purposes[value.id] ? state.purposes[value.id] : {}),
            ...(value || {}),
            amount: state.amount
              ? state.amount
              : state.purposes[value.id]
                ? state.purposes[value.id].amount
                : undefined,
          },
        },
      }),
      () => cb && cb()
    );
}

const store = new NewDonationStore();

const NewDonation = ({ children, }) => (
  <Provider>
    <Subscribe to={[store, ]}>
      {({ state, }) => children({ state, store, })}
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

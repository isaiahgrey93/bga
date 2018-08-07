import React from 'react';
import PropTypes from 'prop-types';

import update from 'immutability-helper';

import { Provider, Subscribe } from 'unstated';
import Store from 'stores/Store';

import { DonationEntity } from 'api/entities';

class NewDonationStore extends Store {
  state = {
    value: new DonationEntity(),
  };

  setMemo = (memo, cb) =>
    this.setState(
      state =>
        update(state, {
          value: {
            memo: {
              $set: memo,
            },
          },
        }),
      () => cb && cb()
    );

  setFrequency = (frequency, cb) =>
    this.setState(
      state =>
        update(state, {
          value: {
            frequency: {
              $set: frequency,
            },
          },
        }),
      () => cb && cb()
    );

  setPurpose = (value, amount, cb) =>
    this.setState(state => {
      const { id } = value;
      const purposes = state.value.purposes;
      const purpose = purposes[id];

      let _amount = undefined;

      if (amount) {
        _amount = amount;
      }

      if (purpose) {
        _amount = purpose.amount;
      }

      return {
        value: {
          ...state.value,
          purposes: update(purposes, {
            $merge: {
              [id]: {
                ...value,
                amount: _amount,
              },
            },
          }),
        },
      };
    }, () => cb && cb());

  removePurpose = (purpose, cb) =>
    this.setState(
      state =>
        update(state, {
          value: {
            purposes: {
              $unset: [purpose.id],
            },
          },
        }),
      () => cb && cb()
    );
}

export const store = new NewDonationStore({
  version: '1.0',
  key: 'DonationNew',
});

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

import React from 'react';
import PropTypes from 'prop-types';

import { Provider, Subscribe, } from 'unstated';
import { PersistContainer, } from 'unstated-persist';

import localForage from 'localforage';

import { omit, } from 'lodash';

import { DonationEntity, } from 'api/entities';

class NewDonationStore extends PersistContainer {
  persist = {
    version: '1.0',
    key: 'DonationNew',
    storage: localForage,
  };

  state = new DonationEntity();

  setMemo = (memo, cb) =>
    this.setState(
      () => ({
        memo,
      }),
      () => cb && cb()
    );

  setFrequency = (frequency, cb) =>
    this.setState(
      () => ({
        frequency,
      }),
      () => cb && cb()
    );

  setPurpose = (purpose, amount, cb) =>
    this.setState(
      state => ({
        purposes: {
          ...state.purposes,
          [purpose.id]: {
            ...(state.purposes[purpose.id] ? state.purposes[purpose.id] : {}),
            ...(purpose || {}),
            amount:
              amount ||
              (state.purposes[purpose.id]
                ? state.purposes[purpose.id].amount
                : undefined),
          },
        },
      }),
      () => cb && cb()
    );

  removePurpose = (purpose, cb) =>
    this.setState(
      state => ({
        purposes: omit(state.purposes, [purpose.id, ]),
      }),
      () => cb && cb()
    );
}

export const store = new NewDonationStore();

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

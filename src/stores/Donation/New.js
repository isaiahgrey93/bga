import React from 'react';
import PropTypes from 'prop-types';
import { Container, Provider, Subscribe, } from 'unstated';

import { DonationEntity, } from 'api/entities';

class NewDonationStore extends Container {
  state = new DonationEntity();

  setAmount = value => this.setState(() => ({ amount: value, }));

  setPurpose = value => this.setState(() => ({ purpose: value, }));
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

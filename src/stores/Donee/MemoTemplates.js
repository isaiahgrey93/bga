import React from 'react';
import PropTypes from 'prop-types';

import update from 'immutability-helper';

import { Provider, Subscribe } from 'unstated';
import Store from 'stores/Store';

import { DoneeMemoTemplatesEntity } from 'api/entities';

class DoneeMemoTemplatesStore extends Store {
  state = {
    list: new DoneeMemoTemplatesEntity(),
  };

  setMemoTemplates = (value, cb) =>
    this.setState(
      state => update(state, { list: { $set: value } }),
      () => cb && cb()
    );
}

export const store = new DoneeMemoTemplatesStore({
  version: '1.0',
  key: 'DoneeMemoTemplates',
});

const DoneeMemoTemplates = ({ children }) => (
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

DoneeMemoTemplates.propTypes = {
  children: PropTypes.func,
};

DoneeMemoTemplates.defaultProps = {
  children: undefined,
};

export default DoneeMemoTemplates;

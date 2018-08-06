import React from 'react';
import PropTypes from 'prop-types';

import { Provider, Subscribe, } from 'unstated';
import { PersistContainer, } from 'unstated-persist';

import localForage from 'localforage';

import { DoneeMemoTemplatesEntity, } from 'api/entities';

class DoneeMemoTemplatesStore extends PersistContainer {
  persist = {
    version: '1.0',
    key: 'DoneeMemoTemplates',
    storage: localForage,
  };

  state = {
    list: new DoneeMemoTemplatesEntity(),
  };

  setMemoTemplates = (value, cb) =>
    this.setState(
      () => ({ list: new DoneeMemoTemplatesEntity(value), }),
      () => cb && cb()
    );
}

export const store = new DoneeMemoTemplatesStore();

const DoneeMemoTemplates = ({ children, }) => (
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

DoneeMemoTemplates.propTypes = {
  children: PropTypes.func,
};

DoneeMemoTemplates.defaultProps = {
  children: undefined,
};

export default DoneeMemoTemplates;

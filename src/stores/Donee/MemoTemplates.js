import React from 'react';
import PropTypes from 'prop-types';
import { Container, Provider, Subscribe, } from 'unstated';

import api from 'api';
import { DoneeMemoTemplatesEntity, } from 'api/entities';
import { DataProvider, } from 'stores';

class DoneeMemoTemplatesStore extends Container {
  state = {
    list: new DoneeMemoTemplatesEntity(),
  };

  setMemoTemplates = (value, cb) =>
    this.setState(
      () => ({ list: new DoneeMemoTemplatesEntity(value), }),
      () => cb && cb()
    );
}

const store = new DoneeMemoTemplatesStore();

const DoneeMemoTemplates = ({ donee, children, ...props }) => (
  <DataProvider
    store={store}
    params={{ donee, }}
    request={api.donee.memoTemplates}
    onComplete={store.setMemoTemplates}
    {...props}
  >
    {({ error, loading, }) => (
      <Provider>
        <Subscribe to={[store, ]}>
          {({ state, }) =>
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
  </DataProvider>
);

DoneeMemoTemplates.propTypes = {
  donee: PropTypes.string.isRequired,
  children: PropTypes.func,
};

DoneeMemoTemplates.defaultProps = {
  children: undefined,
};

export default DoneeMemoTemplates;

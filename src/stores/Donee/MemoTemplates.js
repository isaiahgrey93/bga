import React from 'react';
import PropTypes from 'prop-types';
import { Container, Provider, Subscribe } from 'unstated';

import { DoneeMemoTemplatesEntity } from 'api/entities';
import { DoneeApiProvider } from 'providers';

class DoneeMemoTemplatesStore extends Container {
  state = {
    list: new DoneeMemoTemplatesEntity(),
  };

  setMemoTemplates = (value, cb) =>
    this.setState(
      () => ({ list: new DoneeMemoTemplatesEntity(value) }),
      () => cb && cb()
    );
}

const store = new DoneeMemoTemplatesStore();

const DoneeMemoTemplates = ({ children, ...props }) => (
  <DoneeApiProvider.MemoTemplates
    onComplete={store.setMemoTemplates}
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
  </DoneeApiProvider.MemoTemplates>
);

DoneeMemoTemplates.propTypes = {
  donee: PropTypes.string.isRequired,
  children: PropTypes.func,
};

DoneeMemoTemplates.defaultProps = {
  children: undefined,
};

export default DoneeMemoTemplates;

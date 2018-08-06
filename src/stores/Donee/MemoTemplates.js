import React from 'react';
import PropTypes from 'prop-types';
import { Container, Provider, Subscribe } from 'unstated';

import { DoneeMemoTemplatesEntity } from 'api/entities';

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

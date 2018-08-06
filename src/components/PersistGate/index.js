import React, { Component, } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Provider, Subscribe, } from 'unstated';

import { stores, } from 'stores';

const Wrapper = styled.div`
  opacity: ${props => (props.ready ? 1 : 0)};
  transition: all 0.4s ease-in;
`;

const isBoostrapped = containers =>
  Promise.all(containers.map(container =>
    container.persist.storage
      .ready()
      .then(() => true)
      .catch(() => false))).then(values => !!values.filter(v => v).length);

class PersistGate extends Component {
  state = { ready: false, };

  async componentDidMount() {
    const ready = await isBoostrapped(this.props.containers);

    this.setState(() => ({ ready, }));
  }

  render() {
    const { ready, } = this.state;
    const { children, } = this.props;

    return <Wrapper ready={ready}>{ready ? children : null}</Wrapper>;
  }
}

PersistGate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  containers: PropTypes.array.isRequired,
};

const PersistGateContainer = ({ children, }) => (
  <Provider>
    <Subscribe to={stores}>
      {(...containers) => (
        <PersistGate containers={containers}>{children}</PersistGate>
      )}
    </Subscribe>
  </Provider>
);

PersistGateContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default PersistGateContainer;

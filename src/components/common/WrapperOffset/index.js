import React, { Component, } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {
  WrapperContainer as StyledWrapperContainer,
  OffsetComponent as StyleOffsetComponent,
} from './styles';

class WrapperOffset extends Component {
  state = {
    height: 0,
  };

  componentDidMount() {
    this.onMeasure();
  }

  onMeasure = () =>
    this.setState(() => ({ height: this.measure(this.offset), }));

  getOffset = height => height / 2;

  measure = element => ReactDOM.findDOMNode(element).offsetHeight;

  render() {
    const { height, } = this.state;
    const { component, wrapper, ...props } = this.props;

    return (
      <StyledWrapperContainer {...props}>
        {wrapper}
        <StyleOffsetComponent
          offset={this.getOffset(height)}
          ref={(ref) => {
            this.offset = ref;
          }}
        >
          {component}
        </StyleOffsetComponent>
      </StyledWrapperContainer>
    );
  }
}

WrapperOffset.propTypes = {
  wrapper: PropTypes.node.isRequired,
  component: PropTypes.node.isRequired,
};

export default WrapperOffset;

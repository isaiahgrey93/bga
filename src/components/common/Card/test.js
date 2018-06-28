import React from 'react';
import sinon from 'sinon';
import { shallow, } from 'enzyme';
import 'jest-styled-components';

import { Card, } from 'components/common';

describe('Card event handlers', () => {
  it('should handle click event', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Card onClick={onClick} />);

    wrapper.simulate('click');
    expect(onClick).toHaveProperty('callCount', 1);
  });
});

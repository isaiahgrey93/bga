import React from 'react';
import sinon from 'sinon';
import { shallow, } from 'enzyme';

import { Card, } from 'components';

describe('Card event handlers', () => {
  it('should handle click event', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Card onClick={onClick} />);

    wrapper.simulate('click');
    expect(onClick).toHaveProperty('callCount', 1);
  });
});
import React from 'react';
import sinon from 'sinon';
import { shallow, } from 'enzyme';

import { SolidButton, } from 'components';

describe('SolidButton event handlers', () => {
  it('should handle click event', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<SolidButton onClick={onClick} />);

    wrapper.simulate('click');
    expect(onClick).toHaveProperty('callCount', 1);
  });
});

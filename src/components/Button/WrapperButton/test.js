import React from 'react';
import sinon from 'sinon';
import { shallow, } from 'enzyme';

import { WrapperButton, } from 'components';

describe('WrapperButton event handlers', () => {
  it('should handle button click', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<WrapperButton onClick={onClick} />);

    wrapper.simulate('click');
    expect(onClick).toHaveProperty('callCount', 1);
  });
});

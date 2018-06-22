import React from 'react';
import sinon from 'sinon';
import { shallow, } from 'enzyme';

import { OutlineButton, } from 'components';

describe('OutlineButton event handlers', () => {
  it('should handle click event', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<OutlineButton onClick={onClick} />);

    wrapper.simulate('click');
    expect(onClick).toHaveProperty('callCount', 1);
  });
});

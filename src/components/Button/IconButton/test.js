import React from 'react';
import sinon from 'sinon';
import { shallow, } from 'enzyme';

import { IconButton, } from 'components';

describe('IconButton event handlers', () => {
  it('should handle click event', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<IconButton name={<span>&rarr;</span>} onClick={onClick} />);

    wrapper.simulate('click');
    expect(onClick).toHaveProperty('callCount', 1);
  });
});

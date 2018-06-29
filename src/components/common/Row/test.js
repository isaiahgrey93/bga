import React from 'react';

import { shallow, } from 'enzyme';

import { Row, } from 'components/common';

describe('Row props rendered', () => {
  it('should render the left prop as the first child', () => {
    const left = 'left';
    const right = 'right';

    const wrapper = shallow(<Row left={left} right={right} />);

    const first = wrapper
      .dive()
      .childAt(0)
      .getElement();

    expect(first.props.children).toEqual(left);
  });

  it('should render the rgiht prop as the second child', () => {
    const left = 'left';
    const right = 'right';

    const wrapper = shallow(<Row left={left} right={right} />);

    const second = wrapper
      .dive()
      .childAt(1)
      .getElement();

    expect(second.props.children).toEqual(right);
  });
});

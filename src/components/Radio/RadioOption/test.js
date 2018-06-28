import React from 'react';
import sinon from 'sinon';
import { shallow, } from 'enzyme';
import 'jest-styled-components';

import { colors, } from 'theme';
import { RadioOption, } from 'components';

import { RadioOptionButton, RadioOptionButtonContainer, } from './styles';

describe('RadioOption event handlers', () => {
  it('should handle click event', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<RadioOption onSelect={onClick} />);

    wrapper.simulate('click');
    expect(onClick).toHaveProperty('callCount', 1);
  });
});

describe('RadioOption style modifiers', () => {
  it('should have a transparent centered circle when not selected', () => {
    const wrapper = shallow(<RadioOption selected={'weekly'} value={'monthly'} />);

    const container = wrapper
      .dive()
      .dive()
      .find(RadioOptionButton);

    expect(container).toHaveStyleRule('background-color', colors.transparent);
  });

  it('should have a primary blue centered circle when selected', () => {
    const wrapper = shallow(<RadioOption selected={'monthly'} value={'monthly'} />);

    const container = wrapper
      .dive()
      .dive()
      .find(RadioOptionButton);

    expect(container).toHaveStyleRule('background-color', colors.primaryBlue);
  });

  it('should have a grey 3 border when not selected', () => {
    const wrapper = shallow(<RadioOption selected={'weekly'} value={'monthly'} />);

    const container = wrapper
      .dive()
      .dive()
      .find(RadioOptionButtonContainer);

    expect(container).toHaveStyleRule('border-color', colors.grey3);
  });

  it('should have a primary blue border when selected', () => {
    const wrapper = shallow(<RadioOption selected={'monthly'} value={'monthly'} />);

    const container = wrapper
      .dive()
      .dive()
      .find(RadioOptionButtonContainer);

    expect(container).toHaveStyleRule('border-color', colors.primaryBlue);
  });
});

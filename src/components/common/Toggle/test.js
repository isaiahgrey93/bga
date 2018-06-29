import React from 'react';

import { shallow, } from 'enzyme';
import 'jest-styled-components';

import { Toggle, } from 'components/common';

import { ToggleSlide, ToggleKnob, } from 'components/common/Toggle/styles';

import {
  inActiveSlideBorderColor,
  inActiveSlideBackgroundColor,
  inActiveKnobBackgroundColor,
  inActiveKnobPosition,
  activeSlideBorderColor,
  activeSlideBackgroundColor,
  activeKnobBackgroundColor,
  activeKnobPosition,
} from 'components/common/Toggle/constants';

describe('Toggle style modifiers', () => {
  it('should have have a white knob when inactive', () => {
    const wrapper = shallow(<Toggle />);

    const knob = wrapper.find(ToggleKnob);

    expect(knob).toHaveStyleRule(
      'background-color',
      inActiveKnobBackgroundColor
    );
  });

  it('should have have a primary blue knob when active', () => {
    const wrapper = shallow(<Toggle active />);

    const knob = wrapper.find(ToggleKnob);

    expect(knob).toHaveStyleRule('background-color', activeKnobBackgroundColor);
  });

  it('should have have a grey background slide when inactive', () => {
    const wrapper = shallow(<Toggle />);

    const slide = wrapper.find(ToggleSlide);

    expect(slide).toHaveStyleRule(
      'background-color',
      inActiveSlideBackgroundColor
    );
  });

  it('should have have a light blue background slide when active', () => {
    const wrapper = shallow(<Toggle active />);

    const slide = wrapper.find(ToggleSlide);

    expect(slide).toHaveStyleRule(
      'background-color',
      activeSlideBackgroundColor
    );
  });

  it('should have have a transparent slide border when active', () => {
    const wrapper = shallow(<Toggle active />);

    const slide = wrapper.find(ToggleSlide);

    expect(slide).toHaveStyleRule('border-color', activeSlideBorderColor);
  });

  it('should have have a grey slide border when inactive', () => {
    const wrapper = shallow(<Toggle />);

    const slide = wrapper.find(ToggleSlide);

    expect(slide).toHaveStyleRule('border-color', inActiveSlideBorderColor);
  });

  it('should have the knob positioned on the right when active', () => {
    const wrapper = shallow(<Toggle active />);

    const knob = wrapper.find(ToggleKnob);

    expect(knob).toHaveStyleRule('left', activeKnobPosition);
  });

  it('should have the knob positioned on the left when inactive', () => {
    const wrapper = shallow(<Toggle />);

    const knob = wrapper.find(ToggleKnob);

    expect(knob).toHaveStyleRule('left', inActiveKnobPosition);
  });
});

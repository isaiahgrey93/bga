import React from 'react';
import { shallow, } from 'enzyme';
import 'jest-styled-components';

import { colors, } from 'theme';

import { AmountInput, } from 'components';
import { Input, } from 'components/Input/AmountInput/styles';

describe('AmountInput style modifiers', () => {
  it('On focus the input container border color should be primary blue', () => {
    const wrapper = shallow(<AmountInput />);

    const input = wrapper.find(Input);
    input.simulate('focus');

    expect(wrapper).toHaveStyleRule('border-color', colors.primaryBlue);
  });

  it('On blur the input container border color should be grey 4', () => {
    const wrapper = shallow(<AmountInput />);

    const input = wrapper.find(Input);
    input.simulate('focus');
    input.simulate('blur');

    expect(wrapper).toHaveStyleRule('border-color', colors.grey4);
  });
});

describe('AmountInput value formatting', () => {
  it('should parse a number with a simple decimal value', () => {
    const inputValue = '4750.24';
    const expectedValue = '4,750.24';

    const wrapper = shallow(<AmountInput value={inputValue} />);

    const input = wrapper.find(Input);

    const formattedValue = input.getElement().props.value;

    expect(formattedValue).toEqual(expectedValue);
  });

  it('should parse a number with a no decimal value', () => {
    const inputValue = '4750';
    const expectedValue = '4,750';

    const wrapper = shallow(<AmountInput value={inputValue} />);

    const input = wrapper.find(Input);

    const formattedValue = input.getElement().props.value;

    expect(formattedValue).toEqual(expectedValue);
  });

  it('should parse a number and retain a incomplete decimal', () => {
    const inputValue = '4750.';
    const expectedValue = '4,750.';

    const wrapper = shallow(<AmountInput value={inputValue} />);

    const input = wrapper.find(Input);

    const formattedValue = input.getElement().props.value;

    expect(formattedValue).toEqual(expectedValue);
  });

  it('should parse a number with a invalid value', () => {
    const inputValue = 'ab4750.23';
    const expectedValue = '4,750.23';

    const wrapper = shallow(<AmountInput value={inputValue} />);

    const input = wrapper.find(Input);

    const formattedValue = input.getElement().props.value;

    expect(formattedValue).toEqual(expectedValue);
  });

  it('should parse a number with a without a integer part', () => {
    const inputValue = '.23';
    const expectedValue = '0.23';

    const wrapper = shallow(<AmountInput value={inputValue} />);

    const input = wrapper.find(Input);

    const formattedValue = input.getElement().props.value;

    expect(formattedValue).toEqual(expectedValue);
  });

  it('should parse a number with more than 2 decimal places', () => {
    const inputValue = '0.2393202';
    const expectedValue = '0.23';

    const wrapper = shallow(<AmountInput value={inputValue} />);

    const input = wrapper.find(Input);

    const formattedValue = input.getElement().props.value;

    expect(formattedValue).toEqual(expectedValue);
  });
});

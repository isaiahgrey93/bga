import React from 'react';
import { shallow, } from 'enzyme';
import 'jest-styled-components';

import { colors, } from 'theme';

import { TextInput, } from 'components/common';
import { Input, } from 'components/common/Input/TextInput/styles';

const TestIcon = () => <span>&times;</span>;

describe('TextInput style modifers', () => {
  it('On focus the input container bottom border color should be primary blue', () => {
    const wrapper = shallow(<TextInput icon={TestIcon} />);

    const input = wrapper.find(Input);
    input.simulate('focus');

    expect(wrapper).toHaveStyleRule('border-bottom-color', colors.primaryBlue);
  });

  it('On blur the input container bottom border color should be grey 4', () => {
    const wrapper = shallow(<TextInput icon={TestIcon} />);

    const input = wrapper.find(Input);
    input.simulate('focus');
    input.simulate('blur');

    expect(wrapper).toHaveStyleRule('border-bottom-color', colors.grey4);
  });
});

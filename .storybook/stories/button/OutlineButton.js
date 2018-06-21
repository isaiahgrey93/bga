import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select, number, boolean } from '@storybook/addon-knobs/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { OutlineButton } from 'components';
import {
  buttonSizes,
  buttonColors,
} from 'components/Button/OutlineButton/constants';

const buttonSizeOptions = Object.keys(buttonSizes);
const buttonColorOptions = Object.keys(buttonColors);

decorateAddons(storiesOf('Button/Outline Button', module))
  .addWithJSX('Component', () => (
    <OutlineButton
      value={text('Label', 'ButtonText')}
      fluid={boolean('Full Width', false)}
      size={select('Size', buttonSizeOptions, buttonSizeOptions[0])}
      color={select('Color', buttonColorOptions, buttonColorOptions[0])}
    />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(OutlineButton, {
      value: ['ButtonText'],
      color: buttonColorOptions,
      fluid: [true, false],
      size: buttonSizeOptions,
    })
  );

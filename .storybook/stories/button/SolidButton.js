import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select, number, boolean } from '@storybook/addon-knobs/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';
import { storyAction } from 'story-utilities';

import { SolidButton } from 'components';
import {
  buttonSizes,
  backgroundColors,
  shadowTypes,
} from 'components/Button/SolidButton/constants';

const buttonSizeOptions = Object.keys(buttonSizes);
const shadowTypeOptions = Object.keys(shadowTypes);
const backgroundColorOptions = Object.keys(backgroundColors);

decorateAddons(storiesOf('Button/Solid Button', module))
  .addWithJSX('Component', () => (
    <SolidButton
      value={text('Label', 'ButtonText')}
      fluid={boolean('Full Width', false)}
      size={select('Size', buttonSizeOptions, buttonSizeOptions[0])}
      color={select('Color', backgroundColorOptions, backgroundColorOptions[0])}
      raised={select('Shadow Depth', shadowTypeOptions, shadowTypeOptions[0])}
      onClick={storyAction('onClick')}
    />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(SolidButton, {
      value: ['ButtonText'],
      color: backgroundColorOptions,
      fluid: [true, false],
      size: buttonSizeOptions,
      raised: shadowTypeOptions,
    })
  );
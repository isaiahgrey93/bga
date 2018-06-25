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
  defaultShadowType,
  defaultColor,
  defaultButtonSize,
} from 'components/Button/SolidButton/constants';

const buttonSizeOptions = Object.keys(buttonSizes);
const shadowTypeOptions = Object.keys(shadowTypes);
const backgroundColorOptions = Object.keys(backgroundColors);

decorateAddons(storiesOf('Button/Solid Button', module))
  .addWithJSX('Component', () => (
    <SolidButton
      value={text('Label', 'ButtonText')}
      fluid={boolean('Full Width', false)}
      size={select('Size', buttonSizeOptions, defaultButtonSize)}
      color={select('Color', backgroundColorOptions, defaultColor)}
      raised={select('Shadow Depth', shadowTypeOptions, defaultShadowType)}
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

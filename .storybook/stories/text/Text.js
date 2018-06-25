import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { text, select, number, boolean } from '@storybook/addon-knobs/react';

import { decorateAddons } from 'story-decorators';

import { Text } from 'components';

import {
  defaultTextSize,
  defaultTextWeight,
  defaultTextColor,
  textSizes,
  textColors,
  textWeights,
} from 'components/Text/constants';

const textSizeOptions = Object.keys(textSizes);
const textColorOptions = Object.keys(textColors);
const textWeightOptions = Object.keys(textWeights);

decorateAddons(storiesOf('Text', module))
  .addWithJSX('Component', () => (
    <Text
      value={text('Content', 'TextContent')}
      size={select('Size', textSizeOptions, defaultTextSize)}
      color={select('color', textColorOptions, defaultTextColor)}
      weight={select('weight', textWeightOptions, defaultTextWeight)}
    />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(Text, {
      value: ['TextContent'],
      color: textColorOptions,
      weight: textWeightOptions,
      size: textSizeOptions,
    })
  );

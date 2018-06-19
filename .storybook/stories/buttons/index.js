import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select, number } from '@storybook/addon-knobs/react';

import { decorateAddons } from 'story-decorators';

import { SolidButton } from 'components';
import {
  buttonSizes,
  backgroundColors,
  shadowTypes,
} from 'components/Button/SolidButton/constants';

const buttonSizeOptions = Object.keys(buttonSizes);
const shadowTypeOptions = Object.keys(shadowTypes);
const backgroundColorOptions = Object.keys(backgroundColors);

decorateAddons(storiesOf('Buttons', module)).addWithJSX('Solid Button', () => (
  <SolidButton
    value={text('Label', 'ButtonText')}
    size={select('Size', buttonSizeOptions, buttonSizeOptions[0])}
    color={select('Color', backgroundColorOptions, backgroundColorOptions[0])}
    raised={select('Shadow Depth', shadowTypeOptions, shadowTypeOptions[0])}
  />
));

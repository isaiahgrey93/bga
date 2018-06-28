import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select, number, boolean } from '@storybook/addon-knobs/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';
import { storyAction } from 'story-utilities';

import { OutlineButton } from 'components/common';
import {
  buttonSizes,
  buttonColors,
} from 'components/common/Button/OutlineButton/constants';

const buttonSizeOptions = Object.keys(buttonSizes);
const buttonColorOptions = Object.keys(buttonColors);

decorateAddons(storiesOf('Button/Outline Button', module))
  .addWithJSX('Component', () => (
    <OutlineButton
      value={text('Label', 'ButtonText')}
      fluid={boolean('Full Width', false)}
      size={select('Size', buttonSizeOptions, buttonSizeOptions[0])}
      color={select('Color', buttonColorOptions, buttonColorOptions[0])}
      onClick={storyAction('onClick')}
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

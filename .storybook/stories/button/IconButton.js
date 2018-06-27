import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { text, select } from '@storybook/addon-knobs/react';

import { decorateAddons } from 'story-decorators';
import { storyAction } from 'story-utilities';

import { IconButton } from 'components';

import {
  buttonSizes,
  backgroundColors,
  shadowTypes,
  defaultShadowType,
  defaultColor,
  defaultButtonSize,
} from 'components/Button/IconButton/constants';

const buttonSizeOptions = Object.keys(buttonSizes);
const shadowTypeOptions = Object.keys(shadowTypes);
const backgroundColorOptions = Object.keys(backgroundColors);

const icons = {
  'right-arrow': <span>&rarr;</span>,
  'left-arrow': <span>&larr;</span>,
  plus: <span>&#43;</span>,
  close: <span>&#215;</span>,
  mail: <span>&#9993;</span>,
};

decorateAddons(storiesOf('Button/Icon Button', module))
  .addWithJSX('Component', () => (
    <IconButton
      name={icons[select('Icon', Object.keys(icons), Object.keys(icons)[0])]}
      size={select('Size', buttonSizeOptions, buttonSizeOptions[3])}
      color={select('Color', backgroundColorOptions, backgroundColorOptions[0])}
      raised={select('Shadow', shadowTypeOptions, shadowTypeOptions[0])}
      onClick={storyAction('onClick')}
    />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(IconButton, {
      name: [Object.values(icons)[0]],
      color: backgroundColorOptions,
      size: buttonSizeOptions,
      raised: shadowTypeOptions,
    })
  );

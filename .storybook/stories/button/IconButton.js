import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { boolean, text, select } from '@storybook/addon-knobs/react';

import { decorateAddons } from 'story-decorators';
import { storyAction } from 'story-utilities';

import { IconButton } from 'components/common';

import {
  sizes,
  backgroundColors,
  shadowTypes,
  defaultShadowType,
  defaultColor,
  defaultSize,
} from 'components/common/Button/IconButton/constants';

import { icons } from 'components/common/Icon/constants';

const sizeOptions = Object.keys(sizes);
const shadowTypeOptions = Object.keys(shadowTypes);
const backgroundColorOptions = Object.keys(backgroundColors);

decorateAddons(storiesOf('Button/Icon Button', module))
  .addWithJSX('Component', () => (
    <IconButton
      name={select('Icon', Object.keys(icons), Object.keys(icons)[0])}
      size={select('Size', sizeOptions, sizeOptions[3])}
      color={select('Color', backgroundColorOptions, backgroundColorOptions[0])}
      raised={select('Shadow', shadowTypeOptions, shadowTypeOptions[0])}
      onClick={storyAction('onClick')}
      iconProps={{
        fluid: boolean('Fluid', false),
      }}
    />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(IconButton, {
      name: [Object.keys(icons)[0]],
      color: backgroundColorOptions,
      size: sizeOptions,
      raised: shadowTypeOptions,
      iconProps: [{ fluid: false }, { fluid: true }],
    })
  );

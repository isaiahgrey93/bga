import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select, number, boolean } from '@storybook/addon-knobs/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';
import { storyAction } from 'story-utilities';

import { Tag } from 'components';
import {
  tagSizes,
  backgroundColors,
  defaultColor,
  defaultTagSize,
} from 'components/Tag/constants';

const tagSizeOptions = Object.keys(tagSizes);
const backgroundColorOptions = Object.keys(backgroundColors);

decorateAddons(storiesOf('Tag', module))
  .addWithJSX('Component', () => (
    <Tag
      value={text('Label', 'TagText')}
      size={select('Size', tagSizeOptions, defaultTagSize)}
      color={select('Color', backgroundColorOptions, defaultColor)}
      onClick={storyAction('onClick')}
    />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(Tag, {
      value: ['TagText'],
      color: backgroundColorOptions,
      size: tagSizeOptions,
    })
  );

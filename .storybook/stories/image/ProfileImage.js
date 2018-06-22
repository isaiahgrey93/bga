import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';
import { boolean, select, text } from '@storybook/addon-knobs';

import { ProfileImage } from 'components';

import {
  sizes,
  shapes,
  defaultSize,
  defaultShape,
} from 'components/Image/ProfileImage/constants';

const sizeOptions = Object.keys(sizes);
const shapeOptions = Object.keys(shapes);

const sampleImageURL = 'https://placehold.it/192/ccc/606060&&text=G';

decorateAddons(storiesOf('Image/Profile Image', module))
  .addWithJSX('Component', () => (
    <ProfileImage
      raised={boolean('Shadow', false)}
      bordered={boolean('Border', false)}
      size={select('Size', sizeOptions, defaultSize)}
      shape={select('Shape', shapeOptions, defaultShape)}
      source={text('Image URL', sampleImageURL)}
    />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(ProfileImage, {
      size: sizeOptions,
      shape: shapeOptions,
      raised: [true, false],
      bordered: [true, false],
      source: [sampleImageURL],
    })
  );

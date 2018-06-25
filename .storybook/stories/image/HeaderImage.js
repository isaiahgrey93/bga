import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';
import { text } from '@storybook/addon-knobs';

import { HeaderImage } from 'components';

const sampleImageURL = 'https://placehold.it/1200/ccc/606060&&text=Givelify';

decorateAddons(storiesOf('Image/Header Image', module))
  .addWithJSX('Component', () => (
    <HeaderImage source={text('Image URL', sampleImageURL)} />
  ))
  .add(
    'Prop Combinations',
    withPropsCombinations(HeaderImage, {
      source: [sampleImageURL],
    })
  );

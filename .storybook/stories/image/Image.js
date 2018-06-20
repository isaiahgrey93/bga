import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { Image } from 'components';

decorateAddons(storiesOf('Image', module))
  .addWithJSX('Component', () => <Image />)
  .add('Prop Combinations', withPropsCombinations(Image, {}));

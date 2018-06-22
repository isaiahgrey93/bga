import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { HeaderImage } from 'components';

decorateAddons(storiesOf('Image/Header Image', module))
  .addWithJSX('Component', () => <HeaderImage />)
  .add('Prop Combinations', withPropsCombinations(HeaderImage, {}));

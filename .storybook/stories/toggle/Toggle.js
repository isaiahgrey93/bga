import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { Toggle } from 'components';

decorateAddons(storiesOf('Toggle', module))
  .addWithJSX('Component', () => <Toggle />)
  .add('Prop Combinations', withPropsCombinations(Toggle, {}));

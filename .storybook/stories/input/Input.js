import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { Input } from 'components';

decorateAddons(storiesOf('Input', module))
  .addWithJSX('Component', () => <Input />)
  .add('Prop Combinations', withPropsCombinations(Input, {}));

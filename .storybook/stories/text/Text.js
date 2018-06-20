import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { Text } from 'components';

decorateAddons(storiesOf('Text', module))
  .addWithJSX('Component', () => <Text />)
  .add('Prop Combinations', withPropsCombinations(Text, {}));

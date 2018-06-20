import React from 'react';

import { storiesOf } from '@storybook/react';

import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { decorateAddons } from 'story-decorators';

import { Card } from 'components';

decorateAddons(storiesOf('Card', module))
  .addWithJSX('Component', () => <Card />)
  .add('Prop Combinations', withPropsCombinations(Card, {}));
